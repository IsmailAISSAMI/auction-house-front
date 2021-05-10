import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {  Button, Table } from "react-bootstrap";
import SideNav from "../components/SideNav";

function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const getCustomers = async () => {
          const response = await axios.get(`http://localhost:3030/api/v1/customers`);
          console.log(response.data);
          setCustomers(response.data);
          
        };
        getCustomers();
    });

    const deleteCustomer = (id) => {
        axios.delete(`http://localhost:3030/api/v1/Customers/${id}`)
        .then(()=>{
            console.log('The customer with the ID ', id, ' was deleted!');
        })
        .catch((err)=>{
            console.log('ERROR while deleting the customer with the ID ', id);
            console.log(err);
        })
        
    }

    return (
        <Container>
            <Content>
                <SideNav />
                <Dashboard>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First-name</th>
                                <th>Last-name</th>
                                <th>Country</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr>
                                <td>{customer.email}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.country}</td>
                                <td>
                                <Link to={{
                                    pathname: `/Customers/${customer.id}`
                                }} className="btn btn-primary">View</Link>
                                <Link to={{
                                    pathname: `/Customers/update/${customer.id}`
                                }} className="btn btn-success">Update</Link>
                                    <Button variant="danger" className="mx-1" onClick={() => deleteCustomer(customer.id)}>Delete</Button>
                                </td>
                            </tr>
                            
                        ))}
                        </tbody>
                    </Table>
                </Dashboard>
            </Content>
        </Container>
    )
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

const Dashboard= styled.div`
    flex: 1;    
    min-height: 100vh;
    box-sizing: border-box;
    height: 100%;
    padding: 20px 20px;
    td{
        text-align: center;
        line-height: 50px;
    }
`;

export default Customers
