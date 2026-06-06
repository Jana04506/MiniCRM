# 🚀 Mini CRM - Lead Management System

A modern CRM (Customer Relationship Management) web application built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose.

## 📌 Features

### Authentication

* User Signup
* User Login
* Session Management using Local Storage

### Dashboard

* Total Leads
* New Leads
* Contacted Leads
* Converted Leads
* Conversion Rate
* Recent Leads Table
* Live Clock

### Lead Management

* Add New Lead
* View Leads
* Search Leads
* Filter Leads by Status
* Edit Lead
* Delete Lead

### Analytics

* Lead Status Analytics
* Lead Source Analytics
* Conversion Rate Tracking

### Settings

* User Profile
* Theme Preferences
* Account Management

### UI Features

* Modern Dark Theme
* Responsive Design
* Sidebar Navigation
* Glassmorphism Cards
* Interactive Tables
* Professional Dashboard Layout

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```text
MiniCRM/
│
├── client/
│   ├── index.html
│   ├── dashboard.html
│   ├── leads.html
│   ├── analytics.html
│   ├── settings.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── login.js
│       ├── dashboard.js
│       ├── leads.js
│       ├── analytics.js
│       └── settings.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/minicrm.git
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

### Frontend Setup

Open the client folder using VS Code Live Server.

---

## 🌐 API Endpoints

### Authentication

```http
POST /api/signup
POST /api/login
```

### Leads

```http
GET    /api/leads
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id
```

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Dashboard
* Leads Page
* Analytics Page
* Settings Page

---

## 🔮 Future Enhancements

* Follow-up Reminders
* Email Integration
* PDF Export
* Excel Export
* Activity Logs
* Multi-user Roles
* Notifications
* Advanced Analytics

---

## 👨‍💻 Author

Janarthanan S

Email: [24ucy115janartha@kgkite.ac.in](mailto:24ucy115janartha@kgkite.ac.in)

---

## 📜 License

This project is created for learning and educational purposes.
