import React from "react";
import { useState } from "react";
import './login.css'

const Login=()=>{

    const [state, setstate] = useState("Login");
    const [formdata,setformdata] = useState({

        username:"",
        password:"",
        email:""
    });

    const changeHandler =(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const login = async ()=>{
        console.log(formdata);
        let responsedata;
        await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })
        .then((response) => response.json())
        .then((data) => responsedata = data);
    
        if (responsedata.success) {
            localStorage.setItem('auth-token', responsedata.token);
            window.location.replace('/');
        }
        else{
            alert(responsedata.errors);
        }
    };

    
    const signup = async () => {
        let responsedata;
        await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })
        .then((response) => response.json())
        .then((data) => responsedata = data);
    
        if (responsedata.success) {
            localStorage.setItem('auth-token', responsedata.token);
            window.location.replace('/');
        }
        else{
            alert(responsedata.errors);
        }
    };
    

    return(
        <div className="loginsignup">
            <div className="box">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input  name="username" value={formdata.username} onChange={changeHandler} type="text" placeholder="Your Name"/>:<></>}
                    <input  name="email" value={formdata.email} onChange={changeHandler} type="email" placeholder="Email"/>
                    <input  name="password" value={formdata.password} onChange={changeHandler} type="password" placeholder="Password"/>
                </div>
                {state==="Sign Up"?<div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Continuing, I agree to the Terms and Privacy.</p>
                </div>:<></>}
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"?<p className="login-signup">Already have an Account ?<span onClick={()=>setstate("Login")}>Login here</span></p>:<></>}
                {state==="Login"?<p className="login-signup">Create an Account?<span onClick={()=>setstate("Sign Up")}>Sign Up</span></p>:<></>}
                
            </div>
        </div>
    )
};

export default Login;