import axios from 'axios';
import React from 'react';
import { useForm, reset } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/product', data)
            .then(res => {
                if (res.data.inseredtId) {
                    alert("Product added Successfully")
                }
                reset();
            })

    };


    return (
        <div className='add-product'>
            <h4>Add a Products</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="product title" />
                <input {...register("design")} placeholder="design" />
                <input type="float" {...register("price")} placeholder="product price" />
                <input {...register("image url")} placeholder="image url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;