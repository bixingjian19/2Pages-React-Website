import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home() {
  const url = `https://5ffc464163ea2f0017bdc0be.mockapi.io/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <p className="font-bold text-2xl text-center text-red-500">
        There was an error please refresh later
      </p>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
