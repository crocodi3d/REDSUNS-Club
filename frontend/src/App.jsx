import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [message, setMessage] = useState('Loading data...')
  const [memberName, setMemberName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/add-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberName: memberName})
      });

      const data = await response.json();
      setStatus(data.message);
      setMemberName('');
    }catch(error){
      console.error('Error:', error);
      setStatus('ส่งข้อมูลไม่สำเร็จ');
    }
  };

  return(
    <div>
      <h1>Add new member</h1>

      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={memberName}
        placeholder='กรุณากรอกชื่อสมาชิก'
        onChange={(e) => setMemberName(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type='submit' style={{ padding: '10px 20px' }}>send</button>
      </form>

      {status && <p style={{ color: 'green', marginTop: '20px' }}>{status}</p>}
    </div>
  )

  // const fetchApiData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api')
  //     const data = await response.json()
  //     setMessage(data.message)
  //   }catch(err){
  //     console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error)
  //     setMessage('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้')
  //   }
  // }

  // useEffect(() => {
  //   fetchApiData()
  // }, [])

  // return (
  //   <div style={{
  //     backgroundColor: '#b66a53', 
  //     height: '100vh', 
  //     display: 'flex', 
  //     justifyContent: 'center', 
  //     alignItems: 'center',
  //     flexDirection: 'column',
  //     fontFamily: 'Arial, sans-serif'
  //   }}>
  //     <h1 style={{ color: '#110101' }}>Welcome to REDSUNS MC Community</h1>
  //     <p>connecting status: <strong> { message }</strong></p>
  //   </div>
  // )
}

export default App
