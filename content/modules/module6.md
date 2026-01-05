# Module 6: Data Structures - Collections & Organization

## What You'll Learn
- Working with lists in depth (methods, slicing, comprehensions)
- Dictionaries and nested structures for complex data
- Sets for unique values and set operations
- Tuples as immutable sequences
- List comprehensions for elegant code
- Dictionary comprehensions
- When to use each data structure
- Performance considerations

## Why This Topic Matters
Data structures determine how you organize information in your programs. Choosing the right structure makes your code cleaner and more efficient. Real-world programs manipulate complex data constantly - lists of users, dictionaries of settings, sets of unique IDs. Mastering these structures is essential for professional programming.

---

## Part 1: Lists in Depth

### List Methods and Operations
```python
# Creating and modifying lists
fruits = ["apple", "banana", "cherry"]

# append() - add to end
fruits.append("date")
print(fruits)  # ['apple', 'banana', 'cherry', 'date']

# extend() - add multiple items
fruits.extend(["elderberry", "fig"])
print(fruits)  # ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

# insert() - add at specific position
fruits.insert(1, "blueberry")
print(fruits[0:3])  # ['apple', 'blueberry', 'banana']

# remove() - delete first occurrence
fruits.remove("blueberry")

# pop() - remove and return item
last = fruits.pop()  # Returns 'fig', removes from list
second_last = fruits.pop(-2)  # Remove second from end

# clear() - remove all items
copy = fruits.copy()
copy.clear()
print(copy)  # []

# index() - find position
pos = fruits.index("banana")
print(pos)  # 1

# count() - count occurrences
nums = [1, 2, 2, 3, 2, 4]
print(nums.count(2))  # 3

# sort() - sort in place
nums.sort()
print(nums)  # [1, 2, 2, 2, 3, 4]

# reverse() - reverse in place
nums.reverse()
print(nums)  # [4, 3, 2, 2, 2, 1]
```

### List Slicing and Unpacking
```python
# Advanced slicing
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Every nth element
print(numbers[::2])    # [0, 2, 4, 6, 8]
print(numbers[1::2])   # [1, 3, 5, 7, 9]

# Negative indices
print(numbers[-3:])    # [7, 8, 9]
print(numbers[:-3])    # [0, 1, 2, 3, 4, 5, 6]

# Unpacking
first, second, *rest = numbers
print(first, second, rest)
# 0 1 [2, 3, 4, 5, 6, 7, 8, 9]

# Unpacking with extended unpacking
first, *middle, last = numbers
print(first, middle[-1], last)
# 0 8 9
```

### List Comprehensions
```python
# Elegant way to create lists
# Syntax: [expression for item in iterable if condition]

# Basic comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# String manipulation
words = ["hello", "world", "python"]
uppercase = [w.upper() for w in words]
print(uppercase)  # ['HELLO', 'WORLD', 'PYTHON']

# Nested comprehension (flattening)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# With transformation
data = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers = [item[0] for item in data]
letters = [item[1] for item in data]
print(numbers, letters)
# [1, 2, 3] ['a', 'b', 'c']
```

---

## Part 2: Dictionaries in Depth

### Dictionary Operations
```python
# Creating and accessing dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC",
    "hobbies": ["reading", "coding", "gaming"]
}

# Access values
print(person["name"])      # Alice
print(person.get("age"))   # 25
print(person.get("email", "Not provided"))  # Not provided (safe)

# Add/update items
person["email"] = "alice@example.com"
person["age"] = 26

# Update multiple items
person.update({"city": "SF", "country": "USA"})

# Delete items
del person["country"]
person.pop("email")

# Get all keys/values
print(person.keys())    # dict_keys(['name', 'age', ...])
print(person.values())  # dict_values(['Alice', 26, ...])
print(person.items())   # dict_items([('name', 'Alice'), ...])

# Check if key exists
if "name" in person:
    print("Name exists")

# setdefault() - get or create
person.setdefault("phone", "unknown")
```

### Nested Dictionaries
```python
# Complex data structures
company = {
    "name": "TechCorp",
    "employees": {
        "alice": {"age": 25, "salary": 70000},
        "bob": {"age": 30, "salary": 75000}
    },
    "locations": ["NYC", "SF", "Austin"]
}

# Accessing nested data
print(company["employees"]["alice"]["salary"])  # 70000

# Modifying nested data
company["employees"]["alice"]["salary"] = 75000

# Iterating nested
for name, info in company["employees"].items():
    print(f"{name}: ${info['salary']}")
# alice: $75000
# bob: $75000
```

### Dictionary Comprehensions
```python
# Create dictionaries elegantly
# Syntax: {key: value for item in iterable}

# Simple transformation
numbers = [1, 2, 3, 4, 5]
squares = {x: x**2 for x in numbers}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From list to dict
words = ["apple", "banana", "cherry"]
word_lengths = {w: len(w) for w in words}
print(word_lengths)  # {'apple': 5, 'banana': 6, 'cherry': 6}

# With condition
prices = {"apple": 1.0, "banana": 0.5, "cherry": 2.0}
expensive = {k: v for k, v in prices.items() if v > 0.6}
print(expensive)  # {'apple': 1.0, 'cherry': 2.0}

# Key-value swap
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}
```

---

## Part 3: Sets - Unique Collections

### Set Operations
```python
# Sets store unique values
colors = {"red", "blue", "green", "red"}
print(colors)  # {'red', 'blue', 'green'} - duplicates removed

# Creating sets
empty_set = set()  # Not {} - that's a dict!
numbers = {1, 2, 3, 4, 5}

# Adding items
colors.add("yellow")
colors.add("red")  # No effect - already exists

# Removing items
colors.remove("blue")  # Error if not found
colors.discard("pink")  # No error if not found

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union - all items from both
print(set1 | set2)  # {1, 2, 3, 4, 5, 6}
print(set1.union(set2))

# Intersection - common items
print(set1 & set2)  # {3, 4}
print(set1.intersection(set2))

# Difference - in first but not second
print(set1 - set2)  # {1, 2}
print(set1.difference(set2))

# Symmetric difference - in either but not both
print(set1 ^ set2)  # {1, 2, 5, 6}
```

### Practical Set Usage
```python
# Remove duplicates
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4] (order may vary)

# Find common elements
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = list(set(list1) & set(list2))
print(common)  # [3, 4]

# Check membership (faster than list)
valid_colors = {"red", "green", "blue"}
user_input = "red"
if user_input in valid_colors:
    print("Valid color")

# Find unique characters
text = "hello world"
unique_chars = set(text)
print(unique_chars)  # {'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'}
```

---

## Part 4: Tuples - Immutable Sequences

### Working with Tuples
```python
# Tuples can't be modified
point = (10, 20)
color = (255, 128, 0)

# Accessing elements
x = point[0]  # 10
r = color[0]  # 255

# Unpacking
x, y = point
print(f"Point: ({x}, {y})")

# Iteration
for value in color:
    print(value)
# 255
# 128
# 0

# Tuple with single element needs comma!
single = (42,)  # This is a tuple
single = (42)   # This is just 42 (an int)

# Tuple methods
items = (1, 2, 3, 2, 1)
print(items.count(2))   # 2
print(items.index(3))   # 2

# Converting
list_to_tuple = tuple([1, 2, 3])
tuple_to_list = list((1, 2, 3))
```

### When to Use Tuples
```python
# 1. As dictionary keys (lists can't be)
coordinates = {
    (0, 0): "origin",
    (1, 1): "diagonal",
    (5, 10): "far"
}
print(coordinates[(0, 0)])  # origin

# 2. Function returns multiple values
def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([3, 1, 4, 1, 5])
print(f"Min: {min_val}, Max: {max_val}")

# 3. Constant sequences
COLORS = ("red", "green", "blue")
# Can't accidentally modify

# 4. Named tuples (more structured)
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
```

---

## Part 5: Choosing the Right Data Structure

### Comparison Table
```python
# Lists - ordered, mutable, duplicates allowed
tasks = ["task1", "task2", "task1"]
tasks.append("task3")

# Tuples - ordered, immutable, duplicates allowed
coordinates = (10, 20)
# coordinates[0] = 15  # Error!

# Dictionaries - key-value pairs, mutable
person = {"name": "Alice", "age": 25}
person["email"] = "alice@example.com"

# Sets - unique values, mutable, unordered
unique_ids = {1, 2, 3, 4, 5}
unique_ids.add(6)
```

### Real-World Example: Student Database
```python
# Combining data structures
students = [
    {
        "id": 1,
        "name": "Alice",
        "grades": (90, 85, 88),
        "hobbies": {"reading", "coding"}
    },
    {
        "id": 2,
        "name": "Bob",
        "grades": (75, 80, 78),
        "hobbies": {"gaming", "sports"}
    }
]

# Access nested data
print(students[0]["name"])           # Alice
print(students[0]["grades"][1])      # 85
print(students[0]["hobbies"])        # {'reading', 'coding'}

# Calculate average grade
avg_alice = sum(students[0]["grades"]) / len(students[0]["grades"])
print(f"Alice's average: {avg_alice:.1f}")

# Find common hobbies
hobbies1 = students[0]["hobbies"]
hobbies2 = students[1]["hobbies"]
common = hobbies1 & hobbies2
print(f"Common hobbies: {common}")  # set() - no common hobbies

# List comprehension to get all names
names = [s["name"] for s in students]
print(names)  # ['Alice', 'Bob']
```

---

## Part 6: Performance and Best Practices

### List vs Tuple Performance
```python
# Creating large sequences
import time

# List creation
start = time.time()
list_data = list(range(1000000))
list_time = time.time() - start

# Tuple creation
start = time.time()
tuple_data = tuple(range(1000000))
tuple_time = time.time() - start

print(f"List: {list_time:.6f}s")
print(f"Tuple: {tuple_time:.6f}s")
# Tuples are faster to create
```

### Set Performance for Membership
```python
# Checking if item in list (slow)
large_list = list(range(100000))
start = time.time()
for _ in range(1000):
    100 in large_list
list_time = time.time() - start

# Checking if item in set (fast)
large_set = set(range(100000))
start = time.time()
for _ in range(1000):
    100 in large_set
set_time = time.time() - start

print(f"List lookup: {list_time:.6f}s")
print(f"Set lookup: {set_time:.6f}s")
# Sets are much faster!
```

---

## Practice Problems

### Problem 1: Inventory Manager
Create a system to manage product inventory with quantities.

**Solution:**
```python
inventory = {
    "apple": {"price": 1.0, "quantity": 50},
    "banana": {"price": 0.5, "quantity": 100},
    "cherry": {"price": 2.0, "quantity": 30}
}

# Check stock
def check_stock(product):
    if product in inventory:
        return inventory[product]["quantity"]
    return 0

# Update stock
def add_stock(product, amount):
    if product in inventory:
        inventory[product]["quantity"] += amount

# Get value
def inventory_value():
    total = 0
    for product, info in inventory.items():
        total += info["price"] * info["quantity"]
    return total

print(f"Apple stock: {check_stock('apple')}")
add_stock("apple", 25)
print(f"Apple stock after: {check_stock('apple')}")
print(f"Total inventory value: ${inventory_value():.2f}")

# Output:
# Apple stock: 50
# Apple stock after: 75
# Total inventory value: $300.00
```

### Problem 2: Data Analysis
Analyze student grades using various data structures.

**Solution:**
```python
grades = {
    "Alice": [85, 90, 88],
    "Bob": [75, 80, 78],
    "Charlie": [92, 95, 90]
}

# Calculate averages with dict comprehension
averages = {name: sum(grades)/len(grades) 
            for name, grades in grades.items()}

# Find top student
top_student = max(averages, key=averages.get)
print(f"Top student: {top_student} ({averages[top_student]:.1f})")

# Get unique grades
all_grades = set()
for grades_list in grades.values():
    all_grades.update(grades_list)

print(f"Unique grades: {sorted(all_grades)}")
```

---

## Key Takeaways

1. **Lists** are ordered, mutable - use for sequences
2. **Tuples** are immutable - use as keys or for constant data
3. **Dictionaries** store key-value pairs - use for structured data
4. **Sets** store unique values - use for membership testing
5. **Comprehensions** create collections elegantly
6. **Nested structures** combine them for complex data
7. **Choose wisely** based on your needs (performance, mutability)

---

## Next Steps

You now organize complex data! In **Module 7: Object-Oriented Programming** you'll learn:
- Creating and using classes
- Object attributes and methods
- Inheritance and polymorphism
- Encapsulation and abstraction
- Design patterns

**Challenge:** Create a program combining all four data structures!
