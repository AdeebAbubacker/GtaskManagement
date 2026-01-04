# 🗂️ Task Management Application

A simple **Task Management Web Application** built using **Angular**, supporting **Admin** and **User** roles.  
Admins can manage users and tasks, while users can create and track their own tasks.

---


## 🚀 Experience the Angular App

## 🎯 Live Angular Demo

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://adeebabubacker.github.io/GtaskManagement/login)
[![Open Demo](https://img.shields.io/badge/🌐_Open_Live_Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://adeebabubacker.github.io/GtaskManagement/login)

### 📋 Demo Credentials

<table align="left">
  <thead>
    <tr>
      <th align="left" style="padding: 12px; text-align: left; border-bottom: 2px solid #DD0031;">Role</th>
      <th align="left" style="padding: 12px; text-align: left; border-bottom: 2px solid #DD0031;">Username/Email</th>
      <th align="left" style="padding: 12px; text-align: left; border-bottom: 2px solid #DD0031;">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left" style="padding: 10px;">
        <img src="https://img.shields.io/badge/👤_User-4CAF50?style=flat-square" alt="User">
      </td>
      <td align="left" style="padding: 10px;">
        <code>users</code>
      </td>
      <td align="left" style="padding: 10px;">
        <code>user1234</code>
      </td>
    </tr>
    <tr>
      <td align="left" style="padding: 10px;">
        <img src="https://img.shields.io/badge/👤_User-4CAF50?style=flat-square" alt="User">
      </td>
      <td align="left" style="padding: 10px;">
        <code>suchitra655@gmail.com</code>
      </td>
      <td align="left" style="padding: 10px;">
        <code>Suchitra1234</code>
      </td>
    </tr>
    <tr>
      <td align="left" style="padding: 10px;">
        <img src="https://img.shields.io/badge/👑_Admin-FF5722?style=flat-square" alt="Admin">
      </td>
      <td align="left" style="padding: 10px;">
        <code>admins</code>
      </td>
      <td align="left" style="padding: 10px;">
        <code>admin1234</code>
      </td>
    </tr>
  </tbody>
</table>

## 🚀 Features

### 🔐 Authentication
- Role-based login (Admin / User)
- Static credential validation (demo purpose)

### 👨‍💼 Admin Features
- Admin dashboard
- Manage users
- Monitor tasks

### 👤 User Features
- User dashboard
- Create and manage tasks
- View assigned and created tasks

---

## 🖼️ Application Screenshots

### Admin Screens

<table>
  <tr>
    <td>
      <b>Admin Login</b><br/>
      <img src="https://raw.githubusercontent.com/AdeebAbubacker/GtaskManagement/refs/heads/main/src/assets/images/AdminLogin.png" width="420"/>
    </td>
    <td>
      <b>Admin Dashboard</b><br/>
      <img src="https://raw.githubusercontent.com/AdeebAbubacker/GtaskManagement/refs/heads/main/src/assets/images/AdminDashboard.png" width="420"/>
    </td>
  </tr>
</table>

---

### User Screens

<table>
  <tr>
    <td>
      <b>User Login</b><br/>
      <img src="https://raw.githubusercontent.com/AdeebAbubacker/GtaskManagement/refs/heads/main/src/assets/images/user_login.png" width="420"/>
    </td>
    <td>
      <b>User Dashboard</b><br/>
      <img src="https://raw.githubusercontent.com/AdeebAbubacker/GtaskManagement/refs/heads/main/src/assets/images/UserDashBoard.png" width="420"/>
    </td>
  </tr>
</table>

<br/>

<b>User Task Creation</b><br/>
<img src="https://raw.githubusercontent.com/AdeebAbubacker/GtaskManagement/refs/heads/main/src/assets/images/userTaskCreation.png" width="860"/>

---

## 🔑 Login Credentials

### Default Users

| Username | Password  | Role  | User ID   |
|--------|-----------|-------|-----------|
| admins | admin1234 | Admin | admin-001 |
| users | user1234  | User  | user-001  |

### Additional Users

| Email                   | Password        | Role | User ID   |
|-------------------------|-----------------|------|-----------|
| suchitra655@gmail.com   | Suchitra1234    | User | user-002  |
| lakshmi475@gmail.com    | Lakshmi1234     | User | user-003  |
| abhilashSb@gmail.com    | Abjilash1234    | User | user-004  |

---

## ⚙️ How to Run the Project

### Prerequisites
- Node.js (v16 or above)
- Angular CLI

Install Angular CLI if needed:
```bash
npm install -g @angular/cli

git clone https://github.com/AdeebAbubacker/GtaskManagement

cd GtaskManagement

npm install

ng serve --open
