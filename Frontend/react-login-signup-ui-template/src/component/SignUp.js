import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Header from '../common/Header';
import axios from 'axios'
const SignUp = () => {
    const [initialValue,setInitalvalue]=useState({
        userName:"",
        email:"",
        password:"",
        number:""
    })
    const history=useHistory();
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
                res=await axios.post('/auth/signup',initialValue)
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
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Username :</label>
            <input type="text" className="form-control" name="userName" placeholder="Username" onChange={handleChange}/>
        </div>

        <div className="form-group">
            <label>Email :</label>
            <input type="email" className="form-control" name='email' placeholder="email" onChange={handleChange}/>
        </div>

        <div className="form-group">
            <label>Password :</label>
            <input type="password" className="form-control" name='password' placeholder="password" onChange={handleChange}/>
        </div>

        <div className="form-group">
            <label>Number :</label>
            <input type="text" className="form-control" onChange={handleChange} name='number' placeholder="number" />
        </div>
<br />
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
        </p>
    </form>
    </>
    )
}

export default SignUp
