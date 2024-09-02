import React, { useState } from 'react'
import './Signin.css';
import { FaUserCircle } from "react-icons/fa";

function Signin() {
    const [islogin,setislogin]=useState(false);

    const isloggedin=()=>{
        setislogin(true);
    };
    const isloggedout=()=>{
        setislogin(false);
    };
   
  return (
    <div className="form1">
    <div className='mainform'>
        <div className='formbtn'>
        <button id='logbtn1' type='login' onClick={isloggedout}>Signup</button>
       
        <button  id='signbtn1' type='login' onClick={isloggedin}>Login</button>
        </div>
        
        {islogin ?(
            <div className='form'>
                <form>
                    <label><input id='input' type='email' placeholder='email'/></label><br></br>
                    <label><input id='input' type='password' placeholder='password'/></label><br></br>
                </form>
                <button id="loginbtn"type='submit' >login</button>
            </div>
        ):(
            <div className='form'>
            <form>
            <label><input type='text' id='input' placeholder='username'/></label><br></br>
                <label><input type='email' id='input' placeholder='email'/></label><br></br>
                <label><input type='password' id='input' placeholder='password'/></label><br></br>
                <h1 style={{color:"white", fontFamily:"cursive"}}>Welcome</h1>
                <h3>
                    Don't you have account?
                </h3>
                <button id='signinbtn'  type='submit' >signup</button>
            </form>
            
            
           
        </div>
        )}
    </div>
   </div>
  )
}

export default Signin;