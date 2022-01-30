import React from "react";
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

const LoginComponent = () => {
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
                                            name="email"
                                            placeholder="Email"
                                            type="email"
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
                                            type="password"
                                        />
                                    </FormGroup>{" "}
                                    <Input
                                        className="btn btn-primary btn-block btn-get-started text-white"
                                        type="submit"
                                        value="Login"
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
