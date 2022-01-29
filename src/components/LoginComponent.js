import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.svg";

const LoginComponent = () => {
    return (
        <div>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center">
                        <img src={logo} className="App-logo" alt="logo" />
                        <span>Smart </span>

                        <span> Health</span>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <a
                                    className="nav-link scrollto active"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>

                            <li>
                                <a className="nav-link scrollto" href="#team">
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
            <div className="container">
                <div className="row">
                    <h1 className="display-5 text-center">Login</h1>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
