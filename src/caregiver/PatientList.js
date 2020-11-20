import React, {useState} from 'react';
import IndividualPatient from "./IndividualPatient";


const PatientList = (props) => {

    const [search, setSearch] = useState('');
   
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
                props.setPatients(data);
            } 
        )}
        
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e) }>
                    <span>Enter patients first name to search</span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <button className="submit">Submit search</button>
                </form>

        {props.patients.map((pObj, i) => 
        <IndividualPatient p={pObj} key={i} />)}
            </div>
        </div>
    )
}


export default PatientList;



// for SearchField to function, npm install react-search-field