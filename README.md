# 📚 Library Management System

A full-featured Library Management System built using **Flask (Python)** and **MongoDB**.

This web application allows users to register, login, search books, read books in multiple formats, and enables an admin to manage books and users efficiently.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- Strong Password Validation
- Forgot & Reset Password
- Search Books by Title, Author, and Category
- Read Books Online (PDF, DOCX, EPUB, TXT)
- View Profile
- Logout Functionality

### 👨‍💼 Admin Features
- Admin Dashboard
- Only One Admin Account Allowed
- Upload Books (File + Image)
- Edit Books
- Delete Books
- Manage Users
- View Total Books & Users (API)

---

## 📂 Supported File Formats

- PDF
- DOCX (Converted to HTML)
- EPUB (Converted to HTML)
- TXT
- JPG / PNG (Book Images)

---

## 🛠️ Technologies Used

- **Backend:** Python, Flask
- **Database:** MongoDB (Flask-PyMongo)
- **Frontend:** HTML, CSS, JavaScript
- **Authentication:** Session-Based Authentication
- **Libraries Used:**
  - python-docx
  - ebooklib
  - BeautifulSoup
  - lxml
  - Werkzeug

---

## 📁 Project Structure

```
library-management/
│
├── __pycache__/
├── static/
│   ├── uploads/
│   ├── images/
│   ├── html/
│   └── profile_images/
│
├── templates/
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   ├── admin_dashboard.html
│   ├── user_dashboard.html
│   ├── upload_book.html
│   ├── manage_book.html
│   └── ...
│
├── app.py
├── user-dashboard.html
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/library-management.git
cd library-management
```

---

### 2️⃣ Create Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate Virtual Environment:

**Windows**
```
venv\Scripts\activate
```

**Mac/Linux**
```
source venv/bin/activate
```

---

### 3️⃣ Install Required Dependencies

```bash
pip install -r requirements.txt
```

If requirements.txt is not available:

```bash
pip install flask flask-pymongo python-docx ebooklib beautifulsoup4 lxml werkzeug
```

---

## 🗄️ MongoDB Configuration

Default MongoDB connection used in this project:

```
mongodb://localhost:27017/online_library
```

Make sure MongoDB is installed and running before starting the application.

---

## ▶️ Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000/
```

---

## 📡 API Endpoints

| Endpoint | Description |
|----------|------------|
| /api/total_books | Returns total books count |
| /api/total_users | Returns total users count |
| /api/delete_user/<id> | Delete user (Admin only) |
| /delete_book_admin/<id> | Delete book (Admin only) |

---

## 🔐 Security Features

- Strong Password Validation
- Session-Based Authentication
- Admin Role Restriction
- Secure File Upload Handling
- 20MB File Upload Limit

---

## ⚠️ Important Notes

- Only one admin account is allowed.
- Password hashing is applied during password reset.
- For production, password hashing should also be implemented during registration.
- MongoDB must be running locally.

---

## 📌 Future Enhancements

- Implement password hashing during registration
- Email verification system
- Book borrowing & return system
- Due date and fine calculation
- UI/UX improvements
- Deploy to cloud (Render / AWS / Heroku)

---

## 👩‍💻 Author

Teja Sri Jujuri

---

⭐ This project was developed for educational and learning purposes.