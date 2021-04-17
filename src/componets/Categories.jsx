import React, { Children } from "react";
import "../assets/styles/componets/Categories.scss";

const Categories = ({ children }) => (
  <div className="categories">
    <h3 class="categories__title">Mi lista</h3>
    {children}
  </div>
);

export default Categories;
