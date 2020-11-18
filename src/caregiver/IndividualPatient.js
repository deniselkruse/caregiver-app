import React from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';

const IndividualPatient = (props) => {

    const RemovePatient = () => {
        fetch(`http://localhost:3000/patient/${props.p.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then(console.log('patient successfully deleted'))
    }

    return (
        <Container className="patientCard">
            <div className="card">
                <div className="card-header">
                    <h3>Patient Name: {props.p.name}</h3>
                </div>
                <div className="card-header">
                    <h5>Preferred Name: {props.p.preferredName}</h5>
                </div>
                <ListGroup className="list-group list-group-flush">
                    <ListGroupItem className="list-group-item">Age: {props.p.age}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Gender: {props.p.gender}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Race: {props.p.race}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Location: {props.p.location}</ListGroupItem>
                    <ListGroupItem className="list-group-item">{props.p.medication ? "Patient Needs Assistance With Medication" : "Patient Does Not Need Assistance With Medication"}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Care Start Date: {props.p.careStart}</ListGroupItem>
                    <ListGroupItem className="list-group-item">Caregiver Notes: {props.p.caregiverNotes}</ListGroupItem>
                </ListGroup>
                <Button color="warning" onClick={() => { props.editUpdatePatient(props.p); props.updateOn() }}>Update</Button>
                <Button color="danger" type="submit" value="refresh" onClick={() => { RemovePatient(props.p) }}>Delete</Button>
            </div>
        </Container>
    )

}

export default IndividualPatient;