# NodeJS เวอร์ชั่น 18 หรือ LTS ที่เป็น Alpine (ขนาดเล็ก)
FROM node:lts-alpine

# กำหนด working directory ภายใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json ไปยัง working directory
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# Copy โค้ดทั้งหมดในโปรเจกต์เข้ามาใน container
COPY . .

# บอกให้ Docker รู้ว่าจะใช้ port 5000
EXPOSE 5000

# คําสั่งเริ่มต้นเมื่อ container เริ่มทำงาน
CMD ["npm", "run", "dev"]