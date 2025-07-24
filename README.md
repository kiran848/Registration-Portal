# 📝 Registration Portal – React Project

The **Registration Portal** is a responsive web application built using **React.js**. It allows users to **register and log in** using client-side validation and stores the data locally using **LocalStorage**. This project serves as a beginner-friendly yet production-grade template that can be extended with real backend integration.

---

## 📖 About the Project

This portal offers two main features:

- **User Signup**: Collects name, email, and password with validation.
- **User Login**: Validates credentials stored in the browser's LocalStorage.

Once logged in, users are redirected to a basic **Home Page**, simulating a protected route. A separate component named `Counter` demonstrates simple React state handling.

The entire UI is styled using **custom CSS**, without any external UI libraries, giving you complete control over responsiveness and design.

---

## 🎨 Key Features

- ✔️ Functional **Signup** and **Login** forms  
- 🧠 **Form validation** with error display  
- 🔒 Data stored in browser **LocalStorage**  
- 🔁 Component-based architecture with clean separation  
- 💡 A sample `Counter.js` component to demonstrate state logic  
- 🔧 `Apiservices.js` abstracted to simulate API interactions  

---

## ⚙️ How It Works

1. **User Signup**  
   - Validates input fields (name, email, password).  
   - Stores the user object into browser's `localStorage`.

2. **User Login**  
   - Validates against credentials stored in `localStorage`.  
   - Redirects to the Home component upon successful login.

3. **Home.js**  
   - A basic dashboard or landing page shown after login.  
   - Can be extended to display user-specific data or analytics.

4. **Counter.js**  
   - Demonstrates usage of React’s `useState`.  
   - A standalone component useful for learning state management.

5. **Apiservices.js**  
   - Currently mimics API interactions using `localStorage`.  
   - Easily upgradable to real API calls using `axios` or `fetch`.

---

## 💻 Getting Started

Before starting, make sure you have **Node.js** and **npm** installed.

### 1. Clone the Repository
    ```bash
    git clone https://github.com/kiran848/Registration-Portal.git
    
### 2. Navigate into the Project Directory
    ```bash
    cd Registration-Portal
    
### 3. Start the development server
     ```bash
    npm start

---
    




