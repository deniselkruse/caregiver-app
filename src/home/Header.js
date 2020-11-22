import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">
                    <i className="fas fa-house-user" id="houseLogo" color="#f58b44"></i>
<<<<<<< HEAD
               
                <h3 id="careSpace">CompanionPath</h3></NavbarBrand>
=======
                    <h3 id="careSpace">CompanionPath</h3>
                </NavbarBrand>
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
                <NavbarToggler onClick={toggleNavbar} className="mr-2" id="hamburger" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
<<<<<<< HEAD
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mine">View All</NavLink>
                        </NavItem>
                        <NavItem>
=======
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mine">View All</NavLink>
                        </NavItem>
                        <NavItem>
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
                            <NavLink href="/patient/create">Add Patient</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

<<<<<<< HEAD
export default Header;

// NavbarToggler.propTypes = {
//     type: PropTypes.string,
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// }

// NavbarToggler.propTypes = {
//     type: PropTypes.string,
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// }
=======
export default Header;
>>>>>>> fa09b844ec10c241d4dc2a11f731dbc36b3ccf82
