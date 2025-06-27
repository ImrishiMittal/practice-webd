import { useState } from 'react'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <>
      <h1 className={styles.heading}>PASSWORD</h1>
      <div className={styles.pass}>
        <label htmlFor="password">PASSWORD</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="form-control"
          />
          <i
            className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            onClick={togglePassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: 'gray'
            }}
          ></i>
        </div>
      </div>
    </>
  )
}

export default App
