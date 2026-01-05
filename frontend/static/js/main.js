/**
 * PyPy - Main JavaScript
 * Handles interactivity, quiz functionality, and dynamic content
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Highlight code blocks on page load
 */
function highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

/**
 * Fetch data from API endpoint
 */
async function fetchAPI(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

/**
 * Post data to API endpoint
 */
async function postAPI(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 6px;
                font-weight: 600;
                z-index: 2000;
                animation: slideIn 0.3s ease;
            }
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-success {
                background-color: #10b981;
                color: white;
            }
            .notification-error {
                background-color: #ef4444;
                color: white;
            }
            .notification-info {
                background-color: #3b82f6;
                color: white;
            }
            .notification-warning {
                background-color: #f59e0b;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Format time duration
 */
function formatDuration(minutes) {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Get progress percentage
 */
function getProgressPercentage(current, total) {
    return Math.round((current / total) * 100);
}

// ============================================================================
// NAVIGATION
// ============================================================================

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// ============================================================================
// QUIZ FUNCTIONALITY
// ============================================================================

class Quiz {
    constructor(moduleId) {
        this.moduleId = moduleId;
        this.quiz = null;
        this.userAnswers = {};
        this.init();
    }
    
    async init() {
        this.quiz = await fetchAPI(`/api/quiz/${this.moduleId}`);
        if (this.quiz) {
            this.renderQuiz();
        }
    }
    
    renderQuiz() {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer || !this.quiz) return;
        
        let html = '<div class="quiz-content">';
        
        this.quiz.questions.forEach((question, index) => {
            html += `
                <div class="quiz-question">
                    <h4>Question ${index + 1} of ${this.quiz.questions.length}</h4>
                    <p class="question-text">${question.question}</p>
                    <div class="quiz-options">
            `;
            
            question.options.forEach((option, optIndex) => {
                const id = `q${index}-o${optIndex}`;
                html += `
                    <label class="quiz-option">
                        <input type="radio" name="question${index}" value="${optIndex}" id="${id}">
                        <span>${option}</span>
                    </label>
                `;
            });
            
            html += `</div></div>`;
        });
        
        html += `
            <div class="quiz-actions">
                <button class="btn btn-primary" onclick="quizInstance.submitQuiz()">Submit Quiz</button>
                <button class="btn btn-secondary" onclick="quizInstance.resetQuiz()">Reset</button>
            </div>
        </div>
        `;
        
        quizContainer.innerHTML = html;
        window.quizInstance = this;
    }
    
    async submitQuiz() {
        // Collect answers
        const questions = this.quiz.questions.length;
        for (let i = 0; i < questions; i++) {
            const selected = document.querySelector(`input[name="question${i}"]:checked`);
            if (!selected) {
                showNotification('Please answer all questions', 'warning');
                return;
            }
            this.userAnswers[i] = parseInt(selected.value);
        }
        
        // Submit to server
        const result = await postAPI('/api/submit-quiz', {
            module_id: this.moduleId,
            answers: this.userAnswers
        });
        
        if (result) {
            this.showResults(result);
        }
    }
    
    showResults(result) {
        const quizContainer = document.getElementById('quiz-container');
        const percentage = Math.round(result.score);
        const passed = result.passed;
        
        let html = `
            <div class="quiz-results">
                <div class="results-card ${passed ? 'passed' : 'failed'}">
                    <h3>${passed ? '🎉 Passed!' : '❌ Try Again'}</h3>
                    <div class="score-display">
                        <div class="score-circle">
                            <span class="score-percentage">${percentage}%</span>
                        </div>
                        <p class="score-details">
                            You got <strong>${result.correct}</strong> out of <strong>${result.total}</strong> correct
                        </p>
                    </div>
                    <p class="results-message">
                        ${passed 
                            ? 'Excellent! You understand this topic well. Move to the next module.' 
                            : 'Review the lesson and try again to improve your score.'}
                    </p>
                    <div class="quiz-actions">
                        <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
                        <button class="btn btn-secondary" onclick="history.back()">Back to Module</button>
                    </div>
                </div>
            </div>
        `;
        
        quizContainer.innerHTML = html;
        
        // Save progress
        this.saveProgress(passed);
    }
    
    resetQuiz() {
        this.userAnswers = {};
        this.renderQuiz();
    }
    
    saveProgress(passed) {
        const progress = JSON.parse(localStorage.getItem('pypy-progress') || '{}');
        if (!progress.completedModules) progress.completedModules = [];
        
        if (passed && !progress.completedModules.includes(this.moduleId)) {
            progress.completedModules.push(this.moduleId);
            localStorage.setItem('pypy-progress', JSON.stringify(progress));
        }
    }
}

// ============================================================================
// EXERCISE FUNCTIONALITY
// ============================================================================

class Exercise {
    constructor(moduleId) {
        this.moduleId = moduleId;
        this.exercises = null;
        this.init();
    }
    
    async init() {
        this.exercises = await fetchAPI(`/api/exercises/${this.moduleId}`);
        if (this.exercises) {
            this.renderExercises();
        }
    }
    
    renderExercises() {
        const container = document.getElementById('exercises-container');
        if (!container || !this.exercises) return;
        
        let html = '<div class="exercises-list">';
        
        const difficulties = ['easy', 'medium', 'hard'];
        difficulties.forEach(difficulty => {
            const exercisesOfType = this.exercises.exercises.filter(e => e.difficulty === difficulty);
            if (exercisesOfType.length > 0) {
                html += `<h3>${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Exercises</h3>`;
                exercisesOfType.forEach(exercise => {
                    html += `
                        <div class="exercise-card difficulty-${difficulty}">
                            <h4>${exercise.title}</h4>
                            <p class="exercise-description">${exercise.description}</p>
                            <div class="exercise-content">
                                <pre><code class="language-python">${exercise.code}</code></pre>
                            </div>
                            <button class="btn btn-small" onclick="exerciseInstance.checkAnswer(${exercise.id})">
                                Check Solution
                            </button>
                            <div id="result-${exercise.id}" class="exercise-result"></div>
                        </div>
                    `;
                });
            }
        });
        
        html += '</div>';
        container.innerHTML = html;
        window.exerciseInstance = this;
        
        // Highlight code
        setTimeout(highlightCode, 100);
    }
    
    async checkAnswer(exerciseId) {
        const exercise = this.exercises.exercises.find(e => e.id === exerciseId);
        if (!exercise) return;
        
        const resultDiv = document.getElementById(`result-${exerciseId}`);
        resultDiv.innerHTML = `
            <div class="exercise-solution">
                <h5>Solution:</h5>
                <pre><code class="language-python">${exercise.solution}</code></pre>
                <p><strong>Explanation:</strong> ${exercise.explanation}</p>
            </div>
        `;
        
        highlightCode();
    }
}

// ============================================================================
// PROGRESS TRACKING
// ============================================================================

class ProgressTracker {
    constructor() {
        this.progress = this.loadProgress();
    }
    
    loadProgress() {
        return JSON.parse(localStorage.getItem('pypy-progress') || '{}');
    }
    
    saveProgress() {
        localStorage.setItem('pypy-progress', JSON.stringify(this.progress));
    }
    
    completeModule(moduleId) {
        if (!this.progress.completedModules) this.progress.completedModules = [];
        if (!this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
            this.saveProgress();
        }
    }
    
    getCompletionPercentage(totalModules = 10) {
        const completed = (this.progress.completedModules || []).length;
        return getProgressPercentage(completed, totalModules);
    }
    
    displayProgress() {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            const percentage = this.getCompletionPercentage();
            progressBar.innerHTML = `
                <div class="progress-container">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <p class="progress-text">${percentage}% Complete</p>
            `;
        }
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Highlight code blocks
    highlightCode();
    
    // Toggle mobile menu
    toggleMobileMenu();
    
    // Initialize progress tracker
    const progressTracker = new ProgressTracker();
    progressTracker.displayProgress();
    
    // Initialize quiz if on quiz page
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const moduleId = quizContainer.dataset.moduleId;
        if (moduleId) {
            window.quizInstance = new Quiz(parseInt(moduleId));
        }
    }
    
    // Initialize exercises if on exercise page
    const exercisesContainer = document.getElementById('exercises-container');
    if (exercisesContainer) {
        const moduleId = exercisesContainer.dataset.moduleId;
        if (moduleId) {
            window.exerciseInstance = new Exercise(parseInt(moduleId));
        }
    }
});

// ============================================================================
// DEBUGGING
// ============================================================================

// Simple logging utility
const log = {
    info: (msg) => console.log(`[INFO] ${msg}`),
    error: (msg) => console.error(`[ERROR] ${msg}`),
    warn: (msg) => console.warn(`[WARN] ${msg}`)
};
