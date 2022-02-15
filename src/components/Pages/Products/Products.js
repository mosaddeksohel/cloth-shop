import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-ravine-53752.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            <h2>Our Products</h2>
            <div className='card'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;