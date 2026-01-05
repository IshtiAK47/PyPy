# Module 9: File Handling & OS Operations

## What You'll Learn
- Reading and writing files with different modes
- Working with file paths using pathlib
- Reading large files efficiently
- Working with different file formats (JSON, CSV, TXT)
- File and directory operations
- Working with the os module
- Handling file errors properly
- Context managers for file safety

## Why This Topic Matters
Real-world applications work with files constantly - configuration, data, logs, user uploads. Understanding file operations and OS interactions is essential. Working with files incorrectly can cause data loss, security issues, or performance problems. This module teaches the right way to handle files professionally.

---

## Part 1: Basic File Operations

### Reading Files
```python
# Read entire file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read all lines as list
with open("data.txt", "r") as file:
    lines = file.readlines()
    print(lines)

# Output example:
# ['Line 1\n', 'Line 2\n', 'Line 3']
```

### Writing Files
```python
# Write (overwrites if exists)
with open("output.txt", "w") as file:
    file.write("First line\n")
    file.write("Second line\n")

# Append (adds to end)
with open("output.txt", "a") as file:
    file.write("Third line\n")

# Write multiple lines
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    for line in lines:
        file.write(line + "\n")
```

### File Modes
```python
# "r"  - Read (default)
# "w"  - Write (overwrites)
# "a"  - Append (adds to end)
# "r+" - Read and write
# "b"  - Binary (add to any mode: "rb", "wb")

# Writing binary data
with open("image.bin", "wb") as file:
    file.write(b"Binary content")

# Reading binary data
with open("image.bin", "rb") as file:
    data = file.read()
    print(data)  # b'Binary content'
```

---

## Part 2: Working with Paths

### Using pathlib
```python
from pathlib import Path

# Create path objects
current_dir = Path(".")
file_path = Path("data") / "file.txt"  # Automatic separator

# Path operations
print(file_path.name)          # file.txt
print(file_path.stem)          # file
print(file_path.suffix)        # .txt
print(file_path.parent)        # data
print(file_path.absolute())    # Full path

# Check path existence
if file_path.exists():
    print("File exists")

# Create directories
data_dir = Path("data")
data_dir.mkdir(exist_ok=True)  # Creates if not exists

# List files
for file in Path(".").glob("*.txt"):
    print(file)

# Iterate recursively
for file in Path(".").rglob("*.py"):
    print(file)
```

### OS Module
```python
import os

# Current directory
print(os.getcwd())

# List directory contents
files = os.listdir(".")
print(files)

# File operations
os.rename("old.txt", "new.txt")
os.remove("new.txt")
os.mkdir("new_dir")

# Path operations
path = os.path.join("data", "file.txt")
print(path)  # data/file.txt (correct separator for OS)

# Check path information
print(os.path.exists(path))
print(os.path.isfile(path))
print(os.path.isdir(path))
```

---

## Part 3: Reading Different File Formats

### Working with JSON
```python
import json

# Write JSON
data = {
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coding"]
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=2)

# Read JSON
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data["name"])  # Alice

# JSON strings
json_string = json.dumps(data)
parsed = json.loads(json_string)
```

### Working with CSV
```python
import csv

# Write CSV
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "NYC"],
    ["Bob", 30, "SF"]
]

with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Read CSV
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# CSV with dictionaries
data_dicts = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30}
]

with open("data.csv", "w", newline="") as file:
    fieldnames = ["name", "age"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data_dicts)
```

### Working with Text Files
```python
# Process large text file
def process_file(file_path):
    with open(file_path, "r") as file:
        for line_num, line in enumerate(file, 1):
            line = line.strip()
            if line:  # Skip empty lines
                print(f"Line {line_num}: {line}")

process_file("data.txt")

# Count words
def count_words(file_path):
    word_count = 0
    with open(file_path, "r") as file:
        for line in file:
            word_count += len(line.split())
    return word_count

words = count_words("data.txt")
print(f"Total words: {words}")
```

---

## Part 4: File Operations and Safety

### Safe File Handling
```python
# Always use context managers
try:
    with open("data.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found")
except IOError as e:
    print(f"Error reading file: {e}")
# File automatically closed even if error occurs

# Handling encoding
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()

# Binary safe mode
with open("binary.bin", "rb") as file:
    data = file.read()
```

### Creating and Modifying Files
```python
from pathlib import Path

# Create file safely
file_path = Path("output.txt")

# Write only if doesn't exist
if not file_path.exists():
    file_path.write_text("New content")

# Append text
current_content = file_path.read_text()
file_path.write_text(current_content + "\nAdded line")

# Backup before overwriting
import shutil

original = Path("important.txt")
backup = Path("important.txt.bak")

if original.exists():
    shutil.copy(original, backup)
```

---

## Part 5: Working with Directories

### Directory Operations
```python
from pathlib import Path
import shutil

# Create directory structure
data_dir = Path("data/processed/results")
data_dir.mkdir(parents=True, exist_ok=True)

# List all files in directory
files = list(Path("data").glob("*.txt"))

# Get file sizes
for file in files:
    size = file.stat().st_size
    print(f"{file.name}: {size} bytes")

# Delete directory
shutil.rmtree("data/old")

# Copy directory
shutil.copytree("src", "backup")
```

### Walking Directory Trees
```python
import os

# Process all files in directory and subdirectories
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".txt"):
            full_path = os.path.join(root, file)
            print(full_path)

# With pathlib
from pathlib import Path

for file in Path(".").rglob("*.txt"):
    print(file)
    content = file.read_text()
    print(f"  {len(content)} characters")
```

---

## Part 6: Advanced File Processing

### Processing Large Files
```python
# Don't load large files into memory - use streaming
def process_large_file(file_path, chunk_size=1024):
    with open(file_path, "r") as file:
        chunk = file.read(chunk_size)
        while chunk:
            # Process chunk
            print(f"Processing {len(chunk)} characters")
            chunk = file.read(chunk_size)

# Line-by-line processing
def count_lines(file_path):
    count = 0
    with open(file_path, "r") as file:
        for line in file:
            count += 1
    return count

# Generator for efficient iteration
def read_file_lines(file_path):
    with open(file_path, "r") as file:
        for line in file:
            yield line.strip()

# Use it
for line in read_file_lines("data.txt"):
    print(line)
```

### File Locking and Temp Files
```python
import tempfile
import os

# Create temporary file
with tempfile.NamedTemporaryFile(mode="w", delete=False) as temp:
    temp.write("temporary data")
    temp_path = temp.name

# Use temporary file
with open(temp_path, "r") as f:
    print(f.read())

# Clean up
os.remove(temp_path)

# Temporary directory
with tempfile.TemporaryDirectory() as temp_dir:
    temp_file = os.path.join(temp_dir, "data.txt")
    with open(temp_file, "w") as f:
        f.write("Data")
    print(f"Created {temp_file}")
# Directory automatically deleted
```

---

## Real-World Example: Log File Analyzer

```python
from pathlib import Path
from datetime import datetime
import json

class LogAnalyzer:
    def __init__(self, log_file):
        self.log_file = Path(log_file)
    
    def parse_logs(self):
        """Parse log file and return structured data"""
        logs = []
        with open(self.log_file, "r") as f:
            for line in f:
                # Parse each log line
                parts = line.strip().split(" - ")
                if len(parts) >= 2:
                    logs.append({
                        "timestamp": parts[0],
                        "level": parts[1] if len(parts) > 2 else "INFO",
                        "message": " - ".join(parts[2:])
                    })
        return logs
    
    def count_by_level(self, logs):
        """Count logs by level"""
        counts = {}
        for log in logs:
            level = log["level"]
            counts[level] = counts.get(level, 0) + 1
        return counts
    
    def save_report(self, logs, output_file):
        """Save analysis report"""
        report = {
            "total_logs": len(logs),
            "by_level": self.count_by_level(logs),
            "generated": datetime.now().isoformat()
        }
        
        with open(output_file, "w") as f:
            json.dump(report, f, indent=2)

# Usage
analyzer = LogAnalyzer("app.log")
logs = analyzer.parse_logs()
analyzer.save_report(logs, "log_report.json")
```

---

## Practice Problems

### Problem 1: File Statistics
```python
def file_stats(file_path):
    """Get file statistics"""
    with open(file_path, "r") as f:
        lines = f.readlines()
    
    total_chars = sum(len(line) for line in lines)
    total_words = sum(len(line.split()) for line in lines)
    
    return {
        "lines": len(lines),
        "words": total_words,
        "characters": total_chars
    }

stats = file_stats("data.txt")
print(stats)
# {'lines': 10, 'words': 50, 'characters': 250}
```

---

## Key Takeaways

1. **Always use context managers** (`with` statement)
2. **Handle file errors** gracefully
3. **Use pathlib** for path operations
4. **Stream large files** instead of loading all at once
5. **JSON for data**, CSV for tables
6. **Check encoding** when reading files
7. **Back up** before overwriting important files

---

## Next Steps

You're working with files like a pro! In **Module 10: Libraries & APIs** you'll learn:
- Using external libraries and pip
- The requests library for HTTP
- Working with APIs
- Error handling for network operations
- Data processing from APIs
