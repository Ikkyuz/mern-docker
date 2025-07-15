import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data') // Vite proxy จะเปลี่ยน path นี้เป็น http://localhost:5000/api/data
      .then(res => res.json())
      .then(info => setData(info))
      .catch(err => console.error("Failed to fetch data", err));
  }, [])

  return (
    <>
      <div>
        <h1>MERN Docker on Windows</h1>
        <div>
          <p>Data from backend:</p>
          <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
        </div>
      </div>
    </>
  )
}

export default App
