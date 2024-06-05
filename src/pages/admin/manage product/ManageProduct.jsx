import React, { memo } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../../context/api/peoductsApi";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./manageProduct.scss";

const ManageProduct = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [deleteProduct, { data: deletedData, isLoading: deletedIsLoading }] =
    useDeleteProductMutation();

  let products = data?.map((product) => (
    <div className="manage__card" key={product.id}>
      <div className="manage__card__img">
        <img src={product.url} alt={product.title} />
      </div>
      <div className="manage__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <div className="manage__btns">
          <button>
            <CiEdit />
          </button>
          <button onClick={() => deleteProduct(product.id)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="manage">
      <div className="manage__cards">{products}</div>
    </section>
  );
};

export default memo(ManageProduct);
