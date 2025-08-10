import React from 'react';
import './Products.css';

const Products = ({ addToCart }) => {
  const productList = [
    {
      name: 'Mole Trap Basic',
      price: 799,
      description: 'One unit with manual guide'
    },
    {
      name: 'Mole Trap Pro',
      price: 1499,
      description: 'Two units with support'
    }
  ];

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <h2>Our Product: Mole Trap</h2>
        <div className="product-cards">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price}</strong></p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
