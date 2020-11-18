import React, {useEffect, useState} from 'react';

import IndividualPatient from './IndividualPatient';
import EditPatient from './EditPatient';

const PatientList = (props) => {

    const [patients, setPatients] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [patientToUpdate, setPatientToUpdate] = useState({});

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
            {props.patients.map((patients, i) =>
                <IndividualPatient p={patients} key={i} patients={patients} editUpdatePatient={editUpdatePatient} updateOn={updateOn} fetchPatients={fetchPatients} sessionToken={props.sessionToken} />)}

                {updateActive ? <EditPatient patientToUpdate={patientToUpdate} patients={patients}
                updateOff={updateOff} sessionToken={props.sessionToken} fetchPatients={fetchPatients} /> : <></>}

        </div>
    )
}

export default PatientList;