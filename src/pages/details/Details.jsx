import React, { memo, useEffect } from "react";
import { useDetailsProductQuery } from "../../context/api/peoductsApi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { addWishlist } from "../../context/slice/wishlistSlice";

import "./details.scss";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);
  const { id } = useParams();
  let { data, isLoading, isError, isSuccess } = useDetailsProductQuery(id);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="details">
      <div className="container">
        <div className="details__container">
          <div className="details__left">
            <img src={data.url} alt={data.title} />
          </div>
          <div className="details__right">
            <h2>{data.title}</h2>
            <p>{data.category}</p>
            <p>${data.price}</p>
            <button onClick={() => dispatch(addWishlist(data))}>
              {wishlistData.some((el) => el.id === data.id) ? (
                <FaHeart color="crimson" />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Details);
