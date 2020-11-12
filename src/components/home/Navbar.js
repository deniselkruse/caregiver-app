import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'

const Sitebar = () => {
    return(
        <div>
        <Navbar color="faded" light expand='md'>
            <NavbarBrand href="/">Caregiver App</NavbarBrand>
        </Navbar>
        </div>
    )
}

export default Sitebar;