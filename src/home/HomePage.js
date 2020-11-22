import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import PatientList from '../caregiver/PatientList'
import AddPatient from '../caregiver/AddPatient';
import Menu from '../home/Menu';
import About from '../home/About';

<<<<<<< HEAD

=======
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
const HomePage = (props) => {

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
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/mine"><PatientList patients={patients}  sessionToken={props.sessionToken} /></Route>
                    <Route exact path="/about"><About /></Route>
=======
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/mine"><PatientList patients={patients} sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                    <Route exact path="/:name"></Route>
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
                    <Route exact path="/patient/create"><AddPatient sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                    <Route exact path="/"><Menu /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default HomePage; 