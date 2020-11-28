import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import IndividualPatient from './IndividualPatient';
import EditPatient from './EditPatient';

URL from '../helpers/env'

const PatientList = (props) => {

    const [patients, setPatients] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [patientToUpdate, setPatientToUpdate] = useState({});
    const [search, setSearch] = useState('');

    const fetchPatients = () => {
        fetch(`${APIURL}/patient`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((result) => result.json())
            .then((logData) => {
                setPatients(logData)
                console.log(logData)
            })
    }

    const fetchResults = (e) => {
        fetch(`${APIURL}/patient/${search}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':
                    'application/json',
                'Authorization': props.sessionToken
            })
        }).then(response => response.json())
            .then((data) => {
                (console.log(data))
                setPatients(data);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
    }

    const editUpdatePatient = (patient) => {
        setPatientToUpdate(patient);
        console.log(patient);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchPatients();
    }, [])

    return (
        <div>
            <FormGroup>
                <Row>
                    <Col className="patientSearch">
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <br />
                            <Label>Enter patient's first name to search:</Label>
                            <br />
                            <Input type="text" className="search" onChange={(e) => setSearch(e.target.value)} required />
                            <br />
                            <br />
                            <Button className="submit" id="searchButton">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </FormGroup>

            {patients.map((patients, i) =>
                <IndividualPatient p={patients} key={i} patients={patients} editUpdatePatient={editUpdatePatient} updateOn={updateOn} fetchPatients={fetchPatients} sessionToken={props.sessionToken} />)}

            {updateActive ? <EditPatient patientToUpdate={patientToUpdate} patients={patients}
                updateOff={updateOff} sessionToken={props.sessionToken} fetchPatients={fetchPatients} /> : <></>}
        </div>
    )
}

export default PatientList;