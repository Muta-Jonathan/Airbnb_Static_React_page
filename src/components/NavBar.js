import React from "react";
import airbnb from '../images/airbnb.png'

export default function NavBar(){
    return(
        <nav className="logo-img-section">
        <img src={airbnb} alt="airbnb" id="logo" />
        </nav>
    )
    
}
