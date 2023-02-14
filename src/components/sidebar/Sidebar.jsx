import ProfilePic from "../../assets/profile.jpg";
import "./sidebar.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoSettingsOutline } from 'react-icons/io5'
import { BiBookBookmark, BiCalendarX, BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const { pathname } = useLocation()
  
  useEffect(() => {
    if(pathname !== '/'){
      setActive(false)
    }
  },[pathname])
  return (
    <nav>
      <div className="sidebar-container">
        <div className="profile-section">
          <img src={ProfilePic} alt="profilepic_dynamic" />

          <div className="profile-text">
            <p className="do-it">Hello!</p>
            <p className="name">Wildan Nur Rahman</p>
          </div>
        </div>

        <div className="menu-section">
          <div className="container-menu-section">
            <ul className='sidebar-container-active'>

                <NavLink exact to="/" onClick={() => setActive(!active)}>
                 <BiBookBookmark color="#fd99af" size={24} className="icon" /> Today Tasks
                  </NavLink>
                    <ul className={active? 'show-submenu' : 'hide-submenu'}>
                      <Link to="/mytodolist" className="freelance">Freelance</Link>
                      <Link to="/mytodolist" className="personal">Personal</Link>
                      <Link to="/mytodolist" className="work">Work</Link>
                    </ul>
 
        
                <NavLink exact to="/scheduled">
                  <BiCalendarX color="#3fd4f4" size={24} className="icon" /> Scheduled Task
                </NavLink>
        
      
                <NavLink exact to="/settings">
                  <IoSettingsOutline size={24} color="#fac608" className="icon" /> Settings
                </NavLink>
            </ul>
          </div>
        </div>

        <div className="logout-section">
          <p>
             <BiLogOut size={24} style={{verticalAlign:"middle"}} className="logout-icon" /> Logout
            </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
