import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

const JournalEntries = (props) => {

    return (

        <Container className="journalCard">
            <hr className="journalDivider"/>
            <ListGroup className="list-group list-group-flush">
                <ListGroupItem className="list-group-item">Journal Entry Date: {props.j.journalDate}</ListGroupItem>
                <ListGroupItem className="list-group-item">Medication Time: {props.j.medicationTime}</ListGroupItem>
                <ListGroupItem className="list-group-item">Wake-Up Time: {props.j.awake}</ListGroupItem>
                <ListGroupItem className="list-group-item">Bedtime: {props.j.asleep}</ListGroupItem>
                <ListGroupItem className="list-group-item">Mood: {props.j.mood}</ListGroupItem>
                <ListGroupItem className="list-group-item">Caregiver Notes: {props.j.dailyNotes}</ListGroupItem>
            </ListGroup>
        </Container>
    )

}

export default JournalEntries;