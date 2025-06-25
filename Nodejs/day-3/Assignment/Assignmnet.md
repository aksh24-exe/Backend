# 🔔 Node.js EventEmitter: Custom Event Tracker

This project demonstrates the use of Node.js `EventEmitter` to handle and track multiple custom events. It listens for various user-related actions like login, logout, purchases, and profile updates, and summarizes the event statistics upon request.

## 📌 Objective

- Create a program using Node.js `EventEmitter` that:
  - Listens for multiple types of user events (`login`, `logout`, `purchase`, `profileUpdate`)
  - Tracks how many times each event is emitted
  - Logs a summary report of all event occurrences when a special `summary` event is triggered

## 🛠️ Features

- Emits at least four different custom events
- Tracks how many times each event is triggered
- Emits events with relevant arguments (e.g., username, purchased item)
- Generates a detailed summary report of event statistics

## 📂 Project Structure

