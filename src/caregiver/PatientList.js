import React, {useEffect, useState} from 'react';
import {Form, Button} from 'reactstrap'
import IndividualPatient from './IndividualPatient';
import EditPatient from './EditPatient';
import RemovePatient from './RemovePatient'

const PatientList = (props) => {

    const [patients, setPatients] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [patientToUpdate, setPatientToUpdate] = useState({});
    const [search, setSearch] = useState('');

    const fetchPatients = () => {
        fetch('http://localhost:3000/patient', {
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
       
        fetch(`http://localhost:3000/patient/${search}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':
                'application/json',
                'Authorization': props.sessionToken
            })})
            .then(response => response.json())
            .then((data) => {
                (console.log(data))
                setPatients(data)
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            fetchResults();
        };

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
    },[])

    return (

        <div className = "main">
            <div className="mainDiv">
                <div className="patientSearch">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter patients first name to search</span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <br />
                    <Button className="submit" type="submit">Submit search</Button>
                </Form>
                </div>
            {patients.map((patients, i) =>
                <IndividualPatient p={patients} key={i} patients={patients} editUpdatePatient={editUpdatePatient} updateOn={updateOn} fetchPatients={fetchPatients} sessionToken={props.sessionToken} />)}
            

                {updateActive ? <EditPatient patientToUpdate={patientToUpdate} patients={patients}
                updateOff={updateOff} sessionToken={props.sessionToken} fetchPatients={fetchPatients} /> : <></>}

            </div>
        </div>
    )
}

export default PatientList;