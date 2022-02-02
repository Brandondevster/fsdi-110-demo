import "./catalog.css";
import Product from "./product";
import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

const Catalog = () => {
  // state vars are INMUTABLES
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
    console.log("Retrieved", data);
  };

  // hook to do something when the component is rendered the first time (only)
  useEffect(() => {
    // do this when the component loads
    loadCatalog();
  }, []); //, [] = dependencies, when a dependency change, run the fn again

  return (
    <div className="catalog">
      <h1>This is our selection</h1>
      <h3>We have {products.length} amazing products for you</h3>

      {products.map((prod) => (
        <Product key={prod._id} info={prod}></Product>
      ))}
    </div>
  );
};

export default Catalog;
