import React from 'react';
const About = () => {
    
    return (
        <div className="aboutMain">
            <h2 className="aboutHeader">About</h2>
            <h4 className="aboutSubheader">Why?</h4>
            <p className="aboutText"> According to the National Alliance for Caregiving, approximately 43.5 million caregivers provide unpaid  care for an adult or child within the U.S. each year.</p>
            <p className="aboutText">This often requires complicated logistics and coordination to provide even the basic level of necessary care for those in need.</p>
            <p className="aboutText">Communication amongst the care team in regards to activities of daily living can be challenging, providing an opportunity to for problem solving with an app for caregivers.</p>
            <h4 className="aboutSubheader">Who?</h4>
            <p className="aboutText">The target audience for CompanionPath are families and private caregivers providing services for loved ones and/or clients with special needs.</p>
            <h4 className="aboutSubheader">How?</h4>
            <p className="aboutText">CompanionPath provides an easy to use platform for logging activities of daily living for the individual receiving care. Upon login, the user can do the following:</p>
                <li>Add Patient</li>
                <li>Update Patient</li>
                <li>Find patient</li>
                <li>Delete Patient</li>
                <br />
        </div>
    )
}
export default About;