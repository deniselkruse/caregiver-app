import React, { useState } from 'react';
import { Button, Container, Form, Label, Input, Col, Row } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import URL from '../helpers/env'

const AddPatient = (props) => {

    const [name, setName] = useState('')
    const [preferredName, setPreferredName] = useState('')
    const [age, setAge] = useState('')
    const [birthSex, setBirthSex] = useState('')
    const [race, setRace] = useState('')
    const [location, setLocation] = useState('')
    const [medication, setMedication] = useState(false)
    const [careStart, setCareStart] = useState('')
    const [caregiverNotes, setCaregiverNotes] = useState('')

    const [startDate, setStartDate] = useState('') // Variables used in datePicker modification
    const [reqDate, setReqDate] = useState('') // Variables used in datePicker modification

    const handleChange = (date) => { // DatePicker modification to convert a date object to a string of x/xx/xxxx.
        let tempString = date.toString().substring(4, 7)
        let monthDate;
        switch (tempString) {
            case "Jan":
                monthDate = 1
                break;
            case "Feb":
                monthDate = 2
                break;
            case "Mar":
                monthDate = 3
                break;
            case "Apr":
                monthDate = 4
                break;
            case "May":
                monthDate = 5
                break;
            case "Jun":
                monthDate = 6
                break;
            case "Jul":
                monthDate = 7
                break;
            case "Aug":
                monthDate = 8
                break;
            case "Sep":
                monthDate = 9
                break;
            case "Oct":
                monthDate = 10
                break;
            case "Nov":
                monthDate = 11
                break;
            case "Dec":
                monthDate = 12
                break;
            default: break
        }
        let fullDate = monthDate + "/" + date.toString().substring(8, 10) + "/" + date.toString().substring(11, 16)
        setReqDate(fullDate)
        console.log(reqDate)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/patient/create`, { //  Utilize the URL from the server-side to refer to the patient/create route.
            method: 'POST', // Match the POST method utilized in the route in the server-side
            body: JSON.stringify({
                patient: {
                    name: name,
                    preferredName: preferredName,
                    age: age,
                    birthSex: birthSex,
                    race: race,
                    location: location,
                    medication: medication,
                    careStart: reqDate,
                    caregiverNotes: caregiverNotes
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken // The subroute is protected route with validateSession; utilize props to access the sessionToken and allow access to this route
            }),
        }).then(response => response.json()) // The information entered into the input fields is turned into a JSON string
            .then((patientData) => {
                console.log(patientData);
                setName('');
                setPreferredName('');
                setAge('');
                setBirthSex('');
                setRace('');
                setLocation('');
                setMedication(false);
                setCareStart('');
                setCaregiverNotes('');
                props.fetchPatients(); // fetchPatients function is called to refresh the results with the newly updated data.
            })
    }

    return (
        <div>
            <Container className="patientContainer">
                <Form className="patientForm my-auto">
                    <Row className="center">
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} />
                        <Label htmlFor="name" className="patientLabel">Patient Name</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input id="preferredName" value={preferredName} onChange={e => setPreferredName(e.target.value)} />
                        <Label htmlFor="preferredName" className="patientLabel">Preferred Name</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input id="location" value={location} onChange={e => setLocation(e.target.value)} />
                        <Label htmlFor="location" className="patientLabel">Location</Label>
                    </Row>
                    <br />
                    <Row className="genderRace">
                        <Col>
                            <Input type="select" id="birthSex" value={birthSex} onChange={(e) => setBirthSex(e.target.value)}>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unknown">Unknown</option>
                                <option value="Indeterminate">Indeterminate</option>
                            </Input>
                        </Col>
                        <Col>
                            <Input type="select" id="race" value={race} onChange={(e) => setRace(e.target.value)}>
                                <option value=""></option>
                                <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                                <option value="Asian">Asian</option>
                                <option value="Black or African American">Black or African American</option>
                                <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                                <option value="White">White</option>
                                <option value="Other">Other</option>
                                <option value="Unknown">Unknown</option>
                            </Input>
                        </Col>
                    </Row>
                    <br />
                    <Row className="ageMed">
                        <Col>
                            <Input id="age" value={age} onChange={e => setAge(e.target.value)} />
                            <br />
                            <Label htmlFor="age" className="patientLabel">Age</Label>
                        </Col>
                        <Col className="my-auto">
                            <Input id="medication" type="checkbox" checked={medication} onChange={() => setMedication(!medication)} />
                            <Label htmlFor="medication" className="patientLabel">Medication?</Label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="center">
                        <DatePicker className="datePicker" id="careStart" selected={startDate} onChange={handleChange} />
                        <br />
                        <Label htmlFor="careStart" className="patientLabel">Care Start Date</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input type="textarea" id="caregiverNotes" value={caregiverNotes} onChange={e => setCaregiverNotes(e.target.value)} />
                        <Label htmlFor="caregiverNotes" className="PatientLabel">Caregiver Notes</Label>
                    </Row>
                    <Row className="patientButton">
                        <Button type="submit" onClick={handleSubmit}>Add New Patient</Button>
                    </Row>
                </Form>
                <br />
                <br />
            </Container>
        </div>
    )
}

export default AddPatient;

