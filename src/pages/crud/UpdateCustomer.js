import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//COMPONENTS
import SideNav from "../../components/SideNav";

function UpdateCustomer() {
  //GET CUSTOMER DATA 
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

  // FORM DATA
  const emailRef = useRef();
  const passwordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const phoneNumberRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios.patch(`http://localhost:3030/api/v1/customers/${id}`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        lastName: lastNameRef.current.value,
        firstName: firstNameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        street: streetRef.current.value,
        city: cityRef.current.value,
        country: countryRef.current.value,
        zip: zipRef.current.value
        
      }).then(()=>{
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
        <AccountInfo>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">UPDATE INFORMATIONS</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Label>Email</Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={customer.email}
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Label>Password</Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to guard the same password!"
                  />
                </Form.Group>
                <Form.Group id="lastName">
                  <Label>Last Name</Label>
                  <Form.Control
                    type="text"
                    ref={lastNameRef}
                    required
                    defaultValue={customer.lastName}
                  />
                </Form.Group>
                <Form.Group id="firstName">
                  <Label>First Name</Label>
                  <Form.Control
                    type="text"
                    ref={firstNameRef}
                    required
                    defaultValue={customer.firstName}
                  />
                </Form.Group>
                <Form.Group id="phoneNumber">
                  <Label>Phone Number</Label>
                  <Form.Control
                    type="text"
                    ref={phoneNumberRef}
                    required
                    defaultValue={customer.phoneNumber}
                  />
                </Form.Group>
                <Form.Group id="street">
                  <Label>Street</Label>
                  <Form.Control
                    type="text"
                    ref={streetRef}
                    required
                    defaultValue={customer.street}
                  />
                </Form.Group>
                <Form.Group id="city">
                  <Label>City</Label>
                  <Form.Control
                    type="text"
                    ref={cityRef}
                    required
                    defaultValue={customer.city}
                  />
                </Form.Group>
                <Form.Group id="country">
                  <Label>Country</Label>
                  <Form.Control
                    type="text"
                    ref={countryRef}
                    required
                    defaultValue={customer.country}
                  />
                </Form.Group>
                <Form.Group id="zip">
                  <Label>zip</Label>
                  <Form.Control
                    type="text"
                    ref={zipRef}
                    required
                    defaultValue={customer.zip}
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/Customers" className="btn btn-link">Return</Link>
          </div>
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
  justify-content: center;
  align-items: center;

  .card {
    width: 50%;
    overflow: scroll;

  }
`;

const Label = styled.div`
  text-align: left;
`;


export default UpdateCustomer;
