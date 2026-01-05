# Module 3: Control Flow - Making Decisions and Looping

## What You'll Learn
- if/elif/else statements for making decisions
- Comparison and logical operators in conditions
- for loops for iterating through sequences
- while loops for repeating code while a condition is true
- break and continue statements for loop control
- Nested loops and conditionals
- Writing readable and efficient control flow code

## Why This Topic Matters
Without control flow, programs would execute the same way every time. Control flow lets your program make decisions and repeat actions, which is what makes programs powerful. Most real-world programs are built on making decisions and repeating tasks.

---

## Part 1: If Statements - Making Decisions

### Simple if Statement
```python
# Basic if: execute code only if condition is True
age = 18
if age >= 18:
    print("You are an adult")
    # Output: You are an adult

# Another example
temperature = 30
if temperature > 25:
    print("It's hot!")
    # Output: It's hot!

# Indentation matters!
if temperature > 25:
    print("Hot")  # This executes
print("Done")     # This always executes
```

### if/else Statement
```python
# if/else: execute one block if True, another if False
age = 15
if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
    # Output: You cannot vote yet

# Example with numbers
score = 45
if score >= 60:
    print("Passed")
else:
    print("Failed")
    # Output: Failed
```

### if/elif/else Statement
```python
# Multiple conditions with elif (else if)
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade: {grade}")
# Output: Your grade: B

# Real example: Restaurant reservation
time = 19  # 7 PM
if time < 11:
    print("Breakfast menu")
elif time < 16:
    print("Lunch menu")
else:
    print("Dinner menu")
    # Output: Dinner menu
```

### Conditions with Logical Operators
```python
# AND: both conditions must be true
age = 25
has_license = True
if age >= 18 and has_license:
    print("Can rent a car")
    # Output: Can rent a car

# OR: at least one condition must be true
is_weekend = True
has_vacation = False
if is_weekend or has_vacation:
    print("Can relax!")
    # Output: Can relax!

# NOT: reverses the condition
is_raining = False
if not is_raining:
    print("Perfect day for a picnic")
    # Output: Perfect day for a picnic

# Complex conditions
age = 35
income = 50000
credit_score = 720
if age >= 21 and income > 30000 and credit_score > 700:
    print("Approved for loan!")
    # Output: Approved for loan!
```

### Nested if Statements
```python
# if statements inside if statements
age = 25
has_money = True

if age >= 18:
    if has_money:
        print("You can buy a ticket")
    else:
        print("You're old enough but need money")
else:
    print("Too young to buy a ticket")

# Output: You can buy a ticket

# Cleaner way using AND
if age >= 18 and has_money:
    print("You can buy a ticket")
```

---

## Part 2: for Loops - Iterating Through Sequences

### Looping Through Lists
```python
# Loop through each item in a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Output:
# I like apple
# I like banana
# I like cherry

# Loop through numbers
for num in [1, 2, 3, 4, 5]:
    print(num ** 2)

# Output:
# 1
# 4
# 9
# 16
# 25
```

### The range() Function
```python
# range(stop) - counts from 0 to stop-1
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4

# range(start, stop) - counts from start to stop-1
for i in range(2, 5):
    print(i)
# Output: 2, 3, 4

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8

# Backwards
for i in range(5, 0, -1):
    print(i)
# Output: 5, 4, 3, 2, 1
```

### Looping with Index
```python
# Get both index and value using enumerate()
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Output:
# 0: apple
# 1: banana
# 2: cherry

# Or use range(len())
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
```

### Looping Through Strings
```python
# Strings are sequences too
word = "Python"
for letter in word:
    print(letter)

# Output:
# P
# y
# t
# h
# o
# n

# With index
for i, letter in enumerate("Hello"):
    print(f"{i}: {letter}")

# Output:
# 0: H
# 1: e
# 2: l
# 3: l
# 4: o
```

### Looping Through Dictionaries
```python
# Loop through keys
person = {"name": "Alice", "age": 25, "city": "NYC"}
for key in person:
    print(f"{key}: {person[key]}")

# Output:
# name: Alice
# age: 25
# city: NYC

# Better way: items()
for key, value in person.items():
    print(f"{key}: {value}")

# Only keys
for key in person.keys():
    print(key)

# Only values
for value in person.values():
    print(value)
```

---

## Part 3: while Loops - Repeating While Condition is True

### Simple while Loop
```python
# Loop continues while condition is True
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Output:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4

# User input loop
password = ""
while password != "secret":
    password = input("Enter password: ")
    if password != "secret":
        print("Wrong password, try again")
# When user enters "secret", loop exits
```

### while True with break
```python
# Loop forever until break
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input.lower() == "quit":
        break
    print(f"You said: {user_input}")

# Output (example):
# Enter 'quit' to exit: hello
# You said: hello
# Enter 'quit' to exit: world
# You said: world
# Enter 'quit' to exit: quit
# (Loop exits)
```

### Countdown Example
```python
# Countdown using while
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Blast off!")

# Output:
# 5
# 4
# 3
# 2
# 1
# Blast off!
```

---

## Part 4: break and continue Statements

### break Statement
```python
# break exits the loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4

# Real example: Finding a number
numbers = [2, 4, 6, 8, 9, 10, 12]
for num in numbers:
    if num % 2 != 0:  # if odd number found
        print(f"Found odd number: {num}")
        break
# Output: Found odd number: 9
```

### continue Statement
```python
# continue skips to the next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)

# Output:
# 0
# 1
# 3
# 4

# Real example: Skip even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
for num in numbers:
    if num % 2 == 0:
        continue
    print(num)

# Output:
# 1
# 3
# 5
# 7
```

### Combining break and continue
```python
# Remove all vowels, stop at 'd'
word = "abcdefgh"
result = ""
for letter in word:
    if letter == 'd':
        break
    if letter in "aeiou":
        continue
    result += letter

print(result)
# Output: bc
```

---

## Part 5: Nested Loops and Complex Control Flow

### Nested Loops
```python
# Loop inside a loop
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()

# Output:
# (0, 0) (0, 1) (0, 2)
# (1, 0) (1, 1) (1, 2)
# (2, 0) (2, 1) (2, 2)

# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i * j:3}", end=" ")
    print()

# Output:
# 1   2   3
# 2   4   6
# 3   6   9
```

### Nested Conditionals in Loops
```python
# Find all even numbers divisible by 3
for num in range(1, 20):
    if num % 2 == 0:       # even
        if num % 3 == 0:   # divisible by 3
            print(num)

# Output:
# 6
# 12
# 18
```

### Pattern Printing
```python
# Print a triangle
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

# Output:
# *
# **
# ***
# ****
# *****

# Diamond pattern
for i in range(5):
    print(" " * (4 - i) + "*" * (2 * i + 1))

# Output:
#     *
#    ***
#   *****
#  *******
# *********
```

---

## Part 6: else with Loops

### else with for Loop
```python
# else executes if loop completes without break
for i in range(5):
    if i == 10:
        print("Found 10!")
        break
else:
    print("10 not found")
# Output: 10 not found

# Real example: Search in list
fruits = ["apple", "banana", "cherry"]
search = "grape"
for fruit in fruits:
    if fruit == search:
        print(f"Found {search}!")
        break
else:
    print(f"{search} not in list")
# Output: grape not in list
```

### else with while Loop
```python
# Similar to for loop
count = 0
while count < 3:
    print(count)
    count += 1
else:
    print("Loop completed normally")

# Output:
# 0
# 1
# 2
# Loop completed normally
```

---

## Common Mistakes & Debugging

### Mistake 1: Infinite Loop
```python
# WRONG - condition never becomes False
count = 0
while count < 10:
    print(count)
    # Forgot: count += 1
# This runs forever!

# CORRECT
count = 0
while count < 10:
    print(count)
    count += 1
```

### Mistake 2: Indentation Errors
```python
# WRONG - indentation matters!
for i in range(3):
print(i)  # IndentationError!

# CORRECT
for i in range(3):
    print(i)
```

### Mistake 3: Off-by-One Errors
```python
# WRONG - range(5) goes 0 to 4, not 1 to 5
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4 (missing 5)

# CORRECT - for 1 to 5
for i in range(1, 6):
    print(i)
```

### Mistake 4: Modifying List During Iteration
```python
# WRONG - can cause bugs
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Dangerous!

# CORRECT - use list comprehension or create new list
numbers = [1, 2, 3, 4, 5]
numbers = [n for n in numbers if n % 2 != 0]
print(numbers)
# Output: [1, 3, 5]
```

---

## Practice Problems

### Problem 1: Fizzbuzz
Write a program that prints 1 to 100, but:
- Print "Fizz" for multiples of 3
- Print "Buzz" for multiples of 5
- Print "FizzBuzz" for multiples of both

**Solution:**
```python
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

# Output:
# 1
# 2
# Fizz
# 4
# Buzz
# Fizz
# 7
# 8
# Fizz
# Buzz
# 11
# Fizz
# 13
# 14
# FizzBuzz
# ...
```

### Problem 2: Password Validator
Write a program that:
1. Asks for password until valid
2. Valid if: 8+ characters AND has number

**Solution:**
```python
while True:
    password = input("Enter password (min 8 chars, must have number): ")
    
    has_number = False
    for char in password:
        if char.isdigit():
            has_number = True
            break
    
    if len(password) >= 8 and has_number:
        print("Password accepted!")
        break
    else:
        print("Invalid. Try again.")

# Output:
# Enter password (min 8 chars, must have number): hello
# Invalid. Try again.
# Enter password (min 8 chars, must have number): hello123
# Password accepted!
```

### Problem 3: Find Prime Numbers
Write a program that finds all prime numbers up to 20.

**Solution:**
```python
for num in range(2, 21):
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num)

# Output:
# 2
# 3
# 5
# 7
# 11
# 13
# 17
# 19
```

---

## Key Takeaways

1. **if/elif/else** make decisions based on conditions
2. **for loops** iterate through sequences with known length
3. **while loops** repeat while a condition is true
4. **break** exits a loop, **continue** skips to next iteration
5. **Nested loops** let you work with complex patterns
6. **else clause** with loops executes if no break occurs

---

## Next Steps

Now you can make decisions and repeat code! In **Module 4: String Methods & Formatting** you'll learn:
- String slicing and indexing
- String methods (upper, lower, split, join, replace, etc.)
- String formatting with f-strings
- How to manipulate text effectively

**Challenge:** Write a program that uses both loops and conditionals to solve a real problem!
