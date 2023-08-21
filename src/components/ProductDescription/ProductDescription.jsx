import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div>
      <section>
        <h3>Description</h3>
        <ul>
          <li>
            <strong>Brand:</strong> {product.brand}
          </li>
          <li>
            <strong>Model:</strong> {product.model}
          </li>
          <li>
            <strong>Price:</strong> {product.price}
          </li>
          <li>
            <strong>CPU:</strong> {product.cpu}
          </li>
          <li>
            <strong>RAM:</strong> {product.ram}
          </li>
          <li>
            <strong>Operating System:</strong> {product.os}
          </li>
          <li>
            <strong>Display Resolution:</strong> {product.displayResolution}
          </li>
          <li>
            <strong>Battery:</strong> {product.battery}
          </li>
          <li>
            <strong>Primary Camera:</strong> {product.primaryCamera.join(", ")}
          </li>
          <li>
            <strong>Secondary Camera:</strong>{" "}
            {product.secondaryCmera.join(", ")}
          </li>
          <li>
            <strong>Dimensions:</strong> {product.dimentions}
          </li>
          <li>
            <strong>Weight:</strong> {product.weight}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductDescription;
