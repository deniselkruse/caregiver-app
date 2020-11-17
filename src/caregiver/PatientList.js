import React from 'react';

import IndividualPatient from "./IndividualPatient";

const PatientList = (props) => {

    return (
        <div>
            {props.patients.map((pObj, i) =>
                <IndividualPatient p={pObj} key={i}  />)}
        </div>
    )
}

export default PatientList;