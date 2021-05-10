import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
// BOOTSTRAP
import { Button } from "react-bootstrap";
// ICONS
import GavelIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function SideNav() {
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
        <SideBar className="d-flex flex-column p-3 text-white bg-dark">

            <Title to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <GavelIcon />
                <span className="fs-4">Auction House</span>
            </Title>

            <ElementList className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                        <HomeIcon className="mr-2" />
                        Home
                    </NavLink>
                </li>
    
                <li>
                    <NavLink to="/Products" className="nav-link">
                        <ShopTwoIcon className="mr-2" />
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Customers" className="nav-link">
                        <AssignmentIndIcon className="mr-2"/>
                        Customers
                    </NavLink>
                </li>
                <li className="nav-item separator">
                    <NavLink to="/Account" className="nav-link">
                        <AccountCircleIcon className="mr-2" />
                        Account
                    </NavLink>
                </li>
                <li className="nav-item">
                    <Button variant="link" onClick={handleLogout} className="w-100 nav-link">
                            <ExitToAppIcon className="mr-2" />
                            Logout
                    </Button>
                </li>
            </ElementList>
        </SideBar>
    )
}

const SideBar = styled.div`
    width: 20%;
    height: 100%;
    min-width: 200px;
`;

const Title = styled(NavLink)`
    width: 100%;
    margin: 15px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #FFF;

    span{
        margin-left: 15px;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 1.5px;
    }
`;

const ElementList = styled.ul`
    li{
        margin-top: 10px;
    }
    li > a,  li > Button{
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        letter-spacing: 1.3px;
    }
    li > a:hover, li > Button:hover {
        color: #000;
        background-color: #fff;
        font-weight: 700;
    }

    .separator{
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;

    }
`;

export default SideNav
