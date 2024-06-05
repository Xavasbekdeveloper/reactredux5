import React, { memo } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../context/slice/wishlistSlice";
import { Link } from "react-router-dom";

const Products = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  let products = data?.map((product) => (
    <div className="products__card" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <div className="products__card__img">
          <img src={product.url} alt={product.title} />
        </div>
      </Link>
      <div className="products__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <button
          onClick={() => dispatch(addWishlist(product))}
          className="products__card__heart-btn"
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart color="white" />
          )}
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section className="products">
        <div className="container products__cards">{products}</div>
      </section>
    </>
  );
};

export default memo(Products);
