import React from "react";
import './login.css'

const Login=()=>{

    return(
        <div className="loginsignup">
            <div className="box">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Continuing, I agree to the Terms and Privacy.</p>
                </div>
                <button>Continue</button>
                <p className="login-signup">Already have an Account ?<span>Login here</span></p>
                
            </div>
        </div>
    )
};

export default Login;