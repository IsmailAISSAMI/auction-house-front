import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
// ICONS
import GavelIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


function SideNav() {
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
    li > a {
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        letter-spacing: 1.3px;
    }
    li > a:hover {
        color: #000;
        background-color: #fff;
        font-weight: 700;
    }
`;

export default SideNav
