import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPages = () => {
  const {category} = useParams
  useEffect(() => {
    const categoryProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/api/categoryproduct"+category
        );
        console.log(res.data);
      } catch (error) {
        console.log("error in category ", error.message);
      }
    };
    categoryProduct();
  });
  return (
    <div>
      {category.map(() => (
        <>
          <img src={item.image} />
        </>
      ))}
    </div>
  );
};

export default CategoryPages;
