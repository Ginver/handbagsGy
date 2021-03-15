import React from 'react';


function Tile ({ image, title, tekst }) {
    if (image) {
        return (
            <article className="product-tiles">
                <img src={image} alt={title}/>
            </article>
        )
    } else {
        return (
            <article className="product-tiles">
                <h2 className="product-title">{title}</h2>
                <p className="product-tekst">{tekst}</p>
            </article>
        );
    }
}

export default Tile;