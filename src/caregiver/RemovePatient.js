  
import React, {}  from 'react'

import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'

const RemovePatient = (props) => {

    const DeletePatient = (e) => {
        fetch(`http://localhost:3000/patient/${props.p.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then(console.log('patient successfully deleted'))
        props.setShowModal(false)
        props.fetchPatients();
    }

    return (
        <div>
            <Modal isOpen={props.showModal} className="patientContainer">
                <ModalBody className="center">
                    <ModalHeader>Are you sure you want to delete {props.p.name}?</ModalHeader>
                    <br />
                    <Button color="danger" type="submit" value="refresh" onClick={(e) => { DeletePatient(props.p) }}>Delete</Button>
                    <Button color="danger" type="submit" value="refresh" onClick={(e) => { props.setShowModal(false)}}>Cancel</Button>
                </ModalBody>
        
            </Modal>

        </div>
    )
}

export default RemovePatient;
