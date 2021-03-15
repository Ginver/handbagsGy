import React from 'react';

function Product({ sellingpoint, image, title, price}) {
    return (
        <article className="product">
            <span className="unique-selling">{sellingpoint}</span>
            <img src={image} alt={title}/>
            <p className="product-name">{title}</p>
            <h4 className="product-price">{price}</h4>
        </article>
    );
}

export default Product;