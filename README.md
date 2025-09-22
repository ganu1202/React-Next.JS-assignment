# 🧑‍💼 User Management System

A full-stack web application built with **Next.js (App Router)** and **MongoDB** that allows users to **view, add, update, and delete** user records.

---

## 🚀 Features

- View all users in a responsive table
- Add new users with validation
- Update existing user details
- Delete users with confirmation
- MongoDB integration for persistent storage
- Clean UI with basic styling

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13+ (App Router, Client Components)
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Styling:** CSS Modules / Global CSS

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```
2. Environment Setup
   Include instructions for setting up environment variables, especially for MongoDB connection:

# .env.local

MONGODB_URI=your-mongodb-connection-string

Explain how to create this file and where to get the connection string (e.g., MongoDB Atlas or local instance).

3. Running the App
   Add steps to run the development server:
   npm install
   npm run dev

4. API Endpoints
   Briefly document the available API routes:

- GET /api/users – Fetch all users
- POST /api/users – Add a new user
- PUT /api/users/[userid] – Update user
- DELETE /api/users/[userid] – Delete user
