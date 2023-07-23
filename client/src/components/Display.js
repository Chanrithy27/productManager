import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Display = (props) => {
    const { products, setProducts } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <h1> Products </h1>
            {
                products.map((product, index) => (
                    <div key = { product._id } className="product-boxes">
                        <Link to = {`/products/${product._id}`} className="product-links"> { product.title }</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;