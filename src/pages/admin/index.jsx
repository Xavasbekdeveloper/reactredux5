import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./side-bar";

import "./admin.scss";

const Admin = () => {
  return (
    <section className="admin">
      <SideBar />
      <Outlet />
    </section>
  );
};

export default memo(Admin);
