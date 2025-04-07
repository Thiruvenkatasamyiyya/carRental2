import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { use, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {useAuthState} from 'react-firebase-hooks/auth'

function Navbar() {
  const [nav, setNav] = useState(false);
  const[active,setActive] =useState(null)
  const [ userId, setUserId]= useState(null)

  const openNav = () => {
    setNav(!nav);
  };

  const fetchUser =async ()=>{
    await onAuthStateChanged(auth ,(user)=>{
      if(user){
        const userid = user.uid
        setActive(true)
        setUserId(userid)
        console.log(userId);
      }
      else{
        setActive(false)
      }
    })
  }
  fetchUser()
  const [user] =useAuthState(auth)
  const logOut = async()=>{
    try {
      await signOut(auth)
      setActive(false)
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">

          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {!active? <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/signin">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div> : <div className="navbar__buttons"> 
          <Link className="navbar__buttons__register" onClick={logOut}>
              Logout
            </Link>
          </div>}
          

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
