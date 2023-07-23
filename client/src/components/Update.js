import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const { _id } = useParams();
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ productTitle, setProductTitle ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setProductTitle(res.data.title);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${_id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res)
                navigate('/');
            })
            .catch((err) => {
                console.log("Error updating product", err);
            })
    }
    return (
        <form onSubmit={updateProduct}>
            
            <h1>
                Edit {productTitle}
            </h1>
            <div>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange = {(e) => setTitle(e.target.value)} name="title" value= { title } className="input-field"/>
                </p>
            </div>
            <div>
                <p>
                    <label>Price:</label>
                    <input type="number" onChange = {(e) => setPrice(e.target.value)} name="price" value= { price } className="input-field"/>
                </p>
            </div>
            <div>
                <p>
                    <label>Description:</label>
                    <input type="text" onChange = {(e) => setDescription(e.target.value)} name="description" value= { description } className="input-field"/>
                </p>
            </div>
            <button className="create-btn"><Link to='/' className="home-btn">Home</Link></button>
            <input type="submit" value="Save" className="create-btn"/>
        </form>
    )
}
export default Update;