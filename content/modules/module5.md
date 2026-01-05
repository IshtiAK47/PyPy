# Module 5: Functions - Reusable Code Blocks

## What You'll Learn
- Creating functions with def keyword
- Parameters and arguments
- Return values and multiple returns
- Scope: local vs global variables
- Default parameters and keyword arguments
- *args and **kwargs for flexible arguments
- Lambda functions for simple operations
- Built-in functions and when to use them

## Why This Topic Matters
Functions let you write code once and use it many times. They make programs organized, readable, and maintainable. Professional programmers spend most of their time writing and calling functions. This is one of the most important concepts in programming.

---

## Part 1: Creating Functions

### Basic Function
```python
# Define function with def keyword
def greet():
    """This function says hello"""
    print("Hello!")

# Call the function
greet()
# Output: Hello!

# Function without return still returns None
result = greet()
print(result)  # None
```

### Function with Parameters
```python
# Parameters are variables passed to function
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")   # Output: Hello, Alice!
greet("Bob")     # Output: Hello, Bob!

# Multiple parameters
def add(a, b):
    print(f"{a} + {b} = {a + b}")

add(5, 3)        # Output: 5 + 3 = 8
add(10, 20)      # Output: 10 + 20 = 30
```

### Function with Return Value
```python
# Return sends value back to caller
def add(a, b):
    return a + b

result = add(5, 3)
print(result)    # 8

# Return stops function execution
def check_age(age):
    if age < 18:
        return "Too young"
    return "Old enough"

print(check_age(15))  # Too young
print(check_age(25))  # Old enough

# Multiple return values (returns tuple)
def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {min_val}, Max: {max_val}")
# Output: Min: 1, Max: 9
```

### Docstrings
```python
# Docstrings document what function does
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        The area as a float
    """
    import math
    return math.pi * radius ** 2

# Access docstring
print(calculate_area.__doc__)
# Output: Calculate the area of a circle...

# Help function shows docstring
help(calculate_area)
```

---

## Part 2: Parameters and Arguments

### Positional Arguments
```python
# Order matters with positional arguments
def describe_person(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

describe_person("Alice", 25, "NYC")
# Output: Alice is 25 years old and lives in NYC

# Wrong order gives wrong output
describe_person("NYC", 25, "Alice")
# Output: NYC is 25 years old and lives in Alice
```

### Keyword Arguments
```python
# Can use keyword arguments (order doesn't matter)
def describe_person(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

# These all produce the same output
describe_person("Alice", 25, "NYC")
describe_person(name="Alice", age=25, city="NYC")
describe_person(city="NYC", age=25, name="Alice")
describe_person("Alice", city="NYC", age=25)

# All output: Alice is 25 years old and lives in NYC
```

### Default Parameters
```python
# Parameters can have default values
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Uses default greeting
# Output: Hello, Alice!

greet("Bob", "Hi")          # Uses provided greeting
# Output: Hi, Bob!

greet(name="Charlie", greeting="Hey")
# Output: Hey, Charlie!

# Practical example
def power(base, exponent=2):
    """Calculate base raised to exponent"""
    return base ** exponent

print(power(2))       # 4 (2^2)
print(power(2, 3))    # 8 (2^3)
print(power(base=5, exponent=2))  # 25
```

---

## Part 3: Variable Scope

### Local vs Global
```python
# Global variable - accessible everywhere
count = 0

def increment():
    global count  # Must declare to modify global
    count += 1
    print(f"Count: {count}")

increment()  # Count: 1
increment()  # Count: 2
print(count)  # 2

# Local variable - only in function
def test():
    x = 10  # Local variable
    print(x)

test()       # 10
print(x)     # NameError: x not defined
```

### Local Scope Example
```python
def outer_func():
    x = "outer"
    
    def inner_func():
        x = "inner"  # Local to inner_func
        print(x)
    
    inner_func()
    print(x)

outer_func()
# Output:
# inner
# outer

# Each function has its own scope
```

### Best Practice: Avoid Global Variables
```python
# BAD - uses global
count = 0
def increment():
    global count
    count += 1
    return count

# GOOD - function is self-contained
def increment(value):
    return value + 1

count = 0
count = increment(count)
```

---

## Part 4: Advanced Parameters

### *args - Variable Number of Arguments
```python
# *args collects extra positional arguments as tuple
def print_items(*args):
    """Print any number of items"""
    for item in args:
        print(f"- {item}")

print_items("apple")
print_items("apple", "banana")
print_items("apple", "banana", "cherry", "date")

# Output:
# - apple
# - apple
# - banana
# - apple
# - banana
# - cherry
# - date

# Sum any number of values
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15
```

### **kwargs - Keyword Arguments Dictionary
```python
# **kwargs collects keyword arguments as dictionary
def print_attributes(**kwargs):
    """Print key-value pairs"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_attributes(name="Alice", age=25, city="NYC")

# Output:
# name: Alice
# age: 25
# city: NYC

# Practical example
def create_user(**kwargs):
    user = {}
    for key, value in kwargs.items():
        user[key] = value
    return user

user1 = create_user(name="Alice", age=25, email="alice@example.com")
user2 = create_user(name="Bob", age=30)

print(user1)  # {'name': 'Alice', 'age': 25, 'email': 'alice@example.com'}
print(user2)  # {'name': 'Bob', 'age': 30}
```

### Combining All Parameter Types
```python
# Order: positional, *args, keyword-only, **kwargs
def full_example(required, *args, keyword_only, **kwargs):
    """Full example with all parameter types"""
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Keyword-only: {keyword_only}")
    print(f"Kwargs: {kwargs}")

full_example("pos", 1, 2, 3, keyword_only="kw", extra1="value1", extra2="value2")

# Output:
# Required: pos
# Args: (1, 2, 3)
# Keyword-only: kw
# Kwargs: {'extra1': 'value1', 'extra2': 'value2'}
```

---

## Part 5: Lambda Functions

### Simple Lambda Functions
```python
# Lambda: small anonymous function with syntax: lambda args: expression
# Good for simple operations

# Regular function
def add(a, b):
    return a + b

# Lambda equivalent
add_lambda = lambda a, b: a + b

print(add(5, 3))         # 8
print(add_lambda(5, 3))  # 8

# Single-line operations
square = lambda x: x ** 2
print(square(5))  # 25

# Multiple operations (still single expression)
greet = lambda name: f"Hello, {name}!"
print(greet("Alice"))  # Hello, Alice!
```

### Lambda with map()
```python
# map() applies function to each item
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Convert to integers
strings = ["1", "2", "3", "4"]
integers = list(map(int, strings))
print(integers)  # [1, 2, 3, 4]
```

### Lambda with filter()
```python
# filter() keeps items where function returns True
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Get numbers > 5
large = list(filter(lambda x: x > 5, numbers))
print(large)  # [6, 7, 8, 9, 10]
```

### Lambda with sorted()
```python
# Sort with custom key function
people = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 20},
    {"name": "Charlie", "age": 30}
]

# Sort by age
sorted_people = sorted(people, key=lambda p: p["age"])
print(sorted_people)
# [{'name': 'Bob', 'age': 20}, {'name': 'Alice', 'age': 25}, {'name': 'Charlie', 'age': 30}]

# Sort tuples by second element
pairs = [(1, "one"), (3, "three"), (2, "two")]
sorted_pairs = sorted(pairs, key=lambda x: x[1])
print(sorted_pairs)
# [(1, 'one'), (3, 'three'), (2, 'two')]
```

---

## Part 6: Useful Built-in Functions

### String Functions
```python
# len() - length
print(len("hello"))  # 5

# str() - convert to string
print(str(42))  # "42"

# Upper/lower methods
text = "Hello"
print(text.upper())  # HELLO
print(text.lower())  # hello
```

### List Functions
```python
numbers = [3, 1, 4, 1, 5, 9]

# len() - number of items
print(len(numbers))  # 6

# min/max - smallest/largest
print(min(numbers))  # 1
print(max(numbers))  # 9

# sum() - add all
print(sum(numbers))  # 23

# sorted() - sorted copy
print(sorted(numbers))  # [1, 1, 3, 4, 5, 9]

# enumerate() - index and value
for i, num in enumerate(numbers):
    print(f"{i}: {num}")
```

### Type Checking
```python
# type() - get type
print(type(42))           # <class 'int'>
print(type("hello"))      # <class 'str'>

# isinstance() - check type
value = 42
if isinstance(value, int):
    print("It's an integer")

if isinstance(value, (int, float)):
    print("It's a number")
```

### All and Any
```python
# all() - True if all items are True
print(all([True, True, True]))      # True
print(all([True, False, True]))     # False
print(all([1, 2, 3]))              # True
print(all([1, 0, 3]))              # False (0 is False)

# any() - True if any item is True
print(any([False, False, True]))    # True
print(any([False, False, False]))   # False
print(any([0, 0, 1]))              # True

# Practical use
numbers = [2, 4, 6, 8]
has_odd = any(num % 2 != 0 for num in numbers)
print(has_odd)  # False

all_positive = all(num > 0 for num in numbers)
print(all_positive)  # True
```

---

## Practice Problems

### Problem 1: Temperature Converter
Create functions for Celsius ↔ Fahrenheit conversion.

**Solution:**
```python
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return celsius * 9/5 + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# Test
print(f"0°C = {celsius_to_fahrenheit(0):.1f}°F")    # 32.0°F
print(f"100°C = {celsius_to_fahrenheit(100):.1f}°F") # 212.0°F
print(f"32°F = {fahrenheit_to_celsius(32):.1f}°C")   # 0.0°C
print(f"212°F = {fahrenheit_to_celsius(212):.1f}°C") # 100.0°C
```

### Problem 2: List Statistics
Create a function that returns statistics about a list.

**Solution:**
```python
def list_stats(*numbers):
    """Return statistics for a list of numbers"""
    if not numbers:
        return None
    
    return {
        "count": len(numbers),
        "sum": sum(numbers),
        "average": sum(numbers) / len(numbers),
        "min": min(numbers),
        "max": max(numbers)
    }

stats = list_stats(2, 4, 6, 8, 10)
print(stats)
# {'count': 5, 'sum': 30, 'average': 6.0, 'min': 2, 'max': 10}
```

### Problem 3: List Processor
Create a function that processes lists with various operations.

**Solution:**
```python
def process_list(items, operation="count"):
    """Process list based on operation"""
    if operation == "count":
        return len(items)
    elif operation == "sum":
        return sum(items)
    elif operation == "unique":
        return list(set(items))
    elif operation == "sorted":
        return sorted(items)
    else:
        return None

numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Count: {process_list(numbers, 'count')}")        # 8
print(f"Sum: {process_list(numbers, 'sum')}")            # 31
print(f"Unique: {process_list(numbers, 'unique')}")      # [1, 2, 3, 4, 5, 6, 9]
print(f"Sorted: {process_list(numbers, 'sorted')}")      # [1, 1, 2, 3, 4, 5, 6, 9]
```

---

## Common Mistakes & Debugging

### Mistake 1: Forgetting return Statement
```python
# WRONG - function doesn't return anything
def add(a, b):
    result = a + b
    # Missing: return result

x = add(5, 3)
print(x)  # None (not 8!)

# CORRECT
def add(a, b):
    return a + b

x = add(5, 3)
print(x)  # 8
```

### Mistake 2: Mutable Default Arguments
```python
# DANGEROUS - default list is shared!
def add_to_list(item, my_list=[]):
    my_list.append(item)
    return my_list

print(add_to_list(1))       # [1]
print(add_to_list(2))       # [1, 2] - WRONG!
print(add_to_list(3))       # [1, 2, 3]

# CORRECT - use None
def add_to_list(item, my_list=None):
    if my_list is None:
        my_list = []
    my_list.append(item)
    return my_list

print(add_to_list(1))       # [1]
print(add_to_list(2))       # [2]
print(add_to_list(3))       # [3]
```

### Mistake 3: Variable Scope Confusion
```python
# WRONG - doesn't modify global
x = 10
def change_x():
    x = 20  # Creates local x, doesn't change global

change_x()
print(x)  # 10 (unchanged!)

# CORRECT
x = 10
def change_x():
    global x
    x = 20

change_x()
print(x)  # 20
```

---

## Key Takeaways

1. **Functions** let you reuse code and organize programs
2. **Parameters** pass data to functions
3. **Return values** send results back
4. **Local scope** keeps variables contained
5. ***args** accepts variable positional arguments
6. ****kwargs** accepts variable keyword arguments
7. **Lambda** functions for simple operations
8. **Built-in functions** like len(), sum(), map(), filter()

---

## Next Steps

You now understand reusable code! In **Module 6: Data Structures** you'll learn:
- Lists in depth (methods, comprehensions)
- Dictionaries and nested structures
- Sets and their operations
- Tuples and when to use them
- Comprehensions for elegant code

**Challenge:** Write 3 useful functions and use them to solve a real problem!
