import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const Product = ({ product }) => {
    const { title, design, price, image } = product;
    return (

        <Container className='mx-auto'>
            <h2 style={{ color: 'indianred' }}>Manage All Products</h2>

            <div className='item'>
                {
                    <div>
                        <Card style={{ border: 'none', marginTop: '20px' }}>
                            <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={image} />
                            <Card.Body className='mt-0'>
                                <Card.Title style={{ height: '50px' }} >{title}</Card.Title>
                                <Card.Title>Design by: {design}</Card.Title>
                                <Card.Title>Price: ${price}</Card.Title>
                                <Button style={{ width: '90%', height: '2rem', borderRadius: '10px', backgroundColor: 'goldenrod' }} className="warning" >Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </div>

        </Container>

    );
};

export default Product;