import React from 'react'
import './css/loginsignup.css'

function LoginSignUp() {//login page fro user
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1 className="signup">
                Signup
            </h1>

            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name' />
                <input type='text' placeholder='Email Addres'/>
                <input type='password' placeholder='Password'/>
                

            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
                Already Have an account?<span>Login here</span>

            </p>

            <div className="loginsingup-agree">
                <input type="checkbox" name='' id='' />
                <p>I Agree to Privacy Policy</p>

            </div>
        </div>

    </div>
  )
}

export default LoginSignUp