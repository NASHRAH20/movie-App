import React from "react";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import {Navbar} from 'react-bootstrap';


function Header() {
    return(
        <>
          <Navbar className="NB navbar fixed-top bg-white shadow" bg="light" data-bs-theme="light">
            <h2 className="header">MOVIES APP</h2>
          </Navbar>

        </>
    )
    
}

export default Header