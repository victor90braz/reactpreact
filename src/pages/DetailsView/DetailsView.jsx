import React, { useEffect, useState } from "react";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

const DetailsView = () => {
  const [product, setProduct] = useState({});
  const id = "ZmGrkLRPXOTpxsU4jjAcv";

  useEffect(() => {
    fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h2>Details View</h2>
      {product.id && (
        <div>
          <section>
            <img
              src={product.imgUrl}
              alt={`${product.brand} ${product.model}`}
            />
          </section>
          <section>
            <ProductDescription product={product} />
            <h3>Actions</h3>
          </section>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
