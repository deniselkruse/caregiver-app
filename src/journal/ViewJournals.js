import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import JournalEntries from './JournalEntries';

import URL from '../helpers/env'

const ViewJournals = (props) => {

    const [journals, setJournals] = useState([]);
    const [patient, setPatient] = useState('')
    const params = useParams()
    // console.log(params)
    const { id } = useParams()

    useEffect(() => { //useEffect method utilized to search through the patient table via props.patients and match up the patient id from both the patient and journal tables
        for (const p of props.patients) {
            if (p.id == params.id) setPatient(p)
        }
    }, [props.patients])

    const fetchJournals = () => {
        fetch(`${APIURL}/journal/${id}`, { // Utilize fetch function with the endpoint created on the server-side, useParams enables getting only journal entries by specific patient id
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken // Utilize sessionToken in the headers to maintain the protected route
            })
        }).then((result) => result.json()) // Return the JSONified response
            .then((logData) => {
                setJournals(logData.journal)
                // console.log(logData.journal)
            })
    }

    useEffect(() => {
        fetchJournals(); // useEffect tells React to do something after the render, performing it later as a "side effect"; fetchJournals function called to display all results
    }, [])

    return (
        <div>
            <div>
                <h4 className="journalHeader">Companion Journal</h4>
                <h4 className="journalPatient">Patient: {patient.preferredName}</h4>
            </div>
            {journals.map((journals, i) =>
                <JournalEntries j={journals} key={i} journals={journals} fetchJournals={fetchJournals} sessionToken={props.sessionToken} />)}
        </div>
    )
}

export default ViewJournals;