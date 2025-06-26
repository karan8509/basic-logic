import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [category , setCategory] = useState("")

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/create-product" , {productName , image , category});
      console.log("res->" , res)
    } catch (error) {
      console.log("error in Send erro")
    }
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select name="category" id=""  value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">select value</option>
        <option value="BIKE">bike</option>
        <option value="CAR">car</option>
      </select>
      <input
        type="file"
        name="name"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Create;
