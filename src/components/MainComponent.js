import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.svg";
import hero from "../hero.svg";

import { useNavigate } from "react-router-dom";

const MainComponent = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };
    const goToRegister = () => {
        navigate("/register");
    };
    return (
        <>
            <header id="header" className="header fixed-top">
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
                                    href="#hero"
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
            <section id="hero" class="hero d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">
                                Your Health in your Hands
                            </h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">
                                Get Started Here.
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div>
                                    <Button
                                        className="btn btn-get-started me-4"
                                        onClick={goToRegister}
                                    >
                                        Register
                                    </Button>

                                    <Button
                                        className="btn btn-get-started ms-4"
                                        onClick={goToLogin}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-6 hero-img"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={hero} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainComponent;
