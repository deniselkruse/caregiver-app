import React, { useState } from 'react';
import { Button, Container, Form, Label, Input, Col, Row } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPatient = (props) => {

    const [name, setName] = useState('')
    const [preferredName, setPreferredName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [race, setRace] = useState('')
    const [location, setLocation] = useState('')
    const [medication, setMedication] = useState(false)
    const [careStart, setCareStart] = useState('')
    const [caregiverNotes, setCaregiverNotes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/patient/create', {
            method: 'POST',
            body: JSON.stringify({ patient: {
                name: name,
                preferredName: preferredName,
                age: age,
                gender: gender,
                race: race,
                location: location,
                medication: medication,
                careStart: careStart,
                caregiverNotes: caregiverNotes
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }),
        }).then(response => response.json())
            .then((patientData) => {
                console.log(patientData);
                setName('');
                setPreferredName('');
                setAge('');
                setGender('');
                setRace('');
                setLocation('');
                setMedication(false);
                setCareStart('');
                setCaregiverNotes('');
                props.fetchPatients();
            })
    }

    return (
        <div>
            <Container className="addPatientContainer">
                <Form className="addPatientForm my-auto">
                    <Row className="center">
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} />
                        <Label htmlFor="name" className="addPatientLabel">Patient Name</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input id="preferredName" value={preferredName} onChange={e => setPreferredName(e.target.value)} />
                        <Label htmlFor="preferredName" className="addPatientLabel">Preferred Name</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input id="location" value={location} onChange={e => setLocation(e.target.value)} />
                        <Label htmlFor="location" className="addPatientLabel">Location</Label>
                    </Row>
                    <br />
                    <Row className="genderRace">
                        <Col>
                            <Input id="gender" value={gender} onChange={e => setGender(e.target.value)} />
                            <Label htmlFor="gender" className="addPatientLabel">Gender</Label>
                        </Col>
                        <Col>
                            <Input id="race" value={race} onChange={e => setRace(e.target.value)} />
                            <Label htmlFor="race" className="addPatientLabel">Race</Label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="ageMed">
                        <Col>
                            <Input id="age" value={age} onChange={e => setAge(e.target.value)} />
                            <br />
                            <Label htmlFor="age" className="addPatientLabel">Age</Label>
                        </Col>
                        <Col className="my-auto">
                            <Input id="medication" type="checkbox" checked={medication} onChange={() => setMedication(!medication)} />
                            <Label htmlFor="medication" className="addPatientLabel">Medication?</Label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="center">
                        <DatePicker id="careStart" selected={careStart} onChange={date => {console.log(date); setCareStart(date)}} />
                        <br />
                        <Label htmlFor="careStart" className="addPatientLabel">Care Start Date</Label>
                    </Row>
                    <br />
                    <Row className="center">
                        <Input type="textarea" id="caregiverNotes" value={caregiverNotes} onChange={e => setCaregiverNotes(e.target.value)} />
                        <Label htmlFor="caregiverNotes" className="addPatientLabel">Caregiver Notes</Label>
                    </Row>
                    <Row className="addPatientButton">
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

// How to set "Gender" and "Race" to drop down menu?
// How to auto populate owner id?
// How to incorporate calendar into careStart date?