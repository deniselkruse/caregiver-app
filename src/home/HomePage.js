import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import PatientList from '../caregiver/PatientList'
import AddPatient from '../caregiver/AddPatient';
import Menu from '../home/Menu';
import About from '../home/About';

import NewJournal from '../journal/NewJournal';
import ViewJournals from '../journal/ViewJournals';

const HomePage = (props) => {

    const [patients, setPatients] = useState([]);
    const [journals, setJournals] = useState([]);

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

    useEffect(
        () => {
            fetchJournals()
        }, []
    )

    const fetchJournals = () => {
        fetch('http://localhost:3000/:name', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(rArr =>
                setJournals(rArr))
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

                    <Route exact path="/journal/:name/create"><NewJournal p={patients} j={journals} journals={journals} patients={patients} sessionToken={props.sessionToken} fetchPatients={fetchPatients}  fetchJournals={fetchJournals}/></Route>
                    <Route exact path="/:name"><ViewJournals j={journals} journals={journals} p={patients} patients={patients} fetchPatients={fetchPatients} fetchJournals={fetchJournals} sessionToken={props.sessionToken}  /></Route>

                </Switch>
            </div>
        </div>
    )
}

export default HomePage; 