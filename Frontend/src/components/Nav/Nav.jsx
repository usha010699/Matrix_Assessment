import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Matrix-logo-1.png'
import '../Nav/Nav.css'
function Nav() {
    return (
            <div className="navbar">
                <img src={image} id="logo" alt="Matrix Logo" />

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/framework">Framework</Link>
                    <Link to="/testimonials">Testimonials</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        
    )
}

export default Nav