import React from "react";
import main_img from '../images/Group-img.png'

export default function Main(){
    return(
        <div className="main">
        <div className="main-img-section">
        <img id="main-img" src={main_img}/>
        </div>
        <div className="main-content">
        <h1 id="main-1">Online Experiences</h1>
        <h3 id="main-2">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
       
        </div>
    )
    
}
