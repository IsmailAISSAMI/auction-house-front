import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
//BOOTSTRAP
import { Card } from "react-bootstrap";
//COMPONENTS
import SideNav from "../../components/SideNav";

function GetProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:3030/api/v1/products/${id}`
      );
      console.log(response.data);
      setProduct(response.data);
    };
    getProduct();
  });

  return (
    <Container>
      <Content>
        <SideNav />
        <AccountInfo>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">PRODUCT DETAILS</h2>
              <img src={product.urlImg}></img>
              <Card.Text>
                <Label>Title:</Label>
                <VarContent>
                  {product.title}
                </VarContent>
              </Card.Text>
              <Card.Text>
                <Label>Description:</Label>
                <VarContent>{product.description}</VarContent>
              </Card.Text>
              <Card.Text>
                <Label>Price:</Label>
                <VarContent>{product.price}</VarContent>
              </Card.Text>

              <Card.Text>
                <Label>Type:</Label>
                <VarContent>{product.type}</VarContent>
              </Card.Text>
              <Card.Text>
                <Label>Price:</Label>
                <VarContent>{product.price}</VarContent>
              </Card.Text>
              <Card.Text>
                <Label>Time Left:</Label>
                <VarContent>{product.timeLeft}</VarContent>
              </Card.Text>
              
              <Link to="/Products" className="btn btn-primary">
                Return
              </Link>
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
    overflow: scroll;

    .card-body > img {
        width: 100%;
        height: 500px;
    }
    
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

export default GetProduct;
