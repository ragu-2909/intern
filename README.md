# 🚗 Tesla Website Clone

A full-stack MERN Tesla website clone featuring a sleek UI, product customization, user authentication, order management, and a robust backend API.

deployment Link = https://intern-1-2gyd.onrender.com

---

## 📖 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Planned Improvements](#planned-improvements)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Project Overview

This repository contains a Tesla website clone built with the MERN stack (MongoDB, Express.js, React, Node.js).  
The project features a full-screen hero landing page, interactive product configuration, user authentication, real-time price updates, and order management.  
The backend exposes a REST API for handling products, customization, and user orders.

---

## ✨ Features

### Frontend
- **Full-screen hero section** with background image.
- **Sticky, responsive navbar** for easy navigation.
- **Scrollable sections** for 2–3 products (cars, energy solutions, etc.).
- **Call-to-action buttons** (e.g., “Order Now”, “Learn More”).
- **Product details page** with:
  - Variant, Color, Wheels, Interior configuration
  - Real-time price updates based on selections
  - Order submission form
- **Order History:** View and customize previous orders.
- **Authentication:** Signup, login, and protected user actions.

### Backend
- **REST API** for products, customization, and orders.
- **Basic authentication system** (JWT-based).
- **Middleware** for user authentication.
- **MongoDB database** for persistent storage.
- **Endpoints:**  
  - `/products` — get all products  
  - `/customize` — save a customized product  
  - `/submitorder` — submit and save a user’s order  
  - `/login`, `/signup` — for authentication  
  - (User operations are tied to a unique `userid`.)

---


## 🧑‍💻 Tech Stack

- **Frontend:** React, JavaScript, Tailwnd CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Other:** RESTful API, dotenv, middleware

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ragu-2909/intern.git
cd intern
```

### 2. Setup Backend

```bash
cd backend
npm install
```

- Create a `.env` file in `/backend` with the following contents:

  ```
  PORT=5000
  JWT_SECRET=hi
  ```

- (You can update the MongoDB connection string in `/backend/config/mongodb.js`.)

- Start the backend server:

  ```bash
  npm run server
  ```

### 3. Setup Frontend

Open a new terminal, then:

```bash
cd ..
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

In `/backend/.env`:

- `PORT`: Port for backend server (e.g., 5000)
- `JWT_SECRET`: Secret key for JWT authentication


---

## 📂 Project Structure

```
intern/
├── backend/
│   ├── config/
│   │   └── mongodb.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

---

## 🛣️ API Endpoints

| Endpoint      | Method | Description                          |
|---------------|--------|--------------------------------------|
| `/products`   | GET    | Returns all products in database     |
| `/customize`  | POST   | Save customized product for user     |
| `/submitorder`| POST   | Submit and save user order           |
| `/login`      | POST   | User authentication (login)          |
| `/signup`     | POST   | User registration                    |
| `/products/:productId`     | GET   | Complete Information of Product                   |


- All user-specific operations are tied to a unique `userid` (created on signup).

---

## 🚧 Planned Improvements

- Loading page/spinner for better UX
- Improved alignments and responsive design
- Q/A (FAQ) section
- Product detailed description with detailed Features
- Payment gateway integration after "Order Now"

---



## 📬 Contact

- GitHub: [ragu-2909](https://github.com/ragu-2909)

---

> Feel free to contribute by submitting issues or pull requests!  
> For questions or suggestions, please reach out via GitHub.
