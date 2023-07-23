import React, { useState } from 'react';
import Display from '../components/Display';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    const [ products, setProducts ] = useState([]);

    return (
        <div>
            <ProductForm products = { products } setProducts = { setProducts }/>
            <Display products = { products } setProducts = { setProducts }/>
        </div>
    );
}

export default Main;