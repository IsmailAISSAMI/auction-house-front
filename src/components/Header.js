import React from 'react';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    const navDropdownIcon = (<AccountIcon />);
    const { logout } = useAuth()
    const history = useHistory();

    async function handleLogout() {    
        try {
          await logout();
          history.push("/Signin");
        } catch {
          alert("Failed to logout!");
        }
      }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Brand href="/Admin">Auc-H ADMIN</Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <DropdownNav title={navDropdownIcon} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Button variant="link" onClick={handleLogout} className="w-100 text-center">
                            Logout
                        </Button>
                    </DropdownNav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Brand = styled(Navbar.Brand)`
    letter-spacing: 1.5px;
    font-weight: 500;
`;

const AccountIcon = styled(AccountCircleIcon)`
    color:  #fff;
    margin-right: 10px;
    height: 40px !important;
    width: 40px !important;
`;

const DropdownNav = styled(NavDropdown)`
    margin-right: 65px;
    letter-spacing: 1.5px;
`;

export default Header
