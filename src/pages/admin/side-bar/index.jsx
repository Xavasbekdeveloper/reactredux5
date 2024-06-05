import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

import "./side-bar.scss";

const SideBar = () => {
  return (
    <section className="sideBar">
      <h1 className="sideBar__title">Admin Dashboard</h1>
      <ul className="sideBar__list">
        <li>
          <NavLink to={"/admin/create-product"} className="sideBar__link">
            <IoCreateOutline /> <span>Create Product</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/manage-product"} className="sideBar__link">
            <MdOutlineManageAccounts /> <span>Manage Product</span>
          </NavLink>
        </li>
      </ul>
      <div className="sideBar__bottom">
        <Link className="sideBar__link" to={"/"}>
          Go home
        </Link>
      </div>
    </section>
  );
};

export default memo(SideBar);
