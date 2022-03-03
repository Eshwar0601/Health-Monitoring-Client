import React, { useState } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    CardHeader,
} from "reactstrap";
import logo from "../logo.svg";
import NavBar from "./NavBar";
import avatar from "../avatar.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            name: name,
            email: email,
            password: password,
        };
        const registerInfo = await axios
            .post(`http://127.0.0.1:8080/api/user/register/`, registerData)
            .then((res) => res)
            .catch((err) => err);

        if (registerInfo.status === 200) {
            message.success("Registration Successful");
            navigate("/login");
        }
        if (registerInfo.response.status === 400) {
            message.error(registerInfo.response.data["error"]);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <Row>
                    <Col>
                        <Card className="col-md-6 mx-auto mt-5">
                            <CardHeader className="card-primary">
                                <img
                                    src={avatar}
                                    className="img img-fluid img-avatar mt-4 mb-4"
                                    alt="login"
                                />
                            </CardHeader>
                            <CardBody>
                                <Form inline>
                                    <FormGroup>
                                        <Label for="name" hidden>
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            value={name}
                                            name="name"
                                            placeholder="User Name"
                                            type="text"
                                            required
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </FormGroup>{" "}
                                    <FormGroup>
                                        <Label for="exampleEmail" hidden>
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            value={email}
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            required
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </FormGroup>{" "}
                                    <FormGroup>
                                        <Label for="examplePassword" hidden>
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            type="password"
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </FormGroup>{" "}
                                    <Input
                                        className="btn btn-primary btn-block btn-get-started text-white"
                                        type="submit"
                                        value="Login"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Input>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <p className="text-center text-white">
                        Already Have an account ? <Link to="/login">Login</Link>
                    </p>
                </Row>
            </div>
        </div>
    );
};

export default RegisterComponent;
