import React, { useEffect, useState } from 'react';

import JournalEntries from './JournalEntries';

const ViewJournals = (props) => {

    const [journals, setJournals] = useState([]);

    const fetchJournals = () => {
        fetch(`http://localhost:3000/:name`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((result) => result.json())
            .then((logData) => {
                setJournals(logData)
                console.log(logData)
            })
    }

    useEffect(() => {
        fetchJournals();
    }, [])

    return (
        <div>
            {journals.map((journals, i) =>
                <JournalEntries j={journals} key={i} journals={journals} fetchJournals={fetchJournals} sessionToken={props.sessionToken} />)}
        </div>
    )
}

export default ViewJournals;