# Module 1: Introduction to Python and Programming

## What You'll Learn

In this module, you'll learn:
- What Python is and why it's great for beginners
- How to set up Python on your computer
- How to write and run your first Python program
- Basic programming concepts
- How Python code works

**Duration:** 1 week  
**Topics:** 8  
**Difficulty:** Beginner

---

## Why Learn Python?

Python is one of the most popular programming languages in the world. Here's why:

### Easy to Learn
Python's syntax is clean and intuitive. It reads almost like English, making it perfect for beginners. Compare these two languages doing the same thing:

**Python:**
```python
print("Hello, World!")
```

**Java:**
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Python is much simpler!

### Powerful
Despite being easy, Python is incredibly powerful. Professional developers use it for:
- **Data Science** - Analyze millions of data points
- **Web Development** - Build websites and APIs
- **Artificial Intelligence** - Create machine learning models
- **Automation** - Automate repetitive tasks
- **Scientific Computing** - Run complex calculations

### In High Demand
Python developers are among the highest-paid programmers. Learning Python opens doors to many career opportunities.

### Great Community
Python has millions of users worldwide. If you get stuck, you can find help online quickly.

---

## What is Programming?

**Programming** is giving instructions to a computer to solve a problem.

Think of it like cooking:
- **Recipe** = Program
- **Ingredients** = Data
- **Chef** = Computer
- **Instructions** = Code

Just like a recipe tells a chef exactly what to do, a program tells a computer exactly what to do.

### Simple Example

```python
# Make a sandwich
get_bread()
add_peanut_butter()
add_jelly()
close_sandwich()
eat_sandwich()
```

The computer follows each instruction in order, just like a chef would.

---

## Installing Python

### Windows

1. Go to [python.org](https://www.python.org/downloads/)
2. Click "Download Python 3.x.x"
3. Run the installer
4. **IMPORTANT:** Check "Add Python to PATH"
5. Click "Install Now"

**Verify installation:**
```bash
python --version
```

### macOS

1. Go to [python.org](https://www.python.org/downloads/)
2. Click "Download Python 3.x.x"
3. Run the installer
4. Follow the prompts

**Verify installation:**
```bash
python3 --version
```

### Linux

```bash
sudo apt-get update
sudo apt-get install python3
python3 --version
```

---

## Your First Program

### Step 1: Open a Text Editor

You need a text editor to write Python code. Good options:
- **VS Code** (Recommended)
- PyCharm
- Sublime Text
- IDLE (comes with Python)
- Even Notepad!

### Step 2: Write Code

Create a new file called `hello.py` and type:

```python
print("Hello, World!")
```

### Step 3: Run Your Program

Open a terminal/command prompt and go to the folder with your file. Then run:

```bash
python hello.py
```

**Output:**
```
Hello, World!
```

Congratulations! You just wrote and ran your first Python program! 🎉

---

## Basic Concepts

### Variables

A variable is a container for storing information. Think of it as a labeled box.

```python
# Create variables
name = "Alice"
age = 25
height = 5.6

# Use variables
print(name)      # Output: Alice
print(age)       # Output: 25
print(height)    # Output: 5.6
```

### Data Types

Different types of information require different data types:

```python
# String (text)
city = "New York"

# Integer (whole number)
students = 30

# Float (decimal number)
price = 19.99

# Boolean (True or False)
is_student = True
```

### Comments

Comments explain your code. The computer ignores them.

```python
# This is a comment
name = "Bob"  # Store a name

# Comments help other programmers
# understand your code
```

---

## Common Mistakes (and How to Avoid Them)

### Mistake 1: Wrong File Extension

❌ Don't save as `hello.txt`  
✅ Do save as `hello.py`

The `.py` extension tells the computer it's a Python file.

### Mistake 2: Case Sensitivity

```python
# Wrong:
Print("Hello")    # Error! 'Print' doesn't exist

# Correct:
print("Hello")    # Works!
```

Python is case-sensitive. Use lowercase `print`, not `Print`.

### Mistake 3: Forgetting Quotes

```python
# Wrong:
print(Hello)      # Error! Python looks for a variable called Hello

# Correct:
print("Hello")    # Works! The quotes tell Python this is text
```

### Mistake 4: Using Wrong Path

When running Python, make sure you're in the correct folder:

```bash
# Check what folder you're in
pwd              # macOS/Linux
cd               # Windows

# Change folder
cd path/to/folder
```

---

## Practice Problems

### Problem 1: Your First Output
Write a program that prints your name.

```python
# Your code here
```

**Solution:**
```python
print("Your Name Here")
```

### Problem 2: Multiple Lines
Write a program that prints three lines:
1. Your name
2. Your age
3. Your favorite food

```python
# Your code here
```

**Solution:**
```python
print("Alice")
print(25)
print("Pizza")
```

### Problem 3: Using Variables
Store your name in a variable and print it.

```python
# Your code here
```

**Solution:**
```python
name = "Alice"
print(name)
```

---

## Key Takeaways

✓ Python is beginner-friendly yet powerful  
✓ You can write your first program in 5 minutes  
✓ Variables store information  
✓ `print()` displays output  
✓ Comments start with `#`  
✓ Quotes are required for text  

---

## Next Steps

In **Module 2**, you'll learn:
- How to get input from users
- Doing math with Python
- Understanding data types better

Ready? Let's continue! 🚀

---

**Module Status:** ✅ Complete  
**Next Module:** Module 2 - Python Fundamentals  
**Time to Complete:** ~1 week (30-60 min/day)
