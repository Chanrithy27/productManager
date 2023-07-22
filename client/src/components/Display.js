import React from 'react';

const Display = (props) => {
    const { products, setProducts } = props;
    return (
        <div>
            {
                products.map((products, index) => (
                    <div key = { index }>
                        <p> { products.content } </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;