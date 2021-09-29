import axios from 'axios';
import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import Header from '../common/Header';

const Login = () => {
    const [initialValue,setInitalvalue]=useState({
        email:"",
        password:""
    })
    const history=useHistory()
    const handleChange=(e)=>{
        setInitalvalue({
            ...initialValue,
            [e.target.name]: e.target.value,
          });
        };  
        const onSubmit=async(e)=>{
            e.preventDefault();
           try {
               let res={}
               res=await axios.post('/auth/login',initialValue)
               console.log(res);
               localStorage.setItem('token',res.data.token)
               history.push('/todoList')
           } catch (error) {
               console.log(error);
           }
         }
    return (
        <>
        <Header />
        <form onSubmit={onSubmit}> 
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" onChange={handleChange} value={initialValue.email} name='email' placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={handleChange}  value={initialValue.password}  name='password' placeholder="Enter password" />
        </div>
<br />

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            For Signup <Link to="/sign-up">Click here!</Link>
        </p>
    </form>
    </>
    )
}

export default Login
