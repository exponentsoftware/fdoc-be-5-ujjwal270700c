import React, { useState,useEffect } from 'react'
import { useHistory,Link} from "react-router-dom";
const Header = () => {
    const [isLogin,setisLogin]=useState(false)
    const history=useHistory();
    const logOut=(e)=>{
        e.preventDefault()
      localStorage.clear();
      history.push('/sign-in')
    }
    useEffect(() => {
        if(localStorage.token !== undefined){
            setisLogin(true)
        }else{
            setisLogin(false)
        }
    },[localStorage.token])
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {isLogin ? (<>
             
              <li className="nav-item">
                <Link className="nav-link" to={"/todoList"}>Todo List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{marginLeft:'1010px'}} to='#'  onClick={logOut}>{isLogin}Log Out</Link>
              </li>
              </>):(<>
                <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/todoList"}>{isLogin}Todo List</Link>
              </li>
              </>)}
             
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header
