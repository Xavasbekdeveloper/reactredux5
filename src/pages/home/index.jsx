import React, { Fragment, memo } from "react";
import Products from "../../components/product/Products";
import { useGetProductsQuery } from "../../context/api/peoductsApi";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <Fragment>
      <Products data={data} isLoading={isLoading} />
    </Fragment>
  );
};

export default memo(Home);
