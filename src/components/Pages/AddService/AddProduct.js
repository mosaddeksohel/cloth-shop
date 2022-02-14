import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/product', data)
            .then(res => {
                console.log(res)
            })

    };


    return (
        <div className='add-product'>
            <h4>Add a Products</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="product title" />
                <textarea {...register("description")} placeholder="product discription" />
                <input type="number" {...register("price")} placeholder="product price" />
                <input {...register("image url")} placeholder="image url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;