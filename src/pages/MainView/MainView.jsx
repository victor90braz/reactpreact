import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import ProductsView from "../../components/ProductsView/ProductsView";

const MainView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://itx-frontend-test.onrender.com/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2>List View</h2>
      <Search />
      <ProductsView products={products} />
    </>
  );
};

export default MainView;
