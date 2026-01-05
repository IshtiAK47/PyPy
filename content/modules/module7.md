# Module 7: Object-Oriented Programming - Building with Classes

## What You'll Learn
- What OOP is and why it matters
- Creating classes and objects
- Attributes and methods
- The `__init__` constructor
- Instance vs class variables
- Inheritance and extending classes
- Polymorphism and method overriding
- Encapsulation and access control
- Special methods (dunder methods)

## Why This Topic Matters
Object-Oriented Programming is the dominant programming paradigm. Most real-world applications are built around objects. Understanding classes lets you model real-world concepts in code, create reusable components, and build maintainable software. Every time you use a library, you're using objects created by someone else.

---

## Part 1: Classes and Objects

### Creating Your First Class
```python
# Basic class structure
class Dog:
    """A class representing a dog"""
    
    # Constructor - called when creating new instance
    def __init__(self, name, age):
        self.name = name      # Instance attribute
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says: Woof!"
    
    def get_age_in_dog_years(self):
        return self.age * 7

# Create objects (instances)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Luna", 5)

# Access attributes
print(dog1.name)  # Buddy
print(dog2.age)   # 5

# Call methods
print(dog1.bark())  # Buddy says: Woof!
print(dog2.get_age_in_dog_years())  # 35

# Check type
print(type(dog1))  # <class '__main__.Dog'>
print(isinstance(dog1, Dog))  # True
```

### Attributes and Methods
```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited ${amount}. New balance: ${self.balance}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        return f"Withdrew ${amount}. New balance: ${self.balance}"
    
    def get_balance(self):
        return self.balance

# Using the class
account = BankAccount("Alice", 1000)
print(account.deposit(500))     # Deposited $500. New balance: $1500
print(account.withdraw(200))    # Withdrew $200. New balance: $1300
print(account.get_balance())    # 1300
```

---

## Part 2: Class Variables and Constructors

### Class vs Instance Variables
```python
class Student:
    school = "Central High"  # Class variable - shared by all
    
    def __init__(self, name, grade):
        self.name = name          # Instance variable
        self.grade = grade        # Instance variable
        self.gpa = 0.0

student1 = Student("Alice", 10)
student2 = Student("Bob", 11)

# Access class variable through instances
print(student1.school)  # Central High
print(student2.school)  # Central High

# Change class variable
Student.school = "North High"
print(student1.school)  # North High (changed for all!)
print(student2.school)  # North High

# Instance variables are independent
student1.gpa = 3.8
student2.gpa = 3.5
print(student1.gpa, student2.gpa)  # 3.8 3.5
```

### Using `self`
```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.speed = 0
    
    def accelerate(self):
        self.speed += 10
        return f"{self.brand} {self.model} accelerated to {self.speed} mph"
    
    def describe(self):
        return f"{self.year} {self.brand} {self.model} going {self.speed} mph"

car = Car("Toyota", "Camry", 2022)
print(car.accelerate())  # Toyota Camry accelerated to 10 mph
print(car.accelerate())  # Toyota Camry accelerated to 20 mph
print(car.describe())    # 2022 Toyota Camry going 20 mph
```

---

## Part 3: Inheritance

### Basic Inheritance
```python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

# Child class inherits from parent
class Cat(Animal):
    def speak(self):
        return f"{self.name} meows"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

# Using inherited classes
cat = Cat("Whiskers")
dog = Dog("Buddy")

print(cat.speak())  # Whiskers meows
print(dog.speak())  # Buddy barks
```

### Calling Parent Methods
```python
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def describe(self):
        return f"{self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, doors):
        super().__init__(brand, model)  # Call parent __init__
        self.doors = doors
    
    def describe(self):
        parent_desc = super().describe()  # Call parent method
        return f"{parent_desc} with {self.doors} doors"

car = Car("Honda", "Civic", 4)
print(car.describe())  # Honda Civic with 4 doors
```

### Multi-level Inheritance
```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def make_sound(self):
        return "Some sound"

class Mammal(Animal):
    def __init__(self, name, fur_color):
        super().__init__(name)
        self.fur_color = fur_color

class Dog(Mammal):
    def __init__(self, name, fur_color, breed):
        super().__init__(name, fur_color)
        self.breed = breed
    
    def make_sound(self):
        return f"{self.name} barks"

dog = Dog("Max", "brown", "Labrador")
print(dog.make_sound())  # Max barks
print(dog.fur_color)     # brown
```

---

## Part 4: Polymorphism and Method Overriding

### Polymorphism in Action
```python
class Bird:
    def fly(self):
        return "Flying..."

class Sparrow(Bird):
    def fly(self):
        return "Sparrow flying fast"

class Penguin(Bird):
    def fly(self):
        return "Penguin cannot fly"

# Polymorphism - same method, different behaviors
birds = [Sparrow(), Penguin(), Bird()]

for bird in birds:
    print(bird.fly())
# Sparrow flying fast
# Penguin cannot fly
# Flying...
```

### Duck Typing
```python
# Python doesn't require same parent class for polymorphism
class Dog:
    def speak(self):
        return "Woof"

class Robot:
    def speak(self):
        return "Beep boop"

def make_speak(obj):
    print(obj.speak())  # Works with any object with speak()

make_speak(Dog())     # Woof
make_speak(Robot())   # Beep boop
```

---

## Part 5: Special Methods (Dunder Methods)

### Common Special Methods
```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    # String representation
    def __str__(self):
        return f"{self.title} by {self.author}"
    
    # Developer representation
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.pages})"
    
    # Length
    def __len__(self):
        return self.pages
    
    # Comparison
    def __eq__(self, other):
        return self.title == other.title
    
    def __lt__(self, other):
        return self.pages < other.pages
    
    # Addition
    def __add__(self, other):
        return self.pages + other.pages

book1 = Book("Python 101", "John", 300)
book2 = Book("Python 101", "Jane", 250)

print(str(book1))      # Python 101 by John
print(repr(book1))     # Book('Python 101', 'John', 300)
print(len(book1))      # 300
print(book1 == book2)  # True (same title)
print(book1 < book2)   # False (300 not < 250)
print(book1 + book2)   # 550 (combined pages)
```

### Making Classes Iterable
```python
class Playlist:
    def __init__(self, name, songs):
        self.name = name
        self.songs = songs
    
    def __iter__(self):
        return iter(self.songs)
    
    def __len__(self):
        return len(self.songs)
    
    def __getitem__(self, index):
        return self.songs[index]

playlist = Playlist("Favorites", ["Song1", "Song2", "Song3"])

# Iteration
for song in playlist:
    print(song)

# Indexing
print(playlist[0])  # Song1

# Length
print(len(playlist))  # 3
```

---

## Part 6: Encapsulation and Access Control

### Private Attributes
```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private (double underscore)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
print(account.owner)        # Alice
print(account.get_balance())  # 1000
# print(account.__balance)  # Error! Can't access private

# Deposit uses validation
account.deposit(500)
print(account.get_balance())  # 1500
account.deposit(-100)  # Rejected
print(account.get_balance())  # 1500 (unchanged)
```

### Properties
```python
class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height
    
    @property
    def area(self):
        return self._width * self._height
    
    @property
    def perimeter(self):
        return 2 * (self._width + self._height)
    
    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, value):
        if value > 0:
            self._width = value

rect = Rectangle(5, 3)
print(rect.area)      # 15
print(rect.perimeter) # 16

# Properties feel like attributes
rect.width = 10
print(rect.area)      # 30
```

---

## Real-World Example: E-Commerce System

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self._price = price
    
    @property
    def price(self):
        return self._price
    
    def discount(self, percent):
        return self._price * (1 - percent/100)

class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, product, quantity):
        self.items.append({
            "product": product,
            "quantity": quantity
        })
    
    def total(self):
        total = 0
        for item in self.items:
            price = item["product"].price
            total += price * item["quantity"]
        return total

# Using the classes
laptop = Product("Laptop", 999.99)
mouse = Product("Mouse", 29.99)

cart = ShoppingCart()
cart.add_item(laptop, 1)
cart.add_item(mouse, 2)

print(f"Total: ${cart.total():.2f}")  # Total: $1059.97
```

---

## Practice Problems

### Problem 1: Library Management System
```python
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
    
    def __str__(self):
        return f"{self.title} by {self.author}"

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def find_by_author(self, author):
        return [b for b in self.books if b.author == author]
    
    def get_total_books(self):
        return len(self.books)

# Usage
lib = Library("City Library")
lib.add_book(Book("1984", "Orwell", "123"))
lib.add_book(Book("Brave New World", "Huxley", "456"))
lib.add_book(Book("Animal Farm", "Orwell", "789"))

print(f"Total: {lib.get_total_books()}")  # Total: 3
orwell_books = lib.find_by_author("Orwell")
for book in orwell_books:
    print(book)  # 1984 by Orwell, Animal Farm by Orwell
```

---

## Key Takeaways

1. **Classes** organize related data and functions
2. **Objects** are instances of classes
3. **Inheritance** allows code reuse
4. **Polymorphism** enables flexible code
5. **Encapsulation** protects internal state
6. **Special methods** make classes Pythonic
7. **Properties** create cleaner interfaces

---

## Next Steps

You've learned to build with objects! In **Module 8: Advanced Topics** you'll explore:
- Exception handling
- Decorators
- Generators
- Context managers

These advanced features make your code more robust and elegant!
