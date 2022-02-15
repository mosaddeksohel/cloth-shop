import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import './DeleteProduct.css'


const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-ravine-53752.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://young-ravine-53752.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }
    };
    return (
        <Container>
            <h2 style={{ color: 'indianred' }}>Manage All Products</h2>

            <div className='item'>
                {
                    products.map(product => <div
                        key={product._id}
                    >

                        <div>
                            <div>
                                <Card style={{ border: 'none', marginTop: '20px' }}>
                                    <Card.Img style={{ height: '230px' }} className="mb-0" variant="top" src={product.image} />
                                    <Card.Body className='mt-0'>
                                        <Card.Title style={{ height: '50px' }} >{product.title}</Card.Title>
                                        <Card.Title>Design by: {product.design}</Card.Title>
                                        <Card.Title>Price: ${product.price}</Card.Title>
                                        <Button style={{ width: '90%', height: '2rem', borderRadius: '10px', backgroundColor: 'goldenrod' }} className="warning" onClick={() => handleDelete(product._id)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>)

                }
            </div>

        </Container>
    );
};

export default DeleteProduct;