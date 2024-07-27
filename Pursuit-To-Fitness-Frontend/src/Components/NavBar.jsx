import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css'; // Ensure you create and link this CSS file

const NavBar = ({setBodyPart}) => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/workouts/new">New Workout</Link>
          </li>
          <li onClick={()=> setBodyPart("")}>
            All Workouts
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
