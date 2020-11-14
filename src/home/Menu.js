import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const MenuPage = () => {

    return (
        <div>
            <Col>
                <Link to="/mine">
                    <Row className="patientIcons">
                        <i className="fas fa-users" id="viewAll"></i>
                    </Row>
                </Link>
                <h5>View All</h5>
                <Link to="/:name">
                    <Row className="patientIcons">
                        <i className="fas fa-search" id="findPatient"></i>
                    </Row>
                </Link>
                <h5>Find Patient</h5>
                <Link to="/create">
                    <Row className="patientIcons">
                        <i className="fas fa-user-plus" id="addPatient"></i>
                    </Row>
                </Link>
                <h5>Add Patient</h5>
            </Col>
        </div>
    )
}

export default MenuPage;