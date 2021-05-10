import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
//BOOTSTRAP
import { Card } from "react-bootstrap";
//COMPONENTS
import SideNav from "../../components/SideNav";

function GetCustomer() {
  const { id } = useParams();

  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const getCustomer = async () => {
      const response = await axios.get(
        `http://localhost:3030/api/v1/customers/${id}`
      );
      console.log(response.data);
      setCustomer(response.data);
    };
    getCustomer();
  });

  return (
    <Container>
      <Content>
        <SideNav />
        <AccountInfo>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">ACCOUNT INFORMATION</h2>
              <Card.Text>
                  <Label>Full Name:</Label>
                  <VarContent>{customer.firstName} {customer.lastName}</VarContent>
              </Card.Text>
              <Card.Text>
                  <Label>Email:</Label>
                  <VarContent>{customer.email}</VarContent>
              </Card.Text>
              <Card.Text>
                  <Label>Phone Number:</Label>
                  <VarContent>{customer.phoneNumber}</VarContent>
              </Card.Text>
              <Card.Text>
                  <Label>Address:</Label>
                  <VarContent>{customer.street}, {customer.city}, {customer.zip}, {customer.country}.</VarContent>
              </Card.Text>
              <Link to="/Customers" className="btn btn-primary">Return</Link>
            </Card.Body>
          </Card>
        </AccountInfo>
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
  min-height: 100vh;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const AccountInfo = styled.div`
  flex: 1;
  min-height: 100vh;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .card {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .card-body > p {
        width: 100%;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
  }
`;

const Label = styled.div`
    font-weight: 600;
    flex: 1;
    text-align: left;
`;

const VarContent = styled.div`
    flex: 2;
    text-align: left;

`;

export default GetCustomer;
