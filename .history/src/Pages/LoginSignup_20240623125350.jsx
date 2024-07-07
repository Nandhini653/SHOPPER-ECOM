import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <h1>Sign Up</h1>

      <div className="loginsignup-fields">
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Email Address'/>
        <input type='password' placeholder='Password'/>
      </div>
      <button>Continue</button>
      <p className='loginsin'></p>
    </div>
  )
}

export default LoginSignup
