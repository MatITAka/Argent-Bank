import React from 'react';
import Logo from '../assets/img/argentBankLogo.png';
import { NavLink } from "react-router-dom";
import { logout } from '../reducers/user.connection';
import { useDispatch, useSelector } from 'react-redux';



function Header(){


 const dispatch = useDispatch();

 const isLoggedIn = useSelector((state)=> state.usersReducer.isLoggedIn);
 let userName = useSelector((state)=> state.usersReducer.currentUser.userName);

  return(

    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/home">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
     
     
     
      <div>
      { isLoggedIn ? ( 
         <NavLink className="main-nav-item"  to="/">
         <i className="fa fa-user-circle"></i>
         <span> {userName}</span>
         
         <span onClick={() => dispatch(logout()) }> Sign Out</span>
         
         </NavLink>
     )
     
     :(
      <NavLink className="main-nav-item"  to="/login">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </NavLink>
     )
    }
    </div>



    </nav>
  );
}
export default Header