import React from 'react'
import './style.css';

function Header() {
    return (
        <header>
            <div className="container">
                <h2 className="logo">Logo</h2>
                <div className="items">
                    <a href="#" className="home">home</a>
                    <a href="#" className="about_us">about us</a>
                    <a href="#" className="contacts">contacts</a>
                </div>
            </div>
        </header>
    )
}


export default Header