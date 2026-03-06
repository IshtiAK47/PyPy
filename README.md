# 🐍 PyPy - Interactive Python Learning Platform

A comprehensive, interactive web-based platform for learning Python from beginner to advanced level. Perfect for students, educators, and anyone wanting to master Python programming.

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3-green)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## ✨ Features

### 📚 **Comprehensive Learning Content**
- **10 Complete Modules** covering Python fundamentals to advanced topics
- **121+ KB** of well-structured lesson content
- **600+ Code Examples** with explanations
- **70+ Topics** organized logically across 4 learning phases

### 💻 **Interactive Exercises & Practice**
- **40 Hands-On Exercises** with code editor and validation
- Difficulty levels: Easy, Medium, Hard
- Real-time feedback on solutions
- Reveal-solution feature with detailed explanations

### 📝 **Assessment Tools**
- **10 Interactive Quizzes** with 100+ questions
- **Instant Scoring** with explanations
- **Progress Tracking** in browser
- **70% Passing Threshold**

### 🎨 **Modern User Experience**
- **Fully Responsive Design** - Works on mobile, tablet, and desktop
- **Syntax Highlighting** - Professional code display with Highlight.js
- **Intuitive Navigation** - Clear learning path
- **Clean Interface** - Focus on learning

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip (Python package manager)

### Installation & Setup

#### Windows (PowerShell)
```powershell
# Clone the repository
git clone https://github.com/IshtiAK47/PyPy.git
cd PyPy

# Create virtual environment
python -m venv venv

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt

# Run the application
python backend/app.py
```

#### macOS/Linux (Terminal)
```bash
# Clone the repository
git clone https://github.com/IshtiAK47/PyPy.git
cd PyPy

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python backend/app.py
```

### Access the Application
Open your browser and go to:
```
http://localhost:5000
```

---

## 📖 The 10 Modules

| Module | Topics | Duration | Difficulty |
|--------|--------|----------|-----------|
| 1 | Python Intro, Setup, First Program | 1 week | Beginner |
| 2 | Variables, Data Types, Operators | 2 weeks | Beginner |
| 3 | Control Flow, Loops, Conditionals | 2 weeks | Beginner |
| 4 | String Manipulation, Formatting | 1 week | Beginner |
| 5 | Functions, Lambda, Scope | 2 weeks | Intermediate |
| 6 | Lists, Dictionaries, Sets, Tuples | 2 weeks | Intermediate |
| 7 | OOP, Classes, Inheritance | 3-4 weeks | Intermediate |
| 8 | Decorators, Generators, Exceptions | 3 weeks | Advanced |
| 9 | File I/O, Path Operations, JSON | 2 weeks | Advanced |
| 10 | External Libraries, APIs, Requests | 2-3 weeks | Advanced |

**Total Time:** 16-20 weeks (self-paced, 30-60 min/day)

---

## 📊 Project Structure

```
PyPy/
├── backend/
│   └── app.py                    # Flask web server
├── frontend/
│   ├── templates/                # 10+ HTML templates
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── modules.html
│   │   ├── practice.html
│   │   ├── quizzes.html
│   │   └── ...
│   └── static/
│       ├── css/style.css
│       └── js/main.js
├── content/
│   ├── modules/                  # 10 markdown lessons
│   ├── quizzes/                  # 10 quiz sets (JSON)
│   ├── exercises/                # 40 exercises (JSON)
│   └── projects/                 # Project specs
├── requirements.txt
└── README.md
```

---

## 🔧 Technology Stack

### Backend
- **Flask 2.3.3** - Lightweight web framework
- **Python 3.8+** - Programming language
- **Markdown** - Content format

### Frontend
- **HTML5** - Structure
- **CSS3** - Responsive styling
- **JavaScript (ES6)** - Interactivity
- **Highlight.js** - Code syntax highlighting

### Deployment
- **Gunicorn** - Production server
- **Docker** - Optional containerization

---

## 📋 Learning Path

### Phase 1: Foundations (Weeks 1-4)
Learn Python basics and write simple programs
- Modules 1-3

### Phase 2: Text & Functions (Weeks 5-8)
Master strings, functions, and code organization
- Modules 4-5

### Phase 3: Data & OOP (Weeks 9-16)
Build complex applications with data structures and OOP
- Modules 6-7

### Phase 4: Advanced & Real-World (Weeks 17-20)
Use advanced features and external libraries
- Modules 8-10

---

## 🌐 Key Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/modules` | Browse all lessons |
| `/module/<id>` | View lesson |
| `/practice` | Interactive exercises |
| `/quizzes` | Quiz selection |
| `/quiz/<id>` | Take a quiz |
| `/about` | About the platform |

---
## 📸 Sample Screenshots

| | |
|---|---|
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/1.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/2.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/3.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/4.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/5.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/6.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/7.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/8.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/9.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/10.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/11.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/12.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/13.png) | ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/14.png) |
| ![](https://raw.githubusercontent.com/IshtiAK47/PyPy/refs/heads/main/screenshots/15.png) | |


## 🎯 Key Features

### 📝 Interactive Exercises
- Write code in browser
- Instant feedback
- Step-by-step solutions
- Difficulty progression

### 🧪 Quiz System
- 100+ questions
- Multiple choice
- Instant scoring
- Detailed explanations

### 📊 Progress Tracking
- Browser-based storage
- Track completed modules
- Store quiz scores

---

## 🚀 Deployment

### PythonAnywhere (Recommended)
1. Go to https://www.pythonanywhere.com
2. Sign up (free tier available)
3. Clone repository
4. Configure Flask app
5. Deploy!

### Railway
1. Go to https://railway.app
2. Connect GitHub
3. Deploy with one click

### Docker
```bash
docker build -t pypy .
docker run -p 5000:5000 pypy
```

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed guides.

---

## 🛠️ Customization

### Change Theme Colors
Edit `frontend/static/css/style.css`:
```css
:root {
    --primary-color: #3776ab;      /* Python blue */
    --secondary-color: #ffd43b;    /* Python yellow */
}
```

### Add New Module
1. Create `content/modules/module11.md`
2. Create `content/quizzes/module11_quiz.json`
3. Create `content/exercises/module11_exercises.json`
4. Flask auto-discovers new content

---

## 🐛 Troubleshooting

### Port 5000 Already in Use
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Module Not Loading
- Check files exist in `content/modules/`
- Verify file names: `moduleX.md`
- Check Flask console for errors

### CSS/JS Not Loading
- Hard refresh: `Ctrl+Shift+Delete`
- Check browser console
- Verify Flask is serving static files

---

## 📦 Dependencies

All packages in `requirements.txt`:
```bash
pip install -r requirements.txt
```

---

## 🤝 Contributing

Contributions welcome! Areas for help:
- Additional exercises
- Bug fixes
- Documentation
- Feature suggestions

1. Fork the repo
2. Create a feature branch
3. Make improvements
4. Submit a pull request

---

## 📄 License

MIT License - Free to use for learning and personal projects.

See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Developer

**Ishtiak Mahmood**
- Full Stack Developer & Python Educator
- GitHub: [@IshtiAK47](https://github.com/IshtiAK47/)
- Email: m64445.0@gmail.com

Created: January 2026  
Status: Production Ready  
Quality: Professional Grade

---

## 🎓 Learning Tips

1. **Be Consistent** - 30-60 minutes daily
2. **Code Along** - Type examples, don't just read
3. **Do Exercises** - Practice is essential
4. **Take Quizzes** - Test understanding
5. **Experiment** - Modify code and explore
6. **Review** - Revisit difficult concepts

---

## 📞 Support

- **Found a Bug?** [Open an issue](https://github.com/IshtiAK47/PyPy/issues)
- **Have Questions?** Check the Resources page
- **Want to Help?** See Contributing section
- **Feedback?** Email: m64445.0@gmail.com

---

## 🎉 Get Started Now!

```bash
git clone https://github.com/IshtiAK47/PyPy.git
cd PyPy
pip install -r requirements.txt
python backend/app.py
```

Then open `http://localhost:5000` in your browser!

Happy Learning! 🐍✨
