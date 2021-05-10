import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
//BOOTSTRAP
import { Form, Button, Card, Alert } from "react-bootstrap";
//COMPONENTS
import SideNav from "../components/SideNav";
//ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Account() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/Admin");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <Content>
        <SideNav />
        <AccountInfo>
          <AccountIcon />
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">MY ACCOUNT</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Label>Email</Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
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
                <Form.Group id="password-confirm">
                  <Label>Password Confirmation</Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to guard the same password!"
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/Admin">Cancel</Link>
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
  }
`;

const Label = styled.div`
  text-align: left;
`;

const AccountIcon = styled(AccountCircleIcon)`
  height: 80px !important;
  width: 80px !important;
`;
