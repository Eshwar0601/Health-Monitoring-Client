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
import login from "../login.svg";
import avatar from "../avatar.svg";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: password,
        };
        const loginInfo = await axios
            .post(`http://127.0.0.1:8080/api/user/login/`, loginData)
            .then((res) => res)
            .catch((err) => err);

        if (loginInfo.status === 200) {
            message.success("Login Successful");
            navigate("/dashboard");
        }
        if (loginInfo.response.status === 400) {
            message.error(loginInfo.response.data["error"]);
        }
    };
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="mt-5 pt-5">
                        <Card>
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
                    <Col lg={8} md={6} sm={12} className="d-none d-md-block">
                        <img
                            src={login}
                            className="img img-fluid d-block"
                            alt="login"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginComponent;
