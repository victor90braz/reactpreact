import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div key={product.id}>
      <section>
        <h3>Description</h3>
        <div>
          <h4>{product.brand}</h4>
          <p>Model: {product.model}</p>
          <p>Price: {product.price}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
