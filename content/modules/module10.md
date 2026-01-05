# Module 10: Libraries & APIs - Extending Python's Power

## What You'll Learn
- What libraries and packages are
- Installing packages with pip
- Using the requests library for HTTP
- Working with REST APIs
- Parsing JSON responses
- Error handling for API calls
- Rate limiting and authentication
- Common useful libraries

## Why This Topic Matters
Python's true power comes from its vast ecosystem of libraries. Rather than reinventing the wheel, you use libraries built by thousands of developers. APIs let you access data and services from other applications. This module teaches you to leverage the Python community's work to build powerful applications quickly.

---

## Part 1: Introduction to Libraries and pip

### What Are Libraries?
```python
# Python comes with standard library
import math
print(math.sqrt(16))  # 4.0

# Standard library modules
import os
import sys
import json
import datetime

# Using library functions
print(datetime.datetime.now())
print(len("hello"))

# Exploring modules
import random
print(dir(random))  # See available functions
help(random.choice)  # Documentation
```

### Installing Packages with pip
```
# Command line (run in terminal):
pip install requests
pip install requests==2.28.0  # Specific version
pip install requests pandas numpy  # Multiple packages

# Uninstall
pip uninstall requests

# List installed packages
pip list

# Create requirements file
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

### Virtual Environments
```
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Mac/Linux)
source venv/bin/activate

# Now pip installs in this environment
pip install requests

# Deactivate
deactivate
```

---

## Part 2: The Requests Library

### Basic HTTP Requests
```python
import requests

# GET request
response = requests.get("https://api.example.com/data")

# Check status
print(response.status_code)  # 200 = success

# Get response content
print(response.text)  # Raw text
print(response.json())  # Parse as JSON

# Response headers
print(response.headers)

# POST request
data = {"name": "Alice", "age": 25}
response = requests.post("https://api.example.com/users", json=data)

# PUT request (update)
response = requests.put("https://api.example.com/users/1", json={"age": 26})

# DELETE request
response = requests.delete("https://api.example.com/users/1")
```

### Working with Query Parameters
```python
import requests

# Query parameters
params = {"page": 1, "limit": 10}
response = requests.get("https://api.example.com/users", params=params)

# Equivalent to:
# https://api.example.com/users?page=1&limit=10

# Search
search_params = {"q": "python", "sort": "stars"}
response = requests.get("https://api.github.com/search/repositories", 
                       params=search_params)
```

### Headers and Authentication
```python
import requests

# Custom headers
headers = {
    "User-Agent": "MyApp/1.0",
    "Accept": "application/json"
}

response = requests.get("https://api.example.com/data", headers=headers)

# Authentication
response = requests.get("https://api.example.com/protected",
                       auth=("username", "password"))

# API Key in header
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get("https://api.example.com/data", headers=headers)

# API Key in query
params = {"apiKey": "YOUR_API_KEY"}
response = requests.get("https://api.example.com/data", params=params)
```

---

## Part 3: Working with APIs

### Real API Example: OpenWeatherMap
```python
import requests

def get_weather(city, api_key):
    """Get current weather for a city"""
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"  # Celsius
    }
    
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return {
            "city": data["name"],
            "temperature": data["main"]["temp"],
            "description": data["weather"][0]["description"]
        }
    else:
        return {"error": f"Status {response.status_code}"}

# Usage
weather = get_weather("London", "YOUR_API_KEY")
print(f"Temperature in {weather['city']}: {weather['temperature']}°C")
```

### GitHub API Example
```python
import requests

def get_user_repos(username):
    """Get repositories for a GitHub user"""
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    
    if response.status_code == 200:
        repos = response.json()
        return [{"name": r["name"], 
                 "stars": r["stargazers_count"],
                 "language": r["language"]} 
                for r in repos]
    return []

# Usage
repos = get_user_repos("guido")
for repo in repos[:3]:  # First 3 repos
    print(f"{repo['name']}: {repo['stars']} stars")
```

### Error Handling for APIs
```python
import requests

def fetch_data(url):
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()  # Raise for error status
        return response.json()
    except requests.Timeout:
        print("Request timed out")
        return None
    except requests.ConnectionError:
        print("Connection failed")
        return None
    except requests.HTTPError as e:
        print(f"HTTP error: {e}")
        return None
    except ValueError:  # JSON decode error
        print("Invalid JSON response")
        return None

# Safe API call
data = fetch_data("https://api.example.com/data")
if data:
    print(data)
```

---

## Part 4: Rate Limiting and Pagination

### Handling Rate Limits
```python
import requests
import time

class RateLimitedAPI:
    def __init__(self, url, requests_per_second=1):
        self.url = url
        self.delay = 1 / requests_per_second
        self.last_request = 0
    
    def get(self, endpoint):
        # Wait if necessary
        elapsed = time.time() - self.last_request
        if elapsed < self.delay:
            time.sleep(self.delay - elapsed)
        
        self.last_request = time.time()
        response = requests.get(f"{self.url}{endpoint}")
        return response.json()

# Usage
api = RateLimitedAPI("https://api.example.com", requests_per_second=2)
data = api.get("/data")
```

### Pagination
```python
import requests

def get_all_pages(base_url):
    """Get data from all pages"""
    all_data = []
    page = 1
    
    while True:
        params = {"page": page}
        response = requests.get(base_url, params=params)
        
        if response.status_code != 200:
            break
        
        data = response.json()
        
        if not data:  # Empty page
            break
        
        all_data.extend(data)
        page += 1
    
    return all_data

# Usage
items = get_all_pages("https://api.example.com/items")
print(f"Total items: {len(items)}")
```

---

## Part 5: Common Useful Libraries

### Data Processing: pandas
```python
import pandas as pd

# Read CSV
df = pd.read_csv("data.csv")

# Basic operations
print(df.head())  # First rows
print(df.info())  # Column info
print(df["name"].unique())  # Unique values

# Filtering
adults = df[df["age"] > 18]

# Aggregation
print(df.groupby("city")["age"].mean())

# Save
df.to_csv("output.csv", index=False)
```

### Date and Time: datetime
```python
from datetime import datetime, timedelta

# Current time
now = datetime.now()
print(now)  # 2024-01-06 10:30:45.123456

# Create specific datetime
christmas = datetime(2024, 12, 25)

# Timedelta (duration)
days_until = christmas - now
print(days_until.days)

# Add time
next_week = now + timedelta(days=7)
```

### Scientific: numpy
```python
import numpy as np

# Arrays
arr = np.array([1, 2, 3, 4, 5])

# Math operations
print(np.sum(arr))  # 15
print(np.mean(arr))  # 3.0
print(np.std(arr))  # Standard deviation

# 2D arrays
matrix = np.array([[1, 2], [3, 4]])
print(matrix.T)  # Transpose
```

### Web Framework: Flask
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/hello", methods=["GET"])
def hello():
    name = request.args.get("name", "World")
    return jsonify({"message": f"Hello, {name}!"})

@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.json
    return jsonify({"id": 1, "name": data["name"]}), 201

if __name__ == "__main__":
    app.run(debug=True)
```

---

## Part 6: Real-World Application

### Weather Dashboard
```python
import requests
import json
from datetime import datetime

class WeatherDashboard:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.openweathermap.org/data/2.5"
    
    def get_current_weather(self, city):
        """Get current weather"""
        url = f"{self.base_url}/weather"
        params = {
            "q": city,
            "appid": self.api_key,
            "units": "metric"
        }
        
        try:
            response = requests.get(url, params=params, timeout=5)
            response.raise_for_status()
            
            data = response.json()
            return {
                "city": data["name"],
                "temperature": data["main"]["temp"],
                "feels_like": data["main"]["feels_like"],
                "humidity": data["main"]["humidity"],
                "description": data["weather"][0]["description"],
                "timestamp": datetime.now().isoformat()
            }
        except requests.RequestException as e:
            return {"error": str(e)}
    
    def get_forecast(self, city, days=3):
        """Get forecast"""
        url = f"{self.base_url}/forecast"
        params = {
            "q": city,
            "appid": self.api_key,
            "units": "metric",
            "cnt": days * 8  # 3-hour intervals, 8 per day
        }
        
        try:
            response = requests.get(url, params=params, timeout=5)
            response.raise_for_status()
            
            data = response.json()
            forecasts = []
            
            for item in data["list"]:
                forecasts.append({
                    "datetime": item["dt_txt"],
                    "temperature": item["main"]["temp"],
                    "description": item["weather"][0]["description"]
                })
            
            return forecasts[:8]  # Next 24 hours
        except requests.RequestException as e:
            return {"error": str(e)}

# Usage
dashboard = WeatherDashboard("YOUR_API_KEY")
weather = dashboard.get_current_weather("Paris")
print(f"Current weather in {weather['city']}: {weather['temperature']}°C")

forecast = dashboard.get_forecast("Paris")
for item in forecast:
    print(f"{item['datetime']}: {item['temperature']}°C - {item['description']}")
```

---

## Practice Problems

### Problem 1: User Data Fetcher
```python
import requests
import json

def fetch_and_save_users(api_url, output_file):
    """Fetch users from API and save to file"""
    try:
        response = requests.get(api_url, timeout=10)
        response.raise_for_status()
        
        users = response.json()
        
        # Save to file
        with open(output_file, "w") as f:
            json.dump(users, f, indent=2)
        
        return len(users)
    except requests.RequestException as e:
        print(f"Error: {e}")
        return 0

# Usage
count = fetch_and_save_users("https://jsonplaceholder.typicode.com/users", 
                             "users.json")
print(f"Saved {count} users")
```

---

## Key Takeaways

1. **Libraries extend Python** with powerful functionality
2. **pip installs packages** from the Python Package Index
3. **requests simplifies HTTP** operations
4. **APIs provide data** from other services
5. **Error handling prevents crashes** from network issues
6. **Rate limiting is respectful** to API providers
7. **Popular libraries** solve common problems

---

## Next Steps - Your Python Journey

Congratulations! You've completed all 10 modules. You now understand:
- Python basics and syntax
- Data structures for organizing information
- Control flow for logic
- Functions for reusability
- Object-oriented programming
- Advanced professional techniques
- File operations for persistence
- APIs for integration

**You're ready to:**
- Build real applications
- Contribute to open-source projects
- Learn specialized domains (data science, web development, automation)
- Solve complex problems with Python

**Where to go next:**
- Build projects combining what you learned
- Explore domain-specific frameworks (Django, FastAPI, PyGame)
- Study algorithms and data structures
- Practice with coding challenges
- Contribute to open-source projects

Keep coding! 🐍✨
