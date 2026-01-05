"""
PyPy - Python Learning Platform
Flask Backend Application
"""

from flask import Flask, render_template, jsonify, request
import os
import json
import markdown
from pathlib import Path

app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')

# Configuration
CONTENT_DIR = Path(__file__).parent.parent / 'content'
MODULES_DIR = CONTENT_DIR / 'modules'
QUIZZES_DIR = CONTENT_DIR / 'quizzes'
EXERCISES_DIR = CONTENT_DIR / 'exercises'
PROJECTS_DIR = CONTENT_DIR / 'projects'

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

def load_markdown(file_path):
    """Load and convert markdown file to HTML"""
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            return markdown.markdown(content)
    return None

def load_json(file_path):
    """Load JSON file"""
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return None

def get_all_modules():
    """Get list of all available modules"""
    modules = []
    if MODULES_DIR.exists():
        for i in range(1, 11):
            module_file = MODULES_DIR / f'module{i}.md'
            if module_file.exists():
                modules.append({
                    'id': i,
                    'file': f'module{i}.md',
                    'title': f'Module {i}'
                })
    return modules

def get_module_content(module_id):
    """Get content for a specific module"""
    module_file = MODULES_DIR / f'module{module_id}.md'
    return load_markdown(str(module_file))

# ============================================================================
# ROUTES - PAGES
# ============================================================================

@app.route('/')
def home():
    """Home page"""
    modules = get_all_modules()
    return render_template('index.html', modules=modules)

@app.route('/modules')
def modules_list():
    """List all modules"""
    modules = get_all_modules()
    return render_template('modules.html', modules=modules)

@app.route('/module/<int:module_id>')
def module_detail(module_id):
    """Detailed view of a specific module"""
    content = get_module_content(module_id)
    modules = get_all_modules()
    current_module = next((m for m in modules if m['id'] == module_id), None)
    
    return render_template('module_detail.html', 
                         module_id=module_id,
                         module=current_module,
                         content=content,
                         modules=modules)

@app.route('/practice')
def practice():
    """Practice section with exercises"""
    modules = get_all_modules()
    return render_template('practice.html', modules=modules)

@app.route('/quizzes')
def quizzes_list():
    """List all quizzes"""
    modules = get_all_modules()
    return render_template('quizzes.html', modules=modules)

@app.route('/quiz/<int:module_id>')
def quiz_detail(module_id):
    """Take a quiz for a specific module"""
    quiz_data = load_json(str(QUIZZES_DIR / f'module{module_id}_quiz.json'))
    modules = get_all_modules()
    current_module = next((m for m in modules if m['id'] == module_id), None)
    
    return render_template('quiz_detail.html',
                         module_id=module_id,
                         module=current_module,
                         quiz=quiz_data,
                         modules=modules)

@app.route('/resources')
def resources():
    """Resources and references page"""
    modules = get_all_modules()
    return render_template('resources.html', modules=modules)

@app.route('/roadmap')
def roadmap():
    """Learning roadmap"""
    modules = get_all_modules()
    return render_template('roadmap.html', modules=modules)

@app.route('/about')
def about():
    """About PyPy page"""
    return render_template('about.html')

# ============================================================================
# API ROUTES - DATA ENDPOINTS
# ============================================================================

@app.route('/api/modules')
def api_modules():
    """API endpoint for all modules"""
    modules = get_all_modules()
    return jsonify(modules)

@app.route('/api/module/<int:module_id>/content')
def api_module_content(module_id):
    """API endpoint for module content"""
    content = get_module_content(module_id)
    return jsonify({'content': content})

@app.route('/api/quiz/<int:module_id>')
def api_quiz(module_id):
    """API endpoint for quiz data"""
    quiz_data = load_json(str(QUIZZES_DIR / f'module{module_id}_quiz.json'))
    return jsonify(quiz_data)

@app.route('/api/exercises/<int:module_id>')
def api_exercises(module_id):
    """API endpoint for exercises"""
    exercises_data = load_json(str(EXERCISES_DIR / f'module{module_id}_exercises.json'))
    return jsonify(exercises_data)

@app.route('/api/projects')
def api_projects():
    """API endpoint for all projects"""
    projects = []
    if PROJECTS_DIR.exists():
        for project_file in sorted(PROJECTS_DIR.glob('project*.json')):
            project_data = load_json(str(project_file))
            if project_data:
                projects.append(project_data)
    return jsonify(projects)

@app.route('/api/project/<int:project_id>')
def api_project(project_id):
    """API endpoint for specific project"""
    project_data = load_json(str(PROJECTS_DIR / f'project{project_id}.json'))
    return jsonify(project_data)

# ============================================================================
# SUBMISSION ENDPOINTS
# ============================================================================

@app.route('/api/submit-quiz', methods=['POST'])
def submit_quiz():
    """Submit quiz answers and get results"""
    data = request.json
    module_id = data.get('module_id')
    answers = data.get('answers')
    
    quiz_data = load_json(str(QUIZZES_DIR / f'module{module_id}_quiz.json'))
    
    if not quiz_data:
        return jsonify({'error': 'Quiz not found'}), 404
    
    # Calculate score
    correct = 0
    total = len(quiz_data.get('questions', []))
    
    for i, question in enumerate(quiz_data.get('questions', [])):
        user_answer = answers.get(str(i))
        correct_answer = question.get('correct_answer')
        if user_answer == correct_answer:
            correct += 1
    
    score = (correct / total * 100) if total > 0 else 0
    
    return jsonify({
        'score': score,
        'correct': correct,
        'total': total,
        'passed': score >= 70
    })

@app.route('/api/check-exercise', methods=['POST'])
def check_exercise():
    """Check if exercise answer is correct"""
    data = request.json
    module_id = data.get('module_id')
    exercise_id = data.get('exercise_id')
    user_answer = data.get('answer')
    
    exercises_data = load_json(str(EXERCISES_DIR / f'module{module_id}_exercises.json'))
    
    if not exercises_data:
        return jsonify({'error': 'Exercises not found'}), 404
    
    exercise = next((e for e in exercises_data.get('exercises', []) 
                     if e.get('id') == exercise_id), None)
    
    if not exercise:
        return jsonify({'error': 'Exercise not found'}), 404
    
    # Simple answer checking (for text-based exercises)
    correct = user_answer.strip().lower() == exercise.get('expected_answer', '').strip().lower()
    
    return jsonify({
        'correct': correct,
        'feedback': exercise.get('feedback', ''),
        'solution': exercise.get('solution', '')
    })

# ============================================================================
# ERROR HANDLERS
# ============================================================================

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    """Handle 500 errors"""
    return render_template('500.html'), 500

# ============================================================================
# CONTEXT PROCESSORS
# ============================================================================

@app.context_processor
def inject_modules():
    """Inject modules list into all templates"""
    return {'all_modules': get_all_modules()}

# ============================================================================
# MAIN
# ============================================================================

if __name__ == '__main__':
    # Create content directories if they don't exist
    MODULES_DIR.mkdir(parents=True, exist_ok=True)
    QUIZZES_DIR.mkdir(parents=True, exist_ok=True)
    EXERCISES_DIR.mkdir(parents=True, exist_ok=True)
    PROJECTS_DIR.mkdir(parents=True, exist_ok=True)
    
    # Run development server
    print("🐍 PyPy - Python Learning Platform")
    print("=" * 50)
    print("Starting Flask server...")
    print("📍 Open http://localhost:5000 in your browser")
    print("=" * 50)
    
    app.run(debug=True, host='localhost', port=5000)
