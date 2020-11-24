import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Label, Input, Col, Row } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';

import APIURL from '../helpers/env'

const NewJournal = (props) => {

    const [patient, setPatient] = useState('')
    const [journalDate, setJournalDate] = useState('') 
    const [medicationTime, setMedicationTime] = useState('')
    const [mood, setMood] = useState('')
    const [awake, setAwake] = useState('')
    const [asleep, setAsleep] = useState('')
    const [dailyNotes, setDailyNotes] = useState('')

    const [startDate, setStartDate] = useState('') // Variables used in datePicker modification
    const [reqDate, setReqDate] = useState('') // Variables used in datePicker modification

    const params = useParams()
    // console.log(params)

    const handleChange = (date) => { // DatePicker modification to convert a date object to a string of x/xx/xxxx.
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
        fetch(`${APIURL}/journal/create`, { //  Utilize the URL from the server-side to refer to the journal/create route.
            method: 'POST', // Match the POST method utilized in the route in the server-side
            body: JSON.stringify({
                journal: {
                    patient: params.id,
                    journalDate: reqDate,
                    medicationTime: medicationTime,
                    mood: true,
                    awake: awake,
                    asleep: asleep,
                    dailyNotes: dailyNotes,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken // The subroute is protected route with validateSession; utilize props to access the sessionToken and allow access to this route
            }),
        }).then(response => response.json()) // The information entered into the input fields is turned into a JSON string
            .then((journalData) => {
                console.log(journalData);
                setPatient('');
                setJournalDate('');
                setMedicationTime('');
                setMood('');
                setAwake('');
                setAsleep('');
                setDailyNotes('');
            })
    }

    useEffect(() => {
        for (const p of props.patients) {
            if (p.id == params.id) setPatient(p)
        }
    }, [props.patients])

    return (
        <Container className="journalContainer">
            <Form className="my-auto">
                <Row className="center">
                    <h4 className="journalHeader">New Journal Entry</h4>
                    <h5 className="journalPatient">Patient: {patient.preferredName}</h5>
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
                        <Label htmlFor="asleep" className="patientLabel">Bedtime</Label>
                    </Col>
                </Row>
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
                    <Button className="newJournalButton" type="submit" onClick={handleSubmit}>Add Journal Entry</Button>
                    <br />
                    <br />
                </Row>
            </Form>
        </Container>

    )



}

export default NewJournal;