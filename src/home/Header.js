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
                    <h3 id="careSpace">CompanionPath</h3>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" id="hamburger" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mine">View All</NavLink>
                        </NavItem>
                        <NavItem>
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

export default Header;