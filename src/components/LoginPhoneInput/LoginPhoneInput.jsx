import React from 'react'

const LoginPhoneInput = () => {
  return (
      <form className='login-input-form'>
          <div className='login-input-wrapper'>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" />
          </div>

          <div className='login-input-wrapper'>
              <label htmlFor="phone">Enter password</label>
              <input type="password" placeholder='Enter password' />
          </div>

          <div className='forgot-pword'>Forgot password?</div>

          <button>Login</button>
      </form>
  )
}

export default LoginPhoneInput