import React, { useState} from 'react';
import { useDispatch} from "react-redux";
import { fetchUser } from "../reducers/user.connection";
import { useNavigate } from "react-router-dom";

function Login () {
    
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const dispatch = useDispatch ();
  const navigate = useNavigate();

  const connect = () => {
    if (email=== '' || password === '') { return}

    dispatch(fetchUser({email , password }))
    .then ((response)=> {
      console.log(response.payload.token)
      navigate("/logged");
    })

    .catch((error)=> {
    
    })

  }
  return (
  <main className="main bg-dark">


      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>


        <h1>Sign In</h1>


        <form>


          <div className="input-wrapper">
            <label htmlFor="username"/>Username
          <input type="text" id="username" required onChange={(e)=> setEmail(e.target.value)}/>
            
          </div>


          <div className="input-wrapper">
            <label htmlFor="password"/>Password
            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>


          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              />Remember me
          </div>
          
          <button type='button' onClick= {()=> connect()} className="sign-in-button">Sign In</button>

        </form>
      </section>
    </main>
    );
}

export default Login