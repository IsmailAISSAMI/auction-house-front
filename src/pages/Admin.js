import React from 'react';
import styled from 'styled-components';
import SideNav from '../components/SideNav';

function Admin() {
    return (
        <Container>
            <Content>
                <SideNav />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    height: 100%;
`;

export default Admin
