
import Logo from '../assets/img/argentBankLogo.png'
import { NavLink } from "react-router-dom";


function Header(){

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
        <NavLink className="main-nav-item"  to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
);
}
export default Header