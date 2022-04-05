import React from 'react'

const LoginEmailInput = () => {
  return (
    <form className='login-input-form' action="">
        <div className='login-input-wrapper'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Enter email address' />
        </div>

        <div className='login-input-wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password' />
        </div>

        <div className='forgot-pword'>Forgot password?</div>

        <button>Login</button>
    </form>
  )
}

export default LoginEmailInput