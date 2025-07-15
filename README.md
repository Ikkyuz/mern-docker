# 🐳 MERN Docker

โปรเจกต์ตัวอย่าง MERN Stack (MongoDB, Express, React, Node.js) ที่จัดการด้วย Docker Compose  
เพื่อให้สามารถแยก service ออกเป็น frontend, backend และ database พร้อมใช้งานได้ทันที

---

## 🧱 เทคโนโลยีที่ใช้

- **MongoDB** - ฐานข้อมูล NoSQL
- **Express.js** - RESTful API
- **React.js (Vite)** - Frontend SPA
- **Node.js** - JavaScript runtime
- **Docker & Docker Compose** - จัดการ container

---

## 📁 โครงสร้างโปรเจกต์

<pre>
mern-docker/
├── backend/              # Node + Express API
│   ├── src/              # Source code backend
│   ├── .env              # Environment variables
│   └── Dockerfile
│
├── frontend/             # React + Vite SPA
│   ├── src/              # Source code frontend
│   └── Dockerfile
│
├── docker-compose.yml    # รวมทุก service ไว้ในระบบเดียว
└── README.md             # เอกสารประกอบ
</pre>

---

## ⚙️ วิธีเริ่มต้นใช้งาน

### ✅ 1. ติดตั้ง Docker
หากยังไม่มี Docker ให้ติดตั้งจาก:  
🔗 [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

---

### ✅ 2. สร้าง `.env` ในโฟลเดอร์ `backend/`

สร้างไฟล์ชื่อ `.env` แล้วใส่ค่าดังนี้:

```env
PORT=5000
MONGO_URL=mongodb://mongo:27017/mern-db

### ✅ 3. เริ่มระบบทั้งหมด
docker-compose up --build