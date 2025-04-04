# 🚀 User Profile Management API

A **RESTful API** for user profile management with authentication, built using **Node.js, Express.js, and MongoDB**. This API allows users to **register, log in, retrieve, and update their profiles** securely.

## 📌 Features
✅ User Registration & Authentication (JWT)  
✅ Profile Management (Retrieve & Update)  
✅ Secure API (Password Hashing, JWT Protection)  
✅ Input Validation & Error Handling  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT (JSON Web Tokens)  
- **Security:** bcrypt.js for password hashing  

---

## 🔧 Setup Instructions

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/user-profile-api.git
cd user-profile-api
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Create a `.env` File**
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=mongodb://127.0.0.1:27017/User_Register
JWT_SECRET=your-secret-key
PORT=5000
```

### 4️⃣ **Start the Server**
```sh
npm start
```
The server will run at **http://localhost:5000**

---

## 🔄 API Endpoints

### 1️⃣ **User Registration**
**POST** `/api/auth/register`  
Registers a new user.  
#### 🔹 Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "address": "123 Street, NY",
  "password": "securepassword"
}
```
#### 🔹 Response:
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "64b0e...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

### 2️⃣ **User Login**
**POST** `/api/auth/login`  
Logs in the user and returns a **JWT token**.  
#### 🔹 Request Body:
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
#### 🔹 Response:
```json
{
  "token": "eyJhbGciOiJI...",
  "user": {
    "_id": "64b0e...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

### 3️⃣ **Get User Profile (Protected)**
**GET** `/api/users/profile/:id`  
Requires **Authorization: Bearer <JWT_TOKEN>**  
Retrieves the authenticated user’s profile.  

---

### 4️⃣ **Update Profile (Protected)**
**PUT** `/api/users/profile/:id`  
Requires **Authorization: Bearer <JWT_TOKEN>**  
Updates the authenticated user’s profile.  
#### 🔹 Request Body:
```json
{
  "name": "John Updated",
  "bio": "Full Stack Developer"
}
```
#### 🔹 Response:
```json
{
  "message": "Profile updated successfully",
  "user": {
    "_id": "64b0e...",
    "name": "John Updated",
    "bio": "Full Stack Developer"
  }
}
```

---

## 🔐 Security & Validation
✔️ **Password Hashing** using bcrypt.js  
✔️ **JWT Authentication** for secure access  
✔️ **Input Validation** using express-validator  
✔️ **Error Handling** for standardized API responses  

---

## 📜 Submission Checklist
✅ Push code to GitHub  
✅ Include **README.md** with setup instructions  
✅ Attach **Postman Collection** for API testing  
✅ Provide **sample `.env` file**  

---

## 📂 Project Structure
```
/user-profile-api
│── /config
│   ├── db.js  (MongoDB connection)
│── /controllers
│   ├── authController.js
│   ├── userController.js
│── /middlewares
│   ├── authMiddleware.js
│── /models
│   ├── User.js
│── /routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│── .env
│── server.js
│── package.json
│── README.md
```

---

## 📌 Postman Collection
📎 **Exported Postman Collection:** Upload the `.json` file for easy API testing.

---

This README provides everything needed to understand, set up, and use the **User Profile Management API**. 🚀  
Would you like me to generate the **Postman Collection JSON file** for you? 😊

