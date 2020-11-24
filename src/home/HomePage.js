import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import PatientList from '../caregiver/PatientList'
import AddPatient from '../caregiver/AddPatient';
import Menu from '../home/Menu';

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
                    <Route exact path="/mine"><PatientList patients={patients} sessionToken={props.sessionToken} fetchPatients={fetchPatients}/></Route>
                    <Route exact path="/:name"></Route>
                    <Route exact path="/patient/create"><AddPatient sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                    <Route exact path="/"><Menu /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default HomePage; 