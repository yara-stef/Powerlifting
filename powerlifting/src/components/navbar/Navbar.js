import React from 'react';
import "./Navbar.css";
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import Button from '../UI/button/Button';
import '../UI/button/Button.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

 
  return (
    <nav className='container navbar'>
      <div className='logo'>
        <a className='logo-name' href="#">Ivan Korol</a>
        <p className='logo-text'>Personal Powerlifting and Fitness Trainer</p>
      </div>
      <menu className='navigation'>
        <nav className='container contacts'>
          <div className='contacts-inner' id={showMenu ? "contacts-inner-mobile" : "contacts-inner-mobile-hide"}>
            <div className='contacts nav-link'>Open 9 am - 8 pm</div>
            <a href="tel:+380631580672" className='nav-link tel'>+38 063 15 80 672</a>
            <a href="mailto:korolmsmk@gmail.com" className='nav-link mail'>korolmsmk@gmail.com</a>
          </div>
        </nav>
        <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Programs</a></li>
          <li><a href='#'>Courses</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Results</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contacts</a></li>
          {/*<li className='nav-btn'><a href='#' className='btn'>CALL ME</a></li>*/}
          <li className='nav-btn'>
            <Button text={"CALL ME"} btnClass={"btn"} href={"#Contacts"}/>
          </li>
        </ul>
      </menu>
      <div className='menu-icons' onClick={toggleMenu}>
        {
          showMenu ? ( <RiCloseLine color='black' size={30}/> ) : ( <AiOutlineBars color='black' size={27}/>
        )}
      </div>
    </nav>
  )
}

export default Navbar