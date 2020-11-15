import React from 'react'

const IndividualPatient = (props) => {

    return (
        <container className="patientCard">
        <div className="card">
            <div className="card-header">
                <h3>Patient Name: {props.p.name}</h3>
            </div>
            <div className="card-header">
                <h5>Preferred Name: {props.p.preferredName}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li className="list-group-item">Age: {props.p.age}</li>
                <li className="list-group-item">Gender: {props.p.gender}</li>
                <li className="list-group-item">Race: {props.p.race}</li>
                <li className="list-group-item">Location: {props.p.location}</li>
                <li className="list-group-item">{props.p.medication ? "Patient Needs Assistance With Medication" : "Patient Does Not Need Assistance With Medication"}</li>
                <li className="list-group-item">Care Start Date: {props.p.careStart}</li>
                <li className="list-group-item">Caregiver Notes: {props.p.caregiverNotes}</li>
            </ul>
        </div>
        </container>
    )

}

export default IndividualPatient;