import logo from "../utils/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () =>{
    const [btnName, setBtnName] = useState("Login")

    return(
        <>
        <div className="header">
            
            <div className="logo"><img src={logo} />
            </div>
          
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className="header-btn" onClick={()=> btnName=="Login"? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button></li>
                </ul>
            </div> 
        
        </div>
        </>
    )
}

export default Header;