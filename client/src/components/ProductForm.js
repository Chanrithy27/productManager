import axios from 'axios';
import React, { useState } from 'react';
const ProductForm = (props) => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")
    const { products, setProducts } = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setProducts([...products, {
            content: title, price, description
        }])
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProducts([...products, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <form onSubmit={onSubmitHandler}>
            
            <h1>
                Product Manager
            </h1>
            <div>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange = {(e) => setTitle(e.target.value)} name="title" className="input-field"/>
                </p>
            </div>
            <div>
                <p>
                    <label>Price:</label>
                    <input type="number" onChange = {(e) => setPrice(e.target.value)} name="price" className="input-field"/>
                </p>
            </div>
            <div>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange = {(e) => setDescription(e.target.value)} name="description" className="input-field"/>
                </p>
            </div>
            <input type="submit" value="Create Product" className="create-btn"/>
        </form>
    )
};
export default ProductForm;
