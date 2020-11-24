import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import JournalEntries from './JournalEntries';

import APIURL from '../helpers/env'

const ViewJournals = (props) => {

    const [journals, setJournals] = useState([]);
    const [patient, setPatient] = useState('')
    const params = useParams()
    // console.log(params)
    const { id } = useParams()

    useEffect(() => {
        for (const p of props.patients) {
            if (p.id == params.id) setPatient(p)
        }
    }, [props.patients])

    const fetchJournals = () => {
        fetch(`${APIURL}/journal/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((result) => result.json())
            .then((logData) => {
                setJournals(logData.journal)
                // console.log(logData.journal)
            })
    }

    useEffect(() => {
        fetchJournals();
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