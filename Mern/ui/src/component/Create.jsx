import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [productName, setProductName] = useState("");

  const file =  e.target.file[0]
  const render = new FileReader();
  render.onloadend = () =>{
         render.readAsDataURL
         setProductName({...productName , file.result  })
         render.readAsDataURL
  }


  const handleClick = async () => {
    await axios.post("http://localhost:9000"  , )
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select name="category" id="">
        <option value="">select value</option>
        <option value="BIKE">bike</option>
        <option value="CAR">car</option>
      </select>
      <input type="file" name="name" accept="image/*" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Create;
