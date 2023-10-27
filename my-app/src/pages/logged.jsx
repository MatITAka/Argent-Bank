import { userAccount } from "../data/userAccount";
import  BankAccountFeature from "../components/bankUserFeatures";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Logged (){

  let users = useSelector((state)=> state.usersReducer.currentUser);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);



return(

    <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br /> {users.firstName} {users.lastName} !</h1>
      <button className="edit-button">Edit Name</button>
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