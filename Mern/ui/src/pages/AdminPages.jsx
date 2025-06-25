import React, { useState } from "react";
import Create from "../component/Create";
import PrdocutList from "../component/PrdocutList";

const tb = [
  { name: "createProductForm", lable: "create" },
  { name: "prdocutList", lable: "product" },
];

const AdminPages = () => {
  const [update, setUpdate] = useState("");
  return (
    <div>
      {tb.map((arr) => (
        <button onClick={() => setUpdate(arr.name)}>{arr.lable}</button>
      ))}

      {update === "createProductForm" && <Create />}
      {update === "prdocutList" && <PrdocutList/>}
    </div>
  );
};

export default AdminPages;
