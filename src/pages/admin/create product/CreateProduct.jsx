import React, { memo, useEffect, useState } from "react";

import "./createProduct.scss";
import { useCreateProductMutation } from "../../../context/api/peoductsApi";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(
    "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UF1000,1000_QL80_.jpg"
  );

  const navigate = useNavigate();

  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setCategory("");
      setPrice("");
      setImage("");
    }
  }, [isSuccess]);

  const handleCreate = (e) => {
    e.preventDefault();
    let newProduct = {
      title: name,
      category,
      price: +price,
      url: image,
    };

    createProduct(newProduct);
    navigate("/admin/manage-product");
  };

  return (
    <section className="create">
      <h2>Create Product</h2>
      <form onSubmit={handleCreate} action="" className="create__form">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter product name"
        />
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter product category"
        />
        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter product price"
        />
        <input
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter product image"
        />
        <button>Create</button>
      </form>
    </section>
  );
};

export default memo(CreateProduct);
