import React from "react";
import Category from "../component/Category";

const pro = [
  { url: "/Car", lable: "Car", imageurl: "/bike.jpeg" },
  { url: "/Car", lable: "Car", imageurl: "/car1.jpeg" },
  { url: "/Car", lable: "Car", imageurl: "/car2.jpg" },
];

const HomePages = () => {
  return (
    <div>
      {pro.map((item) => (
        <Category item={item} key={item.id}   />
      ))}
    </div>
  );
};

export default HomePages;
