# Module 4: Strings - Methods, Slicing & Formatting

## What You'll Learn
- String indexing and slicing to extract parts of strings
- Built-in string methods (upper, lower, strip, split, join, replace, find, etc.)
- String formatting with f-strings, format(), and %
- Common string operations and patterns
- Checking string properties (isdigit, isalpha, startswith, etc.)
- Working with multi-line strings
- Escaping special characters

## Why This Topic Matters
Text is everywhere in programs - user input, file content, database records, API responses. Mastering strings means you can manipulate any text data. String methods and formatting are used in almost every Python program.

---

## Part 1: String Indexing and Slicing

### String Indexing
```python
# Strings are sequences - each character has an index
word = "Python"
# Index:  0 1 2 3 4 5
#        P y t h o n

print(word[0])   # P (first character)
print(word[3])   # h
print(word[5])   # n (last character)

# Negative indexing (count from end)
# Index: -6 -5 -4 -3 -2 -1
#        P  y  t  h  o  n

print(word[-1])  # n (last character)
print(word[-2])  # o (second from last)
print(word[-6])  # P (first character)

# Getting length
print(len(word))  # 6
```

### String Slicing
```python
# Slicing: string[start:stop:step]
text = "Hello, World!"

# [start:stop] - from start up to (but not including) stop
print(text[0:5])    # Hello
print(text[7:12])   # World

# Omit start (from beginning)
print(text[:5])     # Hello

# Omit stop (to end)
print(text[7:])     # World!

# [start:stop:step] - every nth character
print(text[::2])    # HloWrd (every 2nd char)
print(text[1::2])   # el ol (starting at index 1)

# Negative indices in slicing
text = "Python"
print(text[-3:])    # hon (last 3 characters)
print(text[:-2])    # Pyth (all but last 2)

# Reverse string
print(text[::-1])   # nohtyP
print(text[::-2])   # nhP
```

---

## Part 2: String Methods

### Case Methods
```python
text = "Hello, World!"

print(text.upper())      # HELLO, WORLD!
print(text.lower())      # hello, world!
print(text.capitalize()) # Hello, world! (first letter uppercase)
print(text.title())      # Hello, World! (each word starts uppercase)
print(text.swapcase())   # hELLO, wORLD! (swap all cases)

# Practical example
name = input("Enter name: ").lower().capitalize()
# User enters "ALICE" → converts to "Alice"
```

### String Search Methods
```python
text = "Hello, World! Hello, Python!"

# find() - returns index of first occurrence
pos = text.find("Hello")
print(pos)  # 0

pos = text.find("World")
print(pos)  # 7

pos = text.find("xyz")
print(pos)  # -1 (not found)

# count() - count occurrences
count = text.count("Hello")
print(count)  # 2

count = text.count("l")
print(count)  # 4

# startswith() and endswith() - boolean checks
email = "user@example.com"
print(email.startswith("user"))      # True
print(email.endswith(".com"))        # True
print(email.endswith(".org"))        # False
```

### String Replacement
```python
text = "I love Python"

# replace(old, new)
new_text = text.replace("Python", "Java")
print(new_text)  # I love Java

# Replace limited occurrences
text = "apple apple apple"
result = text.replace("apple", "orange", 2)  # Replace first 2
print(result)  # orange orange apple

# Original unchanged (strings immutable)
print(text)  # apple apple apple

# Remove spaces
padded = "  Hello  World  "
cleaned = padded.replace(" ", "")
print(cleaned)  # HelloWorld
```

### String Splitting and Joining
```python
# split() - break string into list
sentence = "Hello, World! How are you?"
words = sentence.split()  # Split by whitespace
print(words)  # ['Hello,', 'World!', 'How', 'are', 'you?']

# Split by specific delimiter
csv = "apple,banana,cherry"
fruits = csv.split(",")
print(fruits)  # ['apple', 'banana', 'cherry']

# split with limit
text = "a,b,c,d"
result = text.split(",", 2)  # Split max 2 times
print(result)  # ['a', 'b', 'c,d']

# join() - combine list into string
words = ["Hello", "World", "from", "Python"]
sentence = " ".join(words)
print(sentence)  # Hello World from Python

# Different separators
items = ["apple", "banana", "cherry"]
print(", ".join(items))    # apple, banana, cherry
print("-".join(items))     # apple-banana-cherry
print("".join(items))      # applebananaberry
```

### Whitespace Methods
```python
text = "  Hello, World!  \n"

# strip() - remove whitespace from both ends
print(f"'{text.strip()}'")     # 'Hello, World!'
print(f"'{text.lstrip()}'")    # 'Hello, World!  \n' (left only)
print(f"'{text.rstrip()}'")    # '  Hello, World!' (right only)

# Remove specific characters
text = "xxxHello Worldxxx"
print(text.strip("x"))  # Hello World

# Practical: clean user input
user_input = input("Enter name: ").strip().capitalize()
```

### String Checking Methods
```python
# isalpha() - only letters
print("hello".isalpha())       # True
print("hello123".isalpha())    # False
print("hello world".isalpha()) # False (space)

# isdigit() - only digits
print("12345".isdigit())       # True
print("123abc".isdigit())      # False

# isalnum() - letters and/or digits
print("hello123".isalnum())    # True
print("hello 123".isalnum())   # False (space)

# isspace() - only whitespace
print("   ".isspace())         # True
print(" \n\t".isspace())       # True
print("hi ".isspace())         # False

# Practical validation
while True:
    age = input("Enter age: ")
    if age.isdigit():
        age = int(age)
        if 0 <= age <= 150:
            print(f"Valid age: {age}")
            break
    print("Please enter a valid number between 0 and 150")
```

---

## Part 3: String Formatting

### f-Strings (Best Modern Method)
```python
# f-strings use f"..." prefix
name = "Alice"
age = 25
height = 5.7

# Basic substitution
print(f"Name: {name}")  # Name: Alice

# Multiple variables
print(f"{name} is {age} years old")
# Alice is 25 years old

# Expressions inside {}
print(f"Next year I'll be {age + 1}")  # Next year I'll be 26

# Number formatting
price = 19.999
print(f"Price: ${price:.2f}")  # Price: $20.00

# Padding and alignment
print(f"{name:10}")          # "Alice     " (left-aligned in 10 chars)
print(f"{name:>10}")         # "     Alice" (right-aligned)
print(f"{name:^10}")         # "  Alice   " (centered)

# With numbers
print(f"{42:05d}")           # 00042 (zero-padded)
print(f"{100:,}")            # 100 (comma separator)
print(f"{0.5:.1%}")          # 50.0% (percentage)

# Complex example
items = [
    ("Apple", 1.20, 3),
    ("Banana", 0.50, 5),
    ("Orange", 0.75, 2)
]
for name, price, qty in items:
    total = price * qty
    print(f"{name:10} ${price:6.2f} x {qty:2} = ${total:7.2f}")

# Output:
# Apple       $1.20 x  3 =   $ 3.60
# Banana      $0.50 x  5 =   $ 2.50
# Orange      $0.75 x  2 =   $ 1.50
```

### format() Method
```python
# Older but still useful
name = "Bob"
age = 30

# Positional arguments
print("{} is {} years old".format(name, age))
# Bob is 30 years old

# Named arguments
print("{name} is {age} years old".format(name="Bob", age=30))
# Bob is 30 years old

# Numbering
print("{1} is {0} years old".format(age, name))
# Bob is 30 years old

# With formatting
price = 19.99
print("Price: ${:,.2f}".format(price))
# Price: $19.99
```

### % Operator (Legacy)
```python
# Older Python style - still seen in code
name = "Charlie"
age = 35

print("%s is %d years old" % (name, age))
# Charlie is 35 years old

# Not recommended for new code, but good to recognize
price = 19.99
print("Price: $%.2f" % price)
# Price: $19.99
```

---

## Part 4: Escape Sequences

### Special Characters
```python
# Newline \n
print("Hello\nWorld")
# Output:
# Hello
# World

# Tab \t
print("Name\tAge\tCity")
print("Alice\t25\tNYC")
# Output:
# Name	Age	City
# Alice	25	NYC

# Backslash \\
print("Path: C:\\Users\\Documents\\file.txt")
# Output: Path: C:\Users\Documents\file.txt

# Quote \"
print("She said \"Hello!\"")
# Output: She said "Hello!"

# Single quote \'
print('It\'s a beautiful day')
# Output: It's a beautiful day

# Raw string r"..." - don't interpret escapes
print(r"Path: C:\Users\Documents")
# Output: Path: C:\Users\Documents (backslashes preserved)

# Multiline strings
text = """This is a
multiline string
that spans
several lines"""
print(text)
```

---

## Part 5: Advanced String Operations

### String Multiplication
```python
# Repeat string
print("Ha" * 3)      # HaHaHa
print("-" * 10)      # ----------
print("Hi " * 4)     # Hi Hi Hi Hi

# Create borders
width = 20
print("*" * width)
print("*" + " " * (width - 2) + "*")
print("*" * width)

# Output:
# ********************
# *                  *
# ********************
```

### String Concatenation
```python
# Using + operator
first = "Hello"
second = "World"
result = first + " " + second
print(result)  # Hello World

# Using f-strings (preferred)
result = f"{first} {second}"
print(result)  # Hello World

# Using join() (efficient for many strings)
words = ["Python", "is", "awesome"]
result = " ".join(words)
print(result)  # Python is awesome

# += operator
text = "Hello"
text += " "
text += "World"
print(text)  # Hello World
```

### Common Patterns
```python
# Extract filename from path
path = "/home/user/documents/file.txt"
filename = path.split("/")[-1]
print(filename)  # file.txt

# Get file extension
extension = filename.split(".")[-1]
print(extension)  # txt

# Reverse words in sentence
sentence = "Hello World Python"
reversed_words = " ".join(sentence.split()[::-1])
print(reversed_words)  # Python World Hello

# Check if string is palindrome
def is_palindrome(text):
    clean = text.lower().replace(" ", "")
    return clean == clean[::-1]

print(is_palindrome("racecar"))     # True
print(is_palindrome("hello"))       # False
print(is_palindrome("A man a plan a canal Panama"))  # True
```

---

## Common Mistakes & Debugging

### Mistake 1: Forgetting Strings are Immutable
```python
# WRONG - trying to change string in place
text = "hello"
text[0] = "H"  # TypeError: 'str' object does not support item assignment

# CORRECT - create new string
text = "hello"
text = "H" + text[1:]
print(text)  # Hello
```

### Mistake 2: Index Out of Range
```python
# WRONG
text = "Hello"
print(text[10])  # IndexError: string index out of range

# CORRECT - check length first
if len(text) > 10:
    print(text[10])
else:
    print("Index too large")
```

### Mistake 3: Forgetting split() Returns List
```python
# WRONG - trying to index string result
words = "apple banana cherry".split(",")
# words is a list, not a string

# CORRECT usage
text = "apple,banana,cherry"
words = text.split(",")
print(words[0])  # apple
```

### Mistake 4: format() with Wrong Number of Arguments
```python
# WRONG
print("{} {} {}".format("Hello"))  # IndexError

# CORRECT
print("{} {} {}".format("Hello", "World", "!"))
# Hello World !
```

---

## Practice Problems

### Problem 1: Email Validator
Write a function that validates email format (simple check):
- Contains @ symbol
- Has text before @
- Has text after @
- Contains . in domain part

**Solution:**
```python
def is_valid_email(email):
    if "@" not in email:
        return False
    
    parts = email.split("@")
    if len(parts) != 2:
        return False
    
    local, domain = parts
    
    if not local or not domain:
        return False
    
    if "." not in domain:
        return False
    
    return True

emails = ["user@example.com", "invalid@", "@example.com", "no-at-sign"]
for email in emails:
    print(f"{email}: {is_valid_email(email)}")

# Output:
# user@example.com: True
# invalid@: False
# @example.com: False
# no-at-sign: False
```

### Problem 2: Text Statistics
Write a program that analyzes text:
- Word count
- Character count
- Unique words
- Most common letter

**Solution:**
```python
text = "hello world hello python"

# Word count
words = text.split()
word_count = len(words)

# Character count
char_count = len(text.replace(" ", ""))

# Unique words
unique_words = set(words)
unique_count = len(unique_words)

# Most common letter
letter_counts = {}
for letter in text.replace(" ", ""):
    letter_counts[letter] = letter_counts.get(letter, 0) + 1
most_common = max(letter_counts, key=letter_counts.get)

print(f"Words: {word_count}")
print(f"Characters: {char_count}")
print(f"Unique words: {unique_count}")
print(f"Most common letter: {most_common} ({letter_counts[most_common]} times)")

# Output:
# Words: 4
# Characters: 20
# Unique words: 3
# Most common letter: l (3 times)
```

### Problem 3: Phone Number Formatter
Write a program that formats a phone number.
Input: "1234567890"
Output: "(123) 456-7890"

**Solution:**
```python
def format_phone(phone):
    # Remove any non-digit characters
    digits = ''.join(c for c in phone if c.isdigit())
    
    if len(digits) != 10:
        return "Invalid number"
    
    return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"

phones = ["1234567890", "(123) 456-7890", "123-456-7890", "12345"]
for phone in phones:
    print(f"{phone} → {format_phone(phone)}")

# Output:
# 1234567890 → (123) 456-7890
# (123) 456-7890 → (123) 456-7890
# 123-456-7890 → (123) 456-7890
# 12345 → Invalid number
```

---

## Key Takeaways

1. **Indexing** accesses individual characters (0-based)
2. **Slicing** extracts substrings with [start:stop:step]
3. **String methods** modify/analyze strings (upper, split, join, etc.)
4. **f-strings** are the modern way to format strings
5. **Strings are immutable** - you create new strings, not modify them
6. **String validation** uses methods like isdigit(), isalpha()

---

## Next Steps

You now master text manipulation! In **Module 5: Functions** you'll learn:
- Creating reusable functions
- Parameters and return values
- Scope and variable lifetime
- Built-in functions and lambda functions
- How to organize code better

**Challenge:** Write a program that takes user input and uses 5+ string methods to analyze it!
