import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import axios from "axios";
import * as tf from "@tensorflow/tfjs";

const HeartPrediction = () => {
    const [gender, setGender] = useState(1);
    const [age, setAge] = useState(0);
    const [currentSmoker, setCurrentSmoker] = useState(0);
    const [cigsPerDay, setCigsPerDay] = useState(0);
    const [bpMeds, setBpMeds] = useState(0);
    const [prevalentStroke, setPrevalentStroke] = useState(0);
    const [PrevalentHypertensive, setPrevalentHypertensive] = useState(0);
    const [diabetes, setDiabetes] = useState(0);
    const [bmi, setBmi] = useState("");
    const [info, setInfo] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [heartRate, setHeartRate] = useState("");
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [result, setResult] = useState("");
    const [resultClass, setResultClass] = useState("");

    useEffect(async () => {
        const hr = await axios
            .get(`http://127.0.0.1:8080/api/posts/`, {
                headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                },
            })
            .then((res) => res)
            .catch((err) => err);
        // console.log("hhrrrr");
        setHeartRate(hr.data["userData"][0].hr);
    }, []);

    useEffect(() => {
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
    }, [height, weight]);

    const predict = async () => {
        // e.preventDefault();
        const model = await tf.loadLayersModel(
            "https://raw.githubusercontent.com/HappySatan/model/main/chd%20model/model.json"
        );
        const inputData = [
            gender,
            age,
            currentSmoker,
            cigsPerDay,
            bpMeds,
            prevalentStroke,
            PrevalentHypertensive,
            diabetes,
            bmi,
            heartRate,
        ];
        const result = await model.predict(tf.tensor(inputData, [1, 10]));
        if (Number(result.dataSync()[0]) >= 0.1) {
            setResult(
                "You are under the risk of encountering Coronary heart disease in the next 10 years"
            );
            setResultClass("bg-danger text-white");
        } else {
            setResult(
                "You are not under the risk of encountering Coronary heart disease in the next 10 years"
            );
            setResultClass("bg-success text-white");
        }
        toggle();
        console.log("resssssssssult", result.dataSync()[0] <= 0.09);
    };

    return (
        <>
            <Card className="bg-dark mt-5 p-2">
                <CardHeader>
                    <h3 className="text-white text-center">
                        Coronary Heart Disease Predictions
                    </h3>
                </CardHeader>
            </Card>
            <p className="lead text-white mt-5 mb-0">
                Fill out the Form to make predictions
            </p>
            <Card className="bg-dark text-white">
                <CardBody>
                    <Form>
                        <FormGroup>
                            <div className="row">
                                <div className="col-4">
                                    <Label className="mx-5 mt-2" for="gender">
                                        Gender
                                    </Label>
                                </div>
                                <div className="col-3">
                                    <BootstrapSwitchButton
                                        checked={gender}
                                        onlabel="Male"
                                        offlabel="Female"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setGender(1)
                                                : setGender(0);
                                        }}
                                    />
                                </div>
                                <div className="col-2">
                                    <Label className="mx-5 mt-2" for="age">
                                        Age
                                    </Label>
                                </div>
                                <div className="col-2">
                                    <Input
                                        required
                                        type="number"
                                        name="age"
                                        className="form-control col-4 bg-dark text-white"
                                        onChange={(e) => setAge(e.target.value)}
                                        value={age}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <div className="row">
                                <div className="col-4">
                                    <Label
                                        className="mx-5 mt-2"
                                        for="currentSmoker"
                                    >
                                        Do you Currently Smoke ?
                                    </Label>
                                </div>
                                <div className="col-3">
                                    <BootstrapSwitchButton
                                        checked={currentSmoker}
                                        onlabel="Yes"
                                        offlabel="No"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setCurrentSmoker(1)
                                                : setCurrentSmoker(0);
                                        }}
                                    />
                                </div>
                                {currentSmoker === 1 && (
                                    <>
                                        <div className="col-2">
                                            <Label
                                                className="mx-5 mt-2"
                                                for="cigsPerDay"
                                            >
                                                cigarettes per day :
                                            </Label>
                                        </div>
                                        <div className="col-2">
                                            <Input
                                                required
                                                type="number"
                                                name="cigsPerDay"
                                                className="form-control col-4 bg-dark text-white"
                                                onChange={(e) =>
                                                    setCigsPerDay(
                                                        e.target.value
                                                    )
                                                }
                                                value={cigsPerDay}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <div className="row">
                                <div className="col-4">
                                    <Label
                                        className="mx-5 mt-2"
                                        for="currentSmoker"
                                    >
                                        BP Medication
                                    </Label>
                                </div>
                                <div className="col-3">
                                    <BootstrapSwitchButton
                                        checked={bpMeds}
                                        onlabel="Yes"
                                        offlabel="No"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setBpMeds(1)
                                                : setBpMeds(0);
                                        }}
                                    />
                                </div>
                                <div className="col-2">
                                    <Label
                                        className="mx-5 mt-2"
                                        for="currentSmoker"
                                    >
                                        Prevalent Stroke
                                    </Label>
                                </div>
                                <div className="col-2">
                                    <BootstrapSwitchButton
                                        checked={prevalentStroke}
                                        onlabel="Yes"
                                        offlabel="No"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setPrevalentStroke(1)
                                                : setPrevalentStroke(0);
                                        }}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <div className="row">
                                <div className="col-4">
                                    <Label
                                        className="mx-5 mt-2"
                                        for="currentSmoker"
                                    >
                                        Prevalent Hypertension
                                    </Label>
                                </div>
                                <div className="col-3">
                                    <BootstrapSwitchButton
                                        checked={PrevalentHypertensive}
                                        onlabel="Yes"
                                        offlabel="No"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setPrevalentHypertensive(1)
                                                : setPrevalentHypertensive(0);
                                        }}
                                    />
                                </div>
                                <div className="col-2">
                                    <Label
                                        className="mx-5 mt-2"
                                        for="currentSmoker"
                                    >
                                        Diabetes
                                    </Label>
                                </div>
                                <div className="col-2">
                                    <BootstrapSwitchButton
                                        checked={diabetes}
                                        onlabel="Yes"
                                        offlabel="No"
                                        width={120}
                                        onChange={(checked) => {
                                            checked
                                                ? setDiabetes(1)
                                                : setDiabetes(0);
                                        }}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <hr />
                        <FormGroup>
                            <div className="row">
                                <div className="col-4">
                                    <Label className="mx-5 mt-2" for="height">
                                        Height (cm) :
                                    </Label>
                                </div>
                                <div className="col-2">
                                    <Input
                                        required
                                        type="number"
                                        name="height"
                                        className="form-control col-4 bg-dark text-white"
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                        value={height}
                                    />
                                </div>

                                <div className="col-2 offset-1">
                                    <Label className="mx-5 mt-2" for="weight">
                                        Weight (kg) :
                                    </Label>
                                </div>
                                <div className="col-2">
                                    <Input
                                        required
                                        type="number"
                                        name="weight"
                                        className="form-control col-4 bg-dark text-white"
                                        onChange={(e) =>
                                            setWeight(e.target.value)
                                        }
                                        value={weight}
                                    />
                                </div>
                            </div>
                        </FormGroup>
                        <div className="text-center">
                            <Button
                                className="btn btn-primary"
                                type="button"
                                onClick={predict}
                            >
                                Make Prediction
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Prediction Result</ModalHeader>
                <ModalBody className={resultClass}>Result : {result}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            <div className="mt-5"></div>
        </>
    );
};

export default HeartPrediction;
