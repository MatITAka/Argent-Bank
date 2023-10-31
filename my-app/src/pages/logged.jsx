import { userAccount } from "../data/userAccount";
import  BankAccountFeature from "../components/bankUserFeatures";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, setUser } from "../reducers/user.connection";
import { useState } from "react";
import Modal from "../components/modal";





function Logged (){

  let users = useSelector((state)=> state.usersReducer.currentUser);
  let isLoggedIn = useSelector((state)=> state.usersReducer.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }

    else {
      dispatch(getUser());
    }
  }, [navigate,dispatch,isLoggedIn]);



return(

    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br /> {users.firstName} {users.lastName} !</h1>
      <Modal />
    </div>
    <h2 className="sr-only">Accounts</h2>
          {
          userAccount.map((element,i) => 
            <BankAccountFeature key={i} user = {element} />
          )
          }
  </main>
)}


export default Logged