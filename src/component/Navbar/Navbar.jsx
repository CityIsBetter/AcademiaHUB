import React , { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <nav className='navbar'>
        <div className='logo'><a href='/home'>AcademiaHUB</a></div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'navbar_links open' : 'navbar_links close'}>
            <li ><NavLink to='/home' onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink></li>
            <li><NavLink to='/bunkManager' onClick={() => setMenuOpen(!menuOpen)}>Bunk Manager</NavLink></li>
            {/* <li><NavLink href='/timetable'>TimeTable</NavLink></li> */}
            <li><NavLink to='/reminders' onClick={() => setMenuOpen(!menuOpen)}>Reminders</NavLink></li>
            <li><NavLink to='/cgpa' onClick={() => setMenuOpen(!menuOpen)}>CGPA calculator</NavLink></li>
        </ul>
        <div className={menuOpen ? 'logout open' : 'logout close'}><a onClick={logout}>Logout</a></div>
    </nav>
  )
}

export default Navbar