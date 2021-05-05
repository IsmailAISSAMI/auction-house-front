import React from 'react';
import styled from "styled-components";
import SideNav from "../components/SideNav";
import Header from "../components/Header";

function Admin() {

  return (
    <Container>
      <Header />
      <Content>
        <SideNav />
        <Dashboard>

        </Dashboard>
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
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

const Dashboard= styled.div`
    width: 70%;
    min-height: 100vh;
    box-sizing: border-box;
    height: 100%;
    flex: right;
`;

export default Admin;
