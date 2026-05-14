# ☕ Cafeteria Management System

A web-based cafeteria management system developed to simplify and automate daily cafeteria operations including menu management, order processing, billing, and user management.

---

## 📌 Project Overview

The Cafeteria Management System is designed to reduce manual work and improve the efficiency of cafeteria operations through a centralized digital platform.

The system allows administrators and employees to manage food categories, process customer orders, generate bills, and maintain user records efficiently.

The application follows the MVC architecture using Ruby on Rails and provides secure role-based access for Admin and Employee users.

---

## ✨ Features

### 🔐 Authentication & Authorization

- Secure Login System
- Admin and Employee Roles
- Role-Based Access Control
- Session Management

### 🍽️ Menu Management

- Add Food Categories
- Update Categories
- Delete Categories
- Add Menu Items
- Modify Menu Items
- Remove Unavailable Items

### 🛒 Order Management

- Create Customer Orders
- Select Menu Items
- Automatic Price Calculation
- Store Order Details
- Manage Order Records

### 🧾 Billing System

- Automatic Bill Generation
- Download Bills as PDF
- Printable Invoice Format

### 👥 User Management

- Manage Employee Records
- View User Details
- Track User Activities

---

## 👨‍💼 User Roles

### Admin

Admin has complete access to the system.

#### Admin Functionalities

- Manage food categories
- Manage menu items
- View and manage orders
- Generate and download bills
- View employee details
- Access admin dashboard

---

### Employee

Employees have limited system access.

#### Employee Functionalities

- Login securely
- Place customer orders
- Generate bills
- Download PDF bills
- Access permitted sections only

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Backend | Ruby on Rails |
| Frontend | HTML, TailwindCSS |
| Interactivity | JavaScript, StimulusJS |
| Database | SQLite |
| Admin Dashboard | Avo |
| PDF Generation | Headless Chrome |
| Architecture | MVC Architecture |

---

## 🏗️ Architecture Used

The project follows the **MVC (Model View Controller)** architecture.

### Model
Handles database operations and business data.

### View
Handles frontend UI and user interaction.

### Controller
Processes requests and connects Models with Views.

---

## 🔄 System Workflow

1. User logs into the system
2. System displays menu categories and items
3. Employee/Admin places customer order
4. Total bill amount is calculated automatically
5. Bill is generated as PDF
6. Order and billing data are stored in the database

---

## 📂 Project Structure

```text
cafeteria-management-system/
│
├── app/
├── bin/
├── config/
├── db/
├── lib/
├── public/
├── test/
├── vendor/
├── Gemfile
├── package.json
├── Procfile.dev
├── tailwind.config.js
└── README.md
```

---

## 🚀 How to Run the Project

### 1️⃣ Install Ruby Gems

```bash
bundle install
```

### 2️⃣ Install Frontend Dependencies

```bash
npm install
```

### 3️⃣ Setup Database

```bash
rails db:create
rails db:migrate
```

### 4️⃣ Start the Rails Server

```bash
bin/dev
```

---

## 📊 Implemented Functionalities

- Role-Based Authentication
- Menu & Category Management
- Order Processing
- Billing & PDF Generation
- Employee Management
- Admin Dashboard
- MVC Architecture Integration

---
