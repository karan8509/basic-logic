import React from "react";
import "../index.css";
const Product = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", margin: "40px 0px" }}> Our Prduct</h1>
      <div className="main">
        <div className="filterbox">
          <h4>categroy</h4>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <div className="prodcut">
            product
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
