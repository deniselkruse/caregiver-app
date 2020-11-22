import React, { useState } from 'react';
import { Button, Container, Col, ListGroup, ListGroupItem } from 'reactstrap';

import RemovePatient from './RemovePatient';

const IndividualPatient = (props) => {

    const [removeOn, setRemoveOn] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const DeletePatient = (e) => {
        setRemoveOn(true)
        setShowModal(true)
    }

    return (
        <Container className="patientCard">
            <div className="card">
                <div className="card-header">
                    <h4>Patient Name: {props.p.name}</h4>
                </div>
                <div className="card-header">
                    <h5>Preferred Name: {props.p.preferredName}</h5>
                </div>
                <ListGroup className="list-group list-group-flush">
                    <ListGroupItem className="list-group-item">Age: {props.p.age}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Birth Sex: {props.p.birthSex}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Race: {props.p.race}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Location: {props.p.location}</ListGroupItem>
                    <ListGroupItem className="list-group-item">{props.p.medication ? "Patient Needs Assistance With Medication" : "Patient Does Not Need Assistance With Medication"}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Care Start Date: {props.p.careStart}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Caregiver Notes: {props.p.caregiverNotes}</ListGroupItem>
                </ListGroup>
                <Col className="patientButtons">
                    <Button color="warning" className="updateButton" onClick={() => { props.editUpdatePatient(props.p); props.updateOn() }}>Update Patient</Button>

                    <Button color="danger" className="deleteButton" type="submit" value="refresh" onClick={(e) => { DeletePatient() }}>Delete Patient</Button>
                </Col>
            </div>
            {removeOn ? <RemovePatient sessionToken={props.sessionToken} p={props.patients} showModal={showModal} setShowModal={setShowModal} fetchPatients={props.fetchPatients} /> : <></>}
        </Container>
    )

}

export default IndividualPatient;