import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OneProduct = (props) => {

    const [ singleProduct, setSingleProduct ] = useState({});
    const {_id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setSingleProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [])
    
    return (
        <div>
            <h1> { singleProduct.title }</h1>
            <p>Price: ${ singleProduct.price }</p>
            <p>Description: { singleProduct.description }</p>
        </div>

    )
}
export default OneProduct;