# Individual Todo List

A lightweight, responsive Todo application built with **React** and **Vite**. This project allows users to manage their daily tasks efficiently through a clean, interactive interface.

## 🚀 Features

- **Add Tasks**: Quickly add new items to your list using the input field or the "Enter" key.
- **Track Progress**: Toggle task completion status with a checkbox.
- **Delete Tasks**: Remove tasks instantly when they are no longer needed.
- **Persistent State**: Managed via React hooks for a reactive user experience.
- **Clean UI**: Semantic HTML structure with dedicated sections for the header and task management.

## 🛠️ Built With

- **React**: Frontend library for building the user interface.
- **Vite**: Modern frontend tooling for a fast development environment.
- **CSS3**: Custom styling for task completion states (line-through effects).

## 📂 Logic Summary

The application core resides in `App.jsx` and utilizes the following logic:

- **State Management**: Uses `useState` to track the array of todo objects and the current input text.
- **Dynamic ID Generation**: Uses `Date.now()` to ensure each new task has a unique identifier.
- **Array Methods**: 
    - `.filter()` is used for task deletion.
    - `.map()` is used for both rendering the list and toggling the `completed` boolean.
- **Event Handling**: Includes a `handleKeyPress` function to improve user UX by allowing "Enter" to submit.

## 🏁 Getting Started

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/AsherC05/React-todo-app.git](https://github.com/AsherC05/React-todo-app.git)
