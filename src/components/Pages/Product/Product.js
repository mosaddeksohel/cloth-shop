import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const Product = ({ product }) => {
    const { title, design, price, image } = product;
    return (
        <>
            <div>

                <Container class className='product'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                <h5>Design By: {design}</h5>
                                <h5>Price: ${price}</h5>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Container>

            </div>
        </>
    );
};

export default Product;