# NodeJS เวอร์ชั่น 18 หรือ LTS ที่เป็น Alpine (ขนาดเล็ก)
FROM node:lts-alpine

# กำหนด working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# Copy โค้ดทั้งหมด
COPY . .

# บอกให้ Docker รู้ว่าจะใช้ port 5173
EXPOSE 5173

# คำสั่งสำหรับรัน Development Server ของ Vite
CMD ["npm", "run", "dev"]