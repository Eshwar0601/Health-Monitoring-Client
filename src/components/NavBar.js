import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.svg";

const NavBar = () => {
    return (
        <header id="header" className="header bg-dark">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between bg-dark">
                <div className="logo d-flex align-items-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="text-white">Smart </span>

                    <span className="text-white"> Health</span>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a
                                className="nav-link scrollto active text-white"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="nav-link scrollto text-white"
                                href="#about"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                className="nav-link scrollto text-white"
                                href="#team"
                            >
                                Team
                            </a>
                        </li>

                        <li>
                            <Button className="getstarted scrollto">
                                Login
                            </Button>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
