import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products,setProducts]= useState([])
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User logout successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  async function fetchProducts() {
    try {
      const url = "http://localhost:8080/products";
      const headers = {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      }
      const response = await fetch(url,headers);
      const result = await response.json();
      console.log(result);


      setProducts(result)
    } catch (err) {
      console.log("error", err);
    } 
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>logout</button>
      {
        products && products.map((item,i)=> (
          <ul key={i}>
            <span>{item.name} : {item.price} </span>
          </ul>
        ))
      }

      <ToastContainer />
    </div>
  );
};

export default Home;
