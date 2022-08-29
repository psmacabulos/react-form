import React, { useState } from 'react'
import LoginForm from './component/LoginForm'
import './App.css'

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  /* DOCU: Create methods to call during login and logout */
  const Login = (details) => {
    console.log(details)

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email,
      })
      setError('')
    } else {
      setError('Details do not match')
    }
  }

  const Logout = () => {
    console.log('Logging out...')
    setUser({
      name: '',
      email: '',
    })
  }

  return (
    <div className='App'>
      {user.email != '' ? (
        <div className='welcome'>
          <h2>
            Welcome, <span>{user.name.toLocaleUpperCase()}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={Login} error={error} />
      )}
    </div>
  )
}

export default App
