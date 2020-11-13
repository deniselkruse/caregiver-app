import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom'

import AddPatient from './AddPatient';
import PatientList from './PatientList';

const Patient = (props) => {

    const [patients, setPatients] = useState([])

    useEffect(
        () => {
            fetchPatients()
        }, []
    )

    const fetchPatients = () => {
        fetch('http://localhost:3000/patient', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(rArr =>
                setPatients(rArr))
    }

    return (
        <div>
            <div>
                <Col>
                    <Row className="patientIcons">
                        <i className="fas fa-users" id="viewAll">
                            <Link to="/patient/mine">View All</Link>
                        </i>
                    </Row>
                    <Row className="patientIcons">
                        <i className="fas fa-search" id="findPatient">
                            <Link to="/:name">Find Patient</Link>
                        </i>
                    </Row>
                    <Row className="patientIcons">
                        <i className="fas fa-user-plus" id="addPatient">
                            <Link to="/create">Add Patient</Link>
                        </i>
                    </Row>
                </Col>
            </div>
            <div>
                <Switch>
                    <Route exact path="/patient"><PatientList patients={patients} /></Route>
                    <Route exact path="/:name"></Route>
                    <Route exact path="/create"><AddPatient sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Patient; 