import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () =>(
<nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
        <li>
      <NavLink to="/Signup">Cadastro</NavLink>
    </li>
    <li>
      <NavLink to="/">Lista</NavLink>
    </li>
  </ul>
</nav>

)
export default Navbar