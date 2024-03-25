import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ({ children }) => {
    return (
        <div className='loot'>
            <div className="cont">
                <p className="app">React Task</p>
                <p >

                    <Link to="/" id="home">Element Transfer</Link>
                </p>
                <p>
                    <Link to="/nested" id="home1">Nested List</Link>
                </p>
                <p>
                    <Link to="/infinite" id="home2">Infinite Scroll</Link>
                </p>
                <p>
                    <Link to="/game" id="home2">Game</Link>
                </p>
            </div>


            <div className='main-content'>
                {children}
            </div>
        </div>

    )
}

export default Navbar