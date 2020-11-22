<<<<<<< HEAD

=======
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const Menu = (props) => {

    return (
        <div>
            <Col>
                <Link to="/mine">
                    <Row className="patientIcons">
                        <i className="fas fa-users" id="viewAll"></i>
                    </Row>
                </Link>
                <h5 className="menuText">View All</h5>

                {/* <Link to="/:name">
                    <Row className="patientIcons">
                        <i className="fas fa-search" id="findPatient"></i>
                    </Row>
                </Link>
                <h5 className="menuText">Find Patient</h5> */}

                <Link to="/patient/create">
                    <Row className="patientIcons">
                        <i className="fas fa-user-plus" id="addPatient"></i>
                    </Row>
                </Link>
                <h5 className="menuText">Add Patient</h5>
            </Col>
<<<<<<< HEAD
=======
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
        </div>
    )
}

export default Menu;