import React from "react";

const ProductsView = ({ products }) => {
  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.brand}</h2>
            <p>Model: {product.model}</p>
            <p>Price: {product.price}</p>
            <img
              src={product.imgUrl}
              alt={`${product.brand} ${product.model}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsView;
