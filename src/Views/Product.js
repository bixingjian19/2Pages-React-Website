import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const url = `https://5ffc464163ea2f0017bdc0be.mockapi.io/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <p className="font-bold text-2xl text-center text-red-500">
        There was an error please refresh later
      </p>
    );
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="font-bold text-xl mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Product;
