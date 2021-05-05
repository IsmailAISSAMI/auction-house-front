import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import SideNav from "../components/SideNav";
import Header from "../components/Header";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          const response = await axios.get(`http://localhost:3030/api/v1/products`);
          console.log(response.data);
          setProducts(response.data);
          
        };
        getProducts();
    });

    return (
        <Container>
            <Header />
            <Content>
                <SideNav />
                <Dashboard>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr>
                                <td><ProductImg src={product.urlImg} /></td>
                                <td>{product.title}</td>
                                <td>{product.price} €</td>
                                <td>{product.type}</td>
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
        /* display: flex;
        justify-content: center;
        align-items: center; */
        text-align: center;
        line-height: 50px;
    }
`;

const ProductImg= styled.img`
    height: 120px;
    width: 100px;  
`;

export default Products
