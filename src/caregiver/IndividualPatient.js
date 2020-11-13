import React from 'react'

const IndividualPatient = (props) => {

    return (
        <div className="sf-card">
            <h3>{props.p.name}</h3>
            <h5>{props.p.preferredName}</h5>
            <p>Patient Age: {props.p.age}.</p>
            <p>Patient Gender: {props.p.gender}</p>
            <p>Patient Race: {props.p.race}</p>
            <p>Patient Location: {props.p.location}</p>
            <p>{props.p.medication ? "Patient Needs Assistance With Medication" : "Patient Does Not Need Assistance With Medication"}</p>
            <p>Care Start Date: {props.p.careStart}</p>
            <p>Caregiver Notes: {props.p.caregiverNotes}</p>
        </div>
    )

}

export default IndividualPatient;