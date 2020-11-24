import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import PatientList from '../caregiver/PatientList'
import AddPatient from '../caregiver/AddPatient';
import Menu from '../home/Menu';
import About from '../home/About';
import APIURL from '../helpers/env'

import NewJournal from '../journal/NewJournal';
import ViewJournals from '../journal/ViewJournals';

import APIURL from '../helpers/env'

const HomePage = (props) => {

    const [patients, setPatients] = useState([]);

    useEffect(
        () => {
            fetchPatients()
        }, []
    )

    const fetchPatients = () => {
        fetch(`${APIURL}/patient`, {
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

                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/mine"><PatientList patients={patients} sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                    <Route exact path="/:name"></Route>
                    <Route exact path="/patient/create"><AddPatient sessionToken={props.sessionToken} fetchPatients={fetchPatients} /></Route>
                    <Route exact path="/"><Menu /></Route>

                    <Route exact path="/journal/create/:id"><NewJournal patients={patients} sessionToken={props.sessionToken} fetchPatients={fetchPatients}  /></Route>
                    
                    <Route exact path="/journal/:id"><ViewJournals patients={patients} fetchPatients={fetchPatients} sessionToken={props.sessionToken}  /></Route>

                </Switch>
            </div>
        </div>
    )
}

export default HomePage; 