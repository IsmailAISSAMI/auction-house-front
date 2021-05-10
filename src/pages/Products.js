import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Table, Button } from "react-bootstrap";
import SideNav from "../components/SideNav";

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

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:3030/api/v1/products/${id}`)
        .then(()=>{
            console.log('The product with the ID ', id, ' was deleted!');
        })
        .catch((err)=>{
            console.log('ERROR while deleting the product with the ID ', id);
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
                                <th>Product</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr>
                                <td><ProductImg src={product.urlImg} /></td>
                                <td>{product.title}</td>
                                <td>{product.price} €</td>
                                <td>{product.type}</td>
                                <td>
                                    <Link to={{
                                        pathname: `/Products/${product.id}`
                                    }} className="btn btn-primary">View</Link>
                                    <Button variant="success" className="mx-1">Update</Button>
                                    <Button variant="danger" className="mx-1" onClick={() => deleteProduct(product.id)}>Delete</Button>
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
        /* display: flex;
        justify-content: center;
        align-items: center; */
        text-align: center;
        line-height: 50px;
    }
`;

const ProductImg= styled.img`
    height: 120px;
    width: 120px;  
`;

export default Products
