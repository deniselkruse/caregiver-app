import React, { useState } from 'react'
import { Button, Col, Form, Label, Input, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditPatient = (props) => {

    const [editName, setEditName] = useState(props.patientToUpdate.name)
    const [editPreferredName, setEditPreferredName] = useState(props.patientToUpdate.preferredName)
    const [editAge, setEditAge] = useState(props.patientToUpdate.age)
    const [editBirthSex, setEditBirthSex] = useState(props.patientToUpdate.birthSex)
    const [editRace, setEditRace] = useState(props.patientToUpdate.race)
    const [editLocation, setEditLocation] = useState(props.patientToUpdate.location)
    const [editMedication, setEditMedication] = useState(props.patientToUpdate.medication)
    const [editCareStart, setEditCareStart] = useState(props.patientToUpdate.careStart)
    const [editCaregiverNotes, setEditCaregiverNotes] = useState(props.patientToUpdate.caregiverNotes)
    const [editStartDate, setEditStartDate] = useState('')
    const [editReqDate, setEditReqDate] = useState('')

    const handleChange = (date) => {
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
        setEditReqDate(fullDate)
        console.log(editReqDate)
    }

    const patientUpdate = (e, patient) => {
        e.preventDefault();
        fetch(`http://localhost:3000/patient/${props.patientToUpdate.name}`, {
            method: 'PUT',
            body: JSON.stringify({
                patient: {
                    name: editName,
                    preferredName: editPreferredName,
                    age: editAge,
                    birthSex: editBirthSex,
                    race: editRace,
                    location: editLocation,
                    medication: editMedication,
                    careStart: editCareStart,
                    caregiverNotes: editCaregiverNotes
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((results) => {
            console.log(results);
            props.fetchPatients();
            props.updateOff();
        })
    }

    return (
        <div>
            <Modal isOpen={true} className="patientContainer">
                <ModalHeader>Update Patient</ModalHeader>
                <ModalBody>
                    <Form className="patientForm my-auto">
                        <Row className="center">
                            <Input id="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                            <Label htmlFor="name" className="patientLabel">Patient Name</Label>
                        </Row>
                        <br />
                        <Row className="center">
                            <Input id="preferredName" value={editPreferredName} onChange={(e) => setEditPreferredName(e.target.value)} />
                            <Label htmlFor="preferredName" className="patientLabel">Preferred Name</Label>
                        </Row>
                        <br />
                        <Row className="center">
                            <Input id="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                            <Label htmlFor="location" className="patientLabel">Location</Label>
                        </Row>
                        <br />
                        <Row className="genderRace">
                            <Col>
                                <Input type="select" id="birthSex" value={editBirthSex} onChange={(e) => setEditBirthSex(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Unknown">Unknown</option>
                                    <option value="Indeterminate">Indeterminate</option>
                                </Input>
                            </Col>
                            <Col>
                                <Input type="select" id="race" value={editRace} onChange={(e) => setEditRace(e.target.value)}>
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
                                <Input id="age" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                                <br />
                                <Label htmlFor="age" className="patientLabel">Age</Label>
                            </Col>
                            <Col className="my-auto">
                                <Input id="medication" type="checkbox" checked={editMedication} onChange={() => setEditMedication(!editMedication)} />
                                <Label htmlFor="medication" className="patientLabel">Medication?</Label>
                            </Col>
                        </Row>
                        <br />
                        <Row className="center">
                            <DatePicker className="datePicker" id="careStart" selected={editStartDate} onChange={handleChange} />
                            <br />
                            <Label htmlFor="careStart" className="patientLabel">Care Start Date</Label>
                        </Row>
                        <br />
                        <Row className="center">
                            <Input type="textarea" id="caregiverNotes" value={editCaregiverNotes} onChange={(e) => setEditCaregiverNotes(e.target.value)} />
                            <Label htmlFor="caregiverNotes" className="patientLabel">Caregiver Notes</Label>
                        </Row>
                        <Row className="patientButton">
                            <Button type="submit" onClick={!patientUpdate}>Cancel</Button>
                            
                            <Button type="submit" onClick={patientUpdate}>Update Patient</Button>
                        </Row>
                    </Form>
                    <br />
                    <br />
                </ModalBody>
            </Modal>


        </div >
    )
}

export default EditPatient;