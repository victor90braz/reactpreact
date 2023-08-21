import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://itx-frontend-test.onrender.com/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <h1>List of products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.brand}</h2>
            <p>Model: {product.model}</p>
            <p>Price: {product.price}</p>
            <img
              src={product.imgUrl}
              alt={`${product.brand} ${product.model}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
