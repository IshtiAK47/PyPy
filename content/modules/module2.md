# Module 2: Python Fundamentals - Variables, Data Types & Operators

## What You'll Learn
- How to create and use variables effectively
- All Python data types (int, float, str, bool, list, dict, set, tuple)
- Arithmetic, comparison, and logical operators
- Type conversion and the type() function
- Input validation and user input handling
- Working with strings and string methods
- How to debug type errors

## Why This Topic Matters
Variables are the foundation of programming. They store data you want to use later. Without understanding data types, you can't manipulate numbers, text, or make decisions in your programs. This module is critical because every single program uses variables and data types.

---

## Part 1: Variables - Your Program's Memory

### What is a Variable?
A variable is a named container that holds a value. Think of it like a labeled box where you store information.

```python
# Creating variables
name = "Alice"
age = 25
height = 5.7
is_student = True

print(name)      # Output: Alice
print(age)       # Output: 25
print(height)    # Output: 5.7
print(is_student) # Output: True
```

**Key points:**
- Variable names should be descriptive
- Python uses `=` to assign values (not comparison!)
- Variables can change their value

### Naming Rules
```python
# Valid variable names
my_name = "Bob"
_private = 100
age2024 = 30
MyClass = "Python"

# Invalid - these will cause errors
2name = "Error"      # Can't start with number
my-name = "Error"    # Can't use hyphens
class = "Error"      # Can't use Python keywords
```

---

## Part 2: Python Data Types - The Building Blocks

### Integers (int) - Whole Numbers
```python
# Integers are whole numbers with no decimals
count = 10
temperature = -5
big_number = 1000000

# Mathematical operations
result = 10 + 5     # 15
product = 10 * 5    # 50
division = 10 // 3  # 3 (floor division)
remainder = 10 % 3  # 1 (modulo)
power = 2 ** 8      # 256 (exponentiation)

print(f"10 divided by 3: {10 // 3} remainder {10 % 3}")
# Output: 10 divided by 3: 3 remainder 1
```

### Floats (float) - Decimal Numbers
```python
# Floats have decimal points
price = 19.99
pi = 3.14159
temperature = -10.5

# Arithmetic with floats
cost = 10.5 + 2.3     # 12.8
total = 100.0 / 3     # 33.333... (true division)

print(f"Total: ${total:.2f}")
# Output: Total: $33.33
```

### Strings (str) - Text
```python
# Strings are sequences of characters
greeting = "Hello, World!"
name = 'Alice'
multiline = """This is a
multi-line
string"""

# String operations
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # Concatenation
print(full_name)
# Output: John Doe

# Repetition
dashes = "-" * 10
print(dashes)
# Output: ----------
```

### Booleans (bool) - True or False
```python
# Booleans are either True or False
is_raining = True
is_sunny = False
is_weekend = True

# Booleans from comparisons
age = 25
can_vote = age >= 18  # True
is_negative = 5 < 0   # False

print(f"Can vote: {can_vote}")
# Output: Can vote: True
```

### Lists - Ordered Collections
```python
# Lists store multiple items in order
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing elements (0-based indexing)
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "cherry" (negative indexing)

# Modifying lists
fruits[1] = "blueberry"
fruits.append("date")
print(fruits)
# Output: ['apple', 'blueberry', 'cherry', 'date']

# List length
length = len(fruits)  # 4
```

### Dictionaries - Key-Value Pairs
```python
# Dictionaries store key-value pairs
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Math", "Python"]
}

# Accessing values
name = student["name"]        # "Alice"
age = student.get("age", 0)  # 20 (safe access)

# Modifying dictionaries
student["grade"] = "A+"
student["email"] = "alice@example.com"

print(student)
# Output: {'name': 'Alice', 'age': 20, 'grade': 'A+', 'courses': ['Math', 'Python'], 'email': 'alice@example.com'}
```

### Sets - Unique Values
```python
# Sets store unique items (no duplicates)
colors = {"red", "blue", "green"}
numbers = {1, 2, 3, 4, 5}

# Adding items
colors.add("yellow")
print(colors)
# Output: {'blue', 'red', 'green', 'yellow'} (order may vary)

# Removing duplicates
duplicate_list = [1, 2, 2, 3, 3, 3]
unique = set(duplicate_list)
print(unique)
# Output: {1, 2, 3}
```

### Tuples - Immutable Sequences
```python
# Tuples are like lists but cannot be changed
coordinates = (10, 20)
rgb_color = (255, 128, 0)
person = ("Alice", 25, "Engineer")

# Accessing elements
x = coordinates[0]  # 10
name = person[0]    # "Alice"

# Unpacking
x, y = coordinates
print(f"X: {x}, Y: {y}")
# Output: X: 10, Y: 20

# Tuples are great for returning multiple values from functions
# (We'll learn functions in Module 5)
```

---

## Part 3: Operators - Performing Operations

### Arithmetic Operators
```python
# Basic math operations
a = 10
b = 3

add = a + b        # 13
subtract = a - b   # 7
multiply = a * b   # 30
divide = a / b     # 3.333...
floor_divide = a // b  # 3
modulo = a % b     # 1
power = a ** b     # 1000

print(f"{a} + {b} = {add}")
print(f"{a} - {b} = {subtract}")
print(f"{a} * {b} = {multiply}")
print(f"{a} / {b} = {divide:.2f}")
print(f"{a} // {b} = {floor_divide}")
print(f"{a} % {b} = {modulo}")
print(f"{a} ** {b} = {power}")

# Output:
# 10 + 3 = 13
# 10 - 3 = 7
# 10 * 3 = 30
# 10 / 3 = 3.33
# 10 // 3 = 3
# 10 % 3 = 1
# 10 ** 3 = 1000
```

### Comparison Operators
```python
# Comparisons always return True or False
a = 10
b = 5

print(a > b)   # True (greater than)
print(a < b)   # False (less than)
print(a >= 10) # True (greater or equal)
print(a <= b)  # False (less or equal)
print(a == b)  # False (equal)
print(a != b)  # True (not equal)

# With strings
name1 = "Alice"
name2 = "Bob"
print(name1 == name2)  # False
print(name1 != name2)  # True
```

### Logical Operators
```python
# Logical operators: and, or, not
age = 25
has_license = True
car_available = False

# AND operator - both must be True
can_drive = age >= 18 and has_license
print(f"Can drive: {can_drive}")
# Output: Can drive: True

# OR operator - at least one must be True
can_go = has_license or car_available
print(f"Can go somewhere: {can_go}")
# Output: Can go somewhere: True

# NOT operator - reverses the boolean
is_not_available = not car_available
print(f"Car not available: {is_not_available}")
# Output: Car not available: True
```

### Assignment Operators
```python
# Shorthand operators
x = 10
x += 5   # Same as x = x + 5 → x is now 15
x -= 3   # Same as x = x - 3 → x is now 12
x *= 2   # Same as x = x * 2 → x is now 24
x //= 4  # Same as x = x // 4 → x is now 6

print(f"Final x value: {x}")
# Output: Final x value: 6
```

---

## Part 4: Type Conversion - Converting Between Types

### Converting to Integer
```python
# Convert string to int
num_string = "42"
number = int(num_string)  # 42
print(f"Type: {type(number)}")  # <class 'int'>

# Convert float to int (truncates decimal)
price = 19.99
quantity = int(price)  # 19
print(quantity)

# Convert boolean to int
true_as_int = int(True)   # 1
false_as_int = int(False) # 0
print(f"True as int: {true_as_int}, False as int: {false_as_int}")
```

### Converting to Float
```python
# Convert string to float
amount = float("3.14")      # 3.14
print(type(amount))         # <class 'float'>

# Convert int to float
count = 10
decimal_count = float(count)  # 10.0
print(decimal_count)
```

### Converting to String
```python
# Convert anything to string
age = 25
age_text = str(age)  # "25"
print(f"Age: {age_text}, Type: {type(age_text)}")
# Output: Age: 25, Type: <class 'str'>

# Convert list to string
items = [1, 2, 3]
items_text = str(items)  # "[1, 2, 3]"
print(items_text)
```

### The type() Function
```python
# Check the type of any value
print(type(10))           # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("hello"))     # <class 'str'>
print(type(True))        # <class 'bool'>
print(type([1, 2, 3]))   # <class 'list'>
print(type({"a": 1}))    # <class 'dict'>

# Using type() in decisions
value = "42"
if type(value) == str:
    number = int(value)
    print(f"Converted to: {number}")
    # Output: Converted to: 42
```

---

## Part 5: Getting User Input

### The input() Function
```python
# Get text from user
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Input always returns a string
age_text = input("Enter your age: ")
age = int(age_text)  # Convert to int
print(f"You are {age} years old")

# Better way - convert on one line
age = int(input("Enter your age: "))
```

### Input Validation Example
```python
# Get and validate user input
while True:
    try:
        age = int(input("Enter your age (must be a number): "))
        if 0 <= age <= 150:
            print(f"Valid age: {age}")
            break
        else:
            print("Age must be between 0 and 150")
    except ValueError:
        print("Please enter a valid number")

# Output (if user enters 25):
# Enter your age (must be a number): 25
# Valid age: 25
```

---

## Common Mistakes & Debugging

### Mistake 1: Forgetting to Convert Input
```python
# WRONG
age = input("Your age: ")
next_year_age = age + 1  # Error! Can't add string + int

# CORRECT
age = int(input("Your age: "))
next_year_age = age + 1  # Works! (e.g., 25 + 1 = 26)
print(f"Next year you'll be {next_year_age}")
```

### Mistake 2: Using = Instead of ==
```python
# WRONG - This sets x to 5 instead of comparing!
x = 5
if x = 5:  # SyntaxError
    print("x is 5")

# CORRECT - Use == for comparison
if x == 5:
    print("x is 5")
    # Output: x is 5
```

### Mistake 3: Indexing Errors
```python
# WRONG - Lists are 0-indexed!
fruits = ["apple", "banana", "cherry"]
print(fruits[3])  # IndexError: list index out of range (only 0, 1, 2)

# CORRECT
print(fruits[0])  # apple
print(fruits[1])  # banana
print(fruits[2])  # cherry
print(fruits[-1]) # cherry (last item)
```

### Mistake 4: Mutable vs Immutable
```python
# Lists are mutable (changeable)
list1 = [1, 2, 3]
list2 = list1
list2[0] = 999
print(list1)  # [999, 2, 3] - Both changed!

# Strings are immutable (unchangeable)
str1 = "hello"
str2 = str1
str2 = str2.replace("h", "H")
print(str1)  # hello (unchanged)
print(str2)  # Hello (new string created)
```

---

## Practice Problems

### Problem 1: Calculate BMI
Write a program that:
1. Gets user's weight (in kg) and height (in m)
2. Calculates BMI = weight / (height²)
3. Prints the result formatted to 1 decimal place

**Solution:**
```python
weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in m: "))
bmi = weight / (height ** 2)
print(f"Your BMI: {bmi:.1f}")

# Example run:
# Enter weight in kg: 70
# Enter height in m: 1.75
# Your BMI: 22.9
```

### Problem 2: Temperature Converter
Write a program that:
1. Gets temperature in Celsius
2. Converts to Fahrenheit (F = C × 9/5 + 32)
3. Tells if it's hot, warm, or cold

**Solution:**
```python
celsius = float(input("Enter temperature in °C: "))
fahrenheit = celsius * 9/5 + 32

print(f"{celsius}°C = {fahrenheit:.1f}°F")

if fahrenheit > 85:
    status = "Hot"
elif fahrenheit > 60:
    status = "Warm"
else:
    status = "Cold"

print(f"It's {status}")

# Example run:
# Enter temperature in °C: 25
# 25.0°C = 77.0°F
# It's Warm
```

### Problem 3: String Manipulation
Write a program that:
1. Gets user's name
2. Prints it in different formats
3. Shows length and reversed version

**Solution:**
```python
name = input("Enter your name: ")

print(f"Original: {name}")
print(f"Uppercase: {name.upper()}")
print(f"Lowercase: {name.lower()}")
print(f"Length: {len(name)}")
print(f"Reversed: {name[::-1]}")
print(f"First letter: {name[0]}")
print(f"Last letter: {name[-1]}")

# Example run:
# Enter your name: Alice
# Original: Alice
# Uppercase: ALICE
# Lowercase: alice
# Length: 5
# Reversed: ecilA
# First letter: A
# Last letter: e
```

---

## Key Takeaways

1. **Variables** store data with descriptive names
2. **Data types** determine what operations you can do (int, float, str, bool, list, dict, set, tuple)
3. **Operators** perform calculations and comparisons (arithmetic, comparison, logical)
4. **Type conversion** lets you change between types (int(), float(), str())
5. **input()** gets text from users (always returns strings!)
6. **Debugging** type errors by checking types with type()

---

## Next Steps

Now that you understand variables and data types, you're ready for **Module 3: Control Flow** where you'll learn:
- if/elif/else statements for making decisions
- for and while loops for repeating code
- break and continue statements
- How to write more complex programs

**Practice tip:** Spend 10 minutes experimenting with each data type. Try combining them in different ways!
