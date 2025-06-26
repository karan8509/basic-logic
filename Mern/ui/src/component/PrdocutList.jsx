import axios from "axios";
import { useEffect, useState } from "react";
const PrdocutList = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const futernew = async () => {
      const productget = await axios.get(
        "http://localhost:9000/api/getProduct"
      );
      const data = productget.data;

      setStore(data);
    };
    futernew();
  }, []);

  const handleDelete = async (id) => {
    try {
      const productId = await axios.delete(
        `http://localhost:9000/api/delete/${id}`
      );
      console.log("product -->", productId);
      const product = productId.filter((arr) => arr._id !== id);
      setStore(product);
      console.log("product  delete --> ", product);
    } catch (error) {
      console.log("Error in Delete Route", error.message);
    }
  };

  return (
    <div>
      {store.map((arr) => (
        <div key={arr.id}>
          <img src={arr.image} alt="" />
          <p>{arr.category}</p>
          <button onClick={() => handleDelete(arr._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default PrdocutList;
