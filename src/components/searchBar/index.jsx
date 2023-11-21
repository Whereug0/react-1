import React from "react";
import './style.css'

function SearchBar() {
    return (
        <div className="inputBox">
            <input className="input" type="text" placeholder="enter name" />
            <button className="btn">ok</button>
        </div>
    )
}

export default SearchBar