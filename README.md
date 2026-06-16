# 🧮 Calculator - The Odin Project

> 🔗 **Live Demo:** [Click here to try the calculator](https://augustohss.github.io/Calculator/)

## 📝 About the Project
This is an interactive calculator web application built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum. The main goal of this project was to put into practice programming logic with JavaScript, DOM manipulation, and layout creation using CSS Grid.

## ✨ Features
* **Math Operations:** Supports addition (+), subtraction (-), multiplication (*), and division (/).
* **`AC` Button (All Clear):** Completely clears the display and resets the calculator's memory.
* **`C` Button (Clear/Backspace):** Erases the last digit entered, allowing users to correct typing mistakes without losing the whole calculation.
* **Smart Display:** If an operation results in a long decimal, the calculator automatically formats it to up to 3 decimal places, preventing text from overflowing the display.
* **Modern Interface:** A clean and responsive design featuring button interactions that simulate a physical click using CSS pseudo-classes (`:hover` and `:active`).

## 🚀 Technologies Used
* **HTML5:** Semantic structure of the application.
* **CSS3:** Styling with **Flexbox** (for general alignment) and **CSS Grid** (for the button layout, including buttons spanning multiple columns/rows).
* **JavaScript (Vanilla):** Mathematical logic, state management (tracking the first number, operator, and second number), and Event Listeners.

## 💡 What I Learned
While building this project, I deepened my knowledge in:
* Implementing **CSS Grid** in a practical scenario, manipulating properties like `grid-template-columns`, `grid-column: span 2`, and `grid-row: span 2` to fit buttons of different sizes perfectly.
* Encapsulating code within functions (such as `createCalculator`) to keep the global scope clean.
* Managing application state, ensuring the program knows exactly when the user is typing the first number, choosing an operator, or entering the second number.
* Updating the DOM dynamically based on user interaction.
