# Mini CRM System - Server

A robust RESTful API built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **MySQL**. This backend powers the Mini CRM System by providing secure authentication, role-based authorization, and APIs for managing customers, leads, and tasks.

---

# 🚀 Live API

**Server URL**

```
https://mini-crm-systemserver.vercel.app
```

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes

---

## Authorization

- Role-Based Access Control (RBAC)
- Admin Permissions
- Staff Permissions
- Secure Middleware

---

## Task Management

- Create Task
- Get All Tasks
- Get Single Task
- Update Task
- Delete Task
- Assign Task to Staff
- View My Tasks

---

## Lead Management

- Create Lead
- View Leads
- Update Lead
- Delete Lead
- Assign Leads to Staff

---

## Customer Management

- Create Customer
- Get Customers
- Update Customer
- Delete Customer

---

## Database

- MySQL
- Prisma ORM
- Relations
- Foreign Keys
- Data Validation

---

## Validation

- Zod Validation
- Server-side Validation
- Request Validation
- Error Handling

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- MySQL
- JWT
- bcrypt
- Zod
- CORS
- dotenv

---

# 📁 Project Structure

```text
src
│
├── config
│   └── prisma.ts
│
├── controllers
│
├── middleware
│
├── routes
│
├── services
│
├── validations
│
├── types
│
├── utils
│
├── app.ts
│
└── server.ts
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/diponkorroy064-max/mini-crm-system_server
```

Go to the server directory

```bash
cd server
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

DATABASE_URL="mysql://root:diponkor26@localhost:3306/mini_crm_db"

JWT_SECRET=JWT_SECRET="mini_crm_secret_key"

JWT_EXPIRES_IN=7d
```

---

# 🗄 Prisma Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Server runs at

```
http://localhost:8000
```

---

# 🏗 Build Project

```bash
npm run build
```

---

# 🚀 Start Production

```bash
npm start
```

---

# 📜 Available Scripts

```bash
npm run dev
npm run build
npm start
npm run prisma:generate
npm run prisma:migrate
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | Get User Profile |

---

## Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Get All Tasks |
| GET | `/api/tasks/my` | Get Logged-in User Tasks |
| GET | `/api/tasks/:id` | Get Single Task |
| POST | `/api/tasks` | Create Task |
| PATCH | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |

---

## Customers

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/customers` | Get Customers |
| POST | `/api/customers` | Create Customer |
| PATCH | `/api/customers/:id` | Update Customer |
| DELETE | `/api/customers/:id` | Delete Customer |

---

## Leads

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/leads` | Get Leads |
| POST | `/api/leads` | Create Lead |
| PATCH | `/api/leads/:id` | Update Lead |
| DELETE | `/api/leads/:id` | Delete Lead |

---

# 🔒 Authentication

Protected routes require a JWT token.

Example header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 👥 User Roles

## Admin

- Manage Staff
- Manage Customers
- Manage Leads
- Create Tasks
- Assign Tasks
- Delete Tasks
- View All Tasks

## Staff

- View Assigned Tasks
- Update Task Status
- View Assigned Leads
- Manage Assigned Customers

---

# 🚀 Deployment

## Deploy to Vercel

Install Vercel CLI

```bash
npm install -g vercel
```

Deploy

```bash
vercel
```

Deploy to production

```bash
vercel --prod
```

### Important (Prisma)

Make sure your `package.json` includes:

```json
{
  "scripts": {
    "build": "prisma generate && tsc"
  }
}
```

This ensures Prisma Client is regenerated during every Vercel build.

---

# 📈 Future Improvements

- Dashboard Analytics
- Email Notifications
- File Uploads
- Activity Logs
- Refresh Tokens
- Password Reset
- Pagination
- Advanced Filtering
- Search
- Rate Limiting

---

# 👨‍💻 Author

**Diponkor Roy**

GitHub

```
https://github.com/diponkorroy064-max
```

Portfolio

```
https://portfolio-ashy-six-68.vercel.app
```

---
