import React from 'react';
import './App.css';
import './index.css';
import './Product.js';
import './Tile.js';
import Product from "./Product";
import Tile  from './Tile';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
      <nav>
        <button type="button"
                onClick={() => console.log("to the collection!")}>to the collection</button>
        <button type="button"
            onClick={() => console.log("shop all bags!")}>shop all bags</button>
        <button type="button"
            onClick={() => console.log("pre-orders!")} disabled type="button">pre-orders</button>
      </nav>
          <main>
              <Product
                  sellingpoint="Best seller"
                  image={bag1}
                  title="The handy bag"
                  price="400€"
              />
              {/*<article className={product}>*/}
              {/*    <span>Best seller</span>*/}
              {/*    <img src="/src/assets/bag_1.png" alt="handy bag"/>*/}
              {/*    <p>The handy bag</p>*/}
              {/*    <h4>400€</h4>*/}
              {/*</article>*/}
              <Product
                  sellingpoint="Best seller"
                  image={bag2}
                  title="The stylish bag"
                  price="250€"
              />
              {/*  <article>*/}
              {/*      <span>Best seller</span>*/}
              {/*      <img src="./assets/bag_2.png" alt="stylish bag"/>*/}
              {/*      <p>The stylish bag</p>*/}
              {/*      <h4>250 €</h4>*/}
              {/*  </article>*/}
              <Product
                  sellingpoint="Best seller"
                  image={bag3}
                  title="The simple bag"
                  price="300€"
              />
              {/*  <article>*/}
              {/*      <span>New collection</span>*/}
              {/*      <img src="./assets/bag_3.png" alt="simple bag"/>*/}
              {/*      <p>The simple bag</p>*/}
              {/*      <h4>300 €</h4>*/}
              {/*  </article>*/}
              <Product
                  sellingpoint="Best seller"
                  image={bag4}
                  title="The trendy bag"
                  price="150€"
              />
            {/*  <article>*/}
            {/*      <span>New collection</span>*/}
            {/*      <img src="./assets/bag_4.png" alt="trendy bag"/>*/}
            {/*      <p>The trendy bag</p>*/}
            {/*      <h4>150 €</h4>*/}
            {/*  </article>*/}
          </main>
<footer>
    <Tile
                title="the brand"
        tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla facilisis quam vestibulum molestie. Mauris luctus porttitor urna ac vehicula. Etiam quis lectus ut lacus pellentesque finibus."
    />
    {/*<section>*/}
    {/*    <h2>the brand</h2>*/}
    {/*    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla facilisis quam vestibulum molestie. Mauris luctus porttitor urna ac vehicula. Etiam quis lectus ut lacus pellentesque finibus."</p>*/}
    {/*</section>*/}
    <Tile
        image={brand}
    />
    {/*<section>*/}
    {/*    <img src="./assets/brand.png"/>*/}
    {/*</section>*/}
    <Tile
        image={our_story}
    />
    {/*<section>*/}
    {/*    <img src="./assets/our_story.png" alt="photo of models"/>*/}
    {/*</section>*/}
    <Tile
        title="our story"
        tekst="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla facilisis quam vestibulum molestie. Mauris luctus porttitor urna ac vehicula. Etiam quis lectus ut lacus pellentesque finibus."
    />
    {/*<section>*/}
    {/*    <h2>our story</h2>*/}
    {/*    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla facilisis quam vestibulum molestie. Mauris luctus porttitor urna ac vehicula. Etiam quis lectus ut lacus pellentesque finibus."</p>*/}
    {/*</section>*/}
</footer>

      </>
  );
}

export default App;



