import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.svg";
import hero from "../hero.svg";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

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
            <NavBar />
            <section id="hero" className="hero d-flex align-items-center mt-0">
                <div className="container mt-0">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up" className="text-white">
                                Your Health in your Hands
                            </h1>
                            <h2
                                data-aos="fade-up"
                                className="text-white"
                                data-aos-delay="400"
                            >
                                Get Started Here.
                            </h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div>
                                    <Button
                                        className="btn btn-get-started me-3 p-4"
                                        onClick={goToRegister}
                                    >
                                        Register
                                    </Button>

                                    <Button
                                        className="btn btn-get-started ms-2 p-4"
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
