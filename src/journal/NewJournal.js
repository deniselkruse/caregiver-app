import React, { useState } from 'react';
import { Button, Container, Form, Label, Input, Col, Row } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewJournal = (props) => {

    const [patient, setPatient] = useState('')
    const [journalDate, setJournalDate] = useState('') // Auto populate to Today's Date??
    const [medicationTime, setMedicationTime] = useState('')
    const [mood, setMood] = useState('')
    const [awake, setAwake] = useState('')
    const [asleep, setAsleep] = useState('')
    const [dailyNotes, setDailyNotes] = useState('')

    const [startDate, setStartDate] = useState('') // Auto populate to Today's Date??
    const [reqDate, setReqDate] = useState('') // Auto populate to Today's Date??

    const handleChange = (date) => {
        let tempString = date.toString().substring(4, 7)
        let monthDate;
        switch (tempString) {
            case "Jan":
                monthDate = 1
                break;
            case "Feb":
                monthDate = 2
                break;
            case "Mar":
                monthDate = 3
                break;
            case "Apr":
                monthDate = 4
                break;
            case "May":
                monthDate = 5
                break;
            case "Jun":
                monthDate = 6
                break;
            case "Jul":
                monthDate = 7
                break;
            case "Aug":
                monthDate = 8
                break;
            case "Sep":
                monthDate = 9
                break;
            case "Oct":
                monthDate = 10
                break;
            case "Nov":
                monthDate = 11
                break;
            case "Dec":
                monthDate = 12
                break;
            default: break
        }
        let fullDate = monthDate + "/" + date.toString().substring(8, 10) + "/" + date.toString().substring(11, 16)
        setReqDate(fullDate)
        console.log(reqDate)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/journal/create', {
            method: 'POST',
            body: JSON.stringify({
                journal: {
                    patient: patient,
                    journalDate: reqDate,
                    medicationTime: medicationTime,
                    mood: mood,
                    awake: awake,
                    dailyNotes: dailyNotes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            }),
        }).then(response => response.json())
            .then((journalData) => {
                console.log(journalData);
                setPatient('');
                setJournalDate('');
                setMedicationTime('');
                setMood('');
                setAwake('');
                setAsleep('');
                setDailyNotes('');
                props.fetchJournal();
                // props.fetchPatients(); // ??? To connect Journal to Individual Patient ID?
            })
    }
    return (
        <Container className="journalContainer">
            <Form className="my-auto">
                {/* PATIENT NAME: Need to figure out how to auto-populate this via Owner.Id -> Patient.Id */}
                <Row className="center">
                    <Input id="name" value={patient} onChange={e => setPatient(e.target.value)} />
                    <Label htmlFor="name" className="patientLabel">Patient Name</Label>
                </Row>
                <br />
                <Row className="center">
                    <DatePicker className="datePicker" selected={startDate} onChange={handleChange} />
                    <br />
                    <Label htmlFor="journalDate" className="patientLabel">Care Date</Label>
                </Row>
                <br />
                <Row className="center">
                    <Input id="medicationTime" value={medicationTime} onChange={e => setMedicationTime(e.target.value)} />
                    <Label htmlFor="medicationTime" className="patientLabel">Medication Time</Label>
                    {/* STRETCH GOAL: Do not show Medication Information if patient does not need assistance with medication*/}
                </Row>
                <br />
                <Row>
                    <Col className="my-auto">
                        <Input id="awake" value={awake} onChange={e => setAwake(e.target.value)} />
                        <Label htmlFor="awake" className="patientLabel">Wake-Up Time</Label>
                    </Col>
                    <Col className="my-auto">
                        <Input id="asleep" value={asleep} onChange={e => setAsleep(e.target.value)} />
                        <Label htmlFor="asleep" className="patientLabel">Asleep Time</Label>
                    </Col>
                </Row>
                <br />
                <Row className="center">
                <Label htmlFor="mood" className="patientLabel">Mood</Label>
                    <Input type="select" id="mood" value={mood} onChange={(e) => setMood(e.target.value)}>
                        <option value=""></option>
                        <option value="Happy">Happy</option>
                        <option value="Sad">Sad</option>
                        <option value="Mad">Mad</option>
                        <option value="Tired">Tired</option>
                        <option value="Bored">Bored</option>
                        <option value="Other">Other</option>
                        <option value="Unknown">Unknown</option>
                    </Input>
                </Row>
                <br />
                <br />
                <Row className="center">
                    <Input type="textarea" id="dailyNotes" value={dailyNotes} onChange={e => setDailyNotes(e.target.value)} />
                    <Label htmlFor="dailyNotes" className="patientLabel">Daily Notes</Label>
                </Row>
                <br />
                <Row className="center">
                    <Button type="submit" onClick={handleSubmit}>Add Journal Entry</Button>
                </Row>
            </Form>
        </Container>

    )



}

export default NewJournal;