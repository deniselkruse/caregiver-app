import React from 'react';
import { Row } from 'reactstrap';


const Footer = (props) => {

    return (
        <div className="footerDiv">
            <footer className="footer">
                <Row className="footerRow">
                    <br />
                    <a className="footerLink" href="/">Home</a>
                    <a className="footerLink" href="/about">About</a>
                    <br />
                </Row>
                <Row className="footerRow">
                © Copyright 2020 CompanionPath
                </Row>
                <br />
            </footer>
        </div>
    )
}

export default Footer;