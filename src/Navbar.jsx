import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = ()=>{
    return (
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/user/436"}>user</NavLink>
        </>
    )
}

export default Navbar