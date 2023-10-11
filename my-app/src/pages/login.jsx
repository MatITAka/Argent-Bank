import { NavLink } from "react-router-dom";

function Login () {
    return (

    <main className="main bg-dark">


      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>


        <h1>Sign In</h1>


        <form>


          <div className="input-wrapper">
            <label htmlFor="username"/>Username
          <input type="text" id="username" required/>
            
          </div>


          <div className="input-wrapper">
            <label htmlFor="password"/>Password
            <input type="password" id="password" required/>
          </div>


          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              />Remember me
          </div>


          
          <NavLink to="/logged" className="sign-in-button" required>Sign In</NavLink>
        </form>
      </section>
    </main>
    );
}

export default Login