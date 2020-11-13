import React, { useState } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

const AddPatient = (props) => {

    const [name, setName] = useState('')
    const [preferredName, setPreferredName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [race, setRace] = useState('')
    const [location, setLocation] = useState('')
    const [medication, setMedication] = useState(false)
    const [careStart, setCareStart] = useState('')
    const [caregiverNotes, setCaregiverNotes] = useState('')
    // const [owner, setOwner] = useState('') // ????

    const resetForm = () => {
        setName('')
        setPreferredName('')
        setAge('')
        setGender('')
        setRace('')
        setLocation('')
        setMedication(false)
        setCareStart('')
        setCaregiverNotes('')
        // setOwner('') // ????
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: name,
            preferredName: preferredName,
            age: age,
            gender: gender,
            race: race,
            location: location,
            medication: medication,
            careStart: careStart,
            caregiverNotes: caregiverNotes,
            // owner: owner
        }
        fetch('http://localhost:3000/patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(rObj => {
                console.log(rObj)
                resetForm()
                props.fetchPatients()
            })
    }

    return (
        <div>
            <Form>
                <Label htmlFor="name">Name:</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} />

                <Label htmlFor="preferredName">Preferred Name:</Label>
                <Input id="preferredName" value={preferredName} onChange={e => setAge(e.target.value)} />

                <Label htmlFor="age">Age:</Label>
                <Input id="age" value={age} onChange={e => setName(e.target.value)} />

                <Label htmlFor="gender">Gender:</Label>
                <Input id="gender" value={gender} onChange={e => setGender(e.target.value)} />

                <Label htmlFor="race">Race:</Label>
                <Input id="race" value={race} onChange={e => setRace(e.target.value)} />

                <Label htmlFor="location">Location:</Label>
                <Input id="location" value={location} onChange={e => setLocation(e.target.value)} />

                <Label htmlFor="medication">Medication:</Label>
                <Input id="medication" type="checkbox" checked={medication} onChange={() => setMedication(!medication)} />

                <Label htmlFor="careStart">Care Start Date:</Label>
                <Input id="careStart" value={careStart} onChange={e => setCareStart(e.target.value)} />

                <Label htmlFor="caregiverNotes">Caregiver Notes:</Label>
                <Input id="caregiverNotes" value={caregiverNotes} onChange={e => setCaregiverNotes(e.target.value)} />
            </Form>

            <Button onClick={handleSubmit}>Add New Patient</Button>
        </div>
    )
}

export default AddPatient;

// How to set "Gender" and "Race" to drop down menu?
// How to auto populate owner id?
// How to incorporate calendar into careStart date?
