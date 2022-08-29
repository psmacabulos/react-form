import React, { useState } from 'react'

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(details)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit} className='login-form'>
      <div className='form-inner'>
        <h2>Login</h2>
        {error !== '' && <div className="error">{error}</div> }
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <input type='submit' value='LOGIN' />
      </div>
    </form>
  )
}

export default LoginForm
