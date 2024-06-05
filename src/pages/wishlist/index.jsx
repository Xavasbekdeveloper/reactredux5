import React, { memo } from "react";
import Products from "../../components/product/Products";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let data = useSelector((state) => state.wishlistSlice.data);
  console.log(data);
  return <>{data.length ? <Products data={data} /> : <div>Empty</div>}</>;
};

export default memo(Wishlist);
