# Module 8: Advanced Topics - Professional Python Techniques

## What You'll Learn
- Exception handling with try/except/finally
- Creating custom exceptions
- Decorators and function enhancement
- Generators and yield
- Context managers (with statement)
- Type hints and annotations
- Debugging techniques

## Why This Topic Matters
Professional Python code handles errors gracefully, uses decorators to keep code DRY, and implements generators for memory efficiency. These techniques separate amateur code from production-quality software. Understanding them makes you a professional Python developer.

---

## Part 1: Exception Handling

### Try, Except, Finally
```python
# Basic exception handling
try:
    number = int("not a number")
except ValueError:
    print("Invalid input - couldn't convert to integer")

# Output: Invalid input - couldn't convert to integer

# Catching the exception object
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")

# Output: Error: division by zero

# Multiple exceptions
try:
    data = {"name": "Alice"}
    age = data["age"]  # KeyError
except (KeyError, ValueError) as e:
    print(f"Data error: {e}")

# Output: Data error: 'age'
```

### Finally Block
```python
# Finally runs whether exception occurs or not
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found")
finally:
    if 'file' in locals():
        file.close()  # Always close the file

# Using context managers (better approach)
try:
    with open("data.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found")
# File automatically closed
```

### Raising Exceptions
```python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return age

try:
    validate_age(-5)
except ValueError as e:
    print(f"Invalid age: {e}")

# Output: Invalid age: Age cannot be negative
```

---

## Part 2: Custom Exceptions

### Creating Custom Exceptions
```python
class InvalidUsernameError(Exception):
    """Raised when username is invalid"""
    pass

class UserAlreadyExistsError(Exception):
    """Raised when trying to create duplicate user"""
    pass

class UserManager:
    def __init__(self):
        self.users = []
    
    def create_user(self, username):
        if len(username) < 3:
            raise InvalidUsernameError("Username must be 3+ characters")
        
        if username in self.users:
            raise UserAlreadyExistsError(f"User {username} already exists")
        
        self.users.append(username)
        return f"User {username} created"

# Using custom exceptions
manager = UserManager()

try:
    print(manager.create_user("ab"))
except InvalidUsernameError as e:
    print(f"Error: {e}")
# Error: Username must be 3+ characters

try:
    manager.create_user("alice")
    manager.create_user("alice")
except UserAlreadyExistsError as e:
    print(f"Error: {e}")
# Error: User alice already exists
```

---

## Part 3: Decorators

### Understanding Decorators
```python
# Decorators are functions that modify other functions

def my_decorator(func):
    """Simple decorator"""
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Equivalent to: say_hello = my_decorator(say_hello)

say_hello()
# Output:
# Before function
# Hello!
# After function
```

### Decorators with Arguments
```python
def repeat(times):
    """Decorator that repeats function execution"""
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                result = func(*args, **kwargs)
                results.append(result)
            return results
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
# Output: ['Hello, Alice!', 'Hello, Alice!', 'Hello, Alice!']
```

### Practical Decorators
```python
import time

def timer(func):
    """Measure function execution time"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(0.5)
    return "Done"

slow_function()
# Output: slow_function took 0.5001 seconds Done

# Debugging decorator
def debug(func):
    """Print function calls"""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper

@debug
def add(a, b):
    return a + b

add(3, 4)
# Output:
# Calling add with args=(3, 4), kwargs={}
# Result: 7
```

---

## Part 4: Generators

### Understanding Generators
```python
# Regular function with return
def get_numbers():
    numbers = []
    for i in range(3):
        numbers.append(i)
    return numbers

result = get_numbers()
print(result)  # [0, 1, 2]

# Generator with yield (lazy evaluation)
def generate_numbers():
    for i in range(3):
        yield i

gen = generate_numbers()
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2
# print(next(gen))  # StopIteration error

# Iterate through generator
for num in generate_numbers():
    print(num)
# 0
# 1
# 2
```

### Generator Examples
```python
# Fibonacci sequence
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

print(list(fibonacci(10)))  # [0, 1, 1, 2, 3, 5, 8]

# Reading large files efficiently
def read_large_file(file_path, chunk_size=1024):
    with open(file_path, 'r') as file:
        while True:
            chunk = file.read(chunk_size)
            if not chunk:
                break
            yield chunk

# Process line by line without loading entire file
def read_lines(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()

# Range as generator
def my_range(start, end):
    while start < end:
        yield start
        start += 1

for num in my_range(0, 5):
    print(num)  # 0 1 2 3 4
```

---

## Part 5: Context Managers

### Using Context Managers
```python
# File handling with context manager
with open("data.txt", "w") as file:
    file.write("Hello")
# File automatically closed

# Multiple context managers
with open("input.txt", "r") as infile, open("output.txt", "w") as outfile:
    outfile.write(infile.read().upper())

# Custom context manager
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Entering")
    try:
        yield "resource"
    finally:
        print("Exiting")

with my_context() as resource:
    print(f"Using {resource}")

# Output:
# Entering
# Using resource
# Exiting
```

### Creating Context Managers
```python
class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None
    
    def __enter__(self):
        print(f"Connecting to {self.db_name}...")
        self.connection = f"DB:{self.db_name}"
        return self.connection
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Disconnecting...")
        self.connection = None
        return False

# Using the context manager
with DatabaseConnection("mydb") as conn:
    print(f"Using {conn}")

# Output:
# Connecting to mydb...
# Using DB:mydb
# Disconnecting...
```

---

## Part 6: Type Hints

### Adding Type Annotations
```python
# Basic type hints
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("Alice"))  # Hello, Alice!

# Function with multiple parameters
def add(a: int, b: int) -> int:
    return a + b

result = add(5, 3)  # result is int

# Optional parameters
from typing import Optional

def get_user(user_id: int) -> Optional[str]:
    users = {1: "Alice", 2: "Bob"}
    return users.get(user_id)

print(get_user(1))  # Alice
print(get_user(99))  # None

# List and Dict type hints
from typing import List, Dict

def process_names(names: List[str]) -> Dict[str, int]:
    return {name: len(name) for name in names}

result = process_names(["Alice", "Bob"])
print(result)  # {'Alice': 5, 'Bob': 3}
```

---

## Part 7: Debugging Techniques

### Print Debugging
```python
def calculate(x, y):
    print(f"Input: x={x}, y={y}")
    result = x + y
    print(f"After addition: result={result}")
    result = result * 2
    print(f"After multiplication: result={result}")
    return result

calculate(3, 4)
# Output shows execution flow
```

### Using pdb (Python Debugger)
```python
import pdb

def problematic_function():
    x = 5
    y = 10
    pdb.set_trace()  # Execution pauses here
    z = x + y
    return z

# When execution hits set_trace(), you can:
# n - next line
# c - continue
# p variable_name - print variable
# l - list current code
```

### Assertions
```python
def divide(a, b):
    assert b != 0, "Cannot divide by zero"
    return a / b

try:
    result = divide(10, 0)
except AssertionError as e:
    print(f"Error: {e}")

# Output: Error: Cannot divide by zero

# Assertions for testing
def calculate_discount(price, discount):
    assert price > 0, "Price must be positive"
    assert 0 <= discount <= 100, "Discount must be 0-100"
    return price * (1 - discount/100)

print(calculate_discount(100, 10))  # 90.0
```

---

## Real-World Example: Web Scraper

```python
import requests
from typing import List

class WebScraper:
    def __init__(self, url: str) -> None:
        self.url = url
        self.data = None
    
    def __enter__(self):
        self.fetch()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Scraper closed")
    
    def fetch(self) -> None:
        try:
            response = requests.get(self.url)
            response.raise_for_status()
            self.data = response.text
        except requests.RequestException as e:
            print(f"Error fetching {self.url}: {e}")
            raise

# Usage with context manager
with WebScraper("https://example.com") as scraper:
    if scraper.data:
        print(f"Fetched {len(scraper.data)} characters")
```

---

## Practice Problems

### Problem 1: Custom Exception for Validation
```python
class PasswordTooShortError(Exception):
    pass

def validate_password(password: str) -> bool:
    if len(password) < 8:
        raise PasswordTooShortError("Password must be 8+ characters")
    if not any(c.isupper() for c in password):
        raise PasswordTooShortError("Password must contain uppercase")
    return True

try:
    validate_password("short")
except PasswordTooShortError as e:
    print(f"Invalid: {e}")
# Output: Invalid: Password must be 8+ characters
```

---

## Key Takeaways

1. **Exceptions** handle errors gracefully
2. **Custom exceptions** make error handling clearer
3. **Decorators** enhance functions without modifying them
4. **Generators** handle large data efficiently
5. **Context managers** manage resources properly
6. **Type hints** improve code clarity and IDE support
7. **Debugging** finds and fixes issues quickly

---

## Next Steps

You're mastering professional Python! In **Module 9: File Handling & OS** you'll learn:
- Reading and writing files
- Working with different file formats
- OS operations and file paths
- Error handling for file operations
