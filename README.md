# 🗂️ Task Management Application

A simple **Task Management Web Application** built using **Angular**, supporting **Admin** and **User** roles.  
Admins can manage users and tasks, while users can create and track their own tasks.

---

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
