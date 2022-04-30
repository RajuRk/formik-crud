import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Allproducts() {
  let url = "https://6151d83c4a5f22001701d4ca.mockapi.io/users";

  let [products, setProducts] = useState([]);

  let navigate = useNavigate();

  let getProducts = async () => {
    let res = await axios.get(url);
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let productDelete = async (id) => {
    let confirm = window.confirm("Do you want to delete this product?");
    if (confirm) {
      let res = await axios.delete(`${url}/${id}`);
      getProducts();
    }
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((e, i) => {
          return (
            <div className="col-lg-4 col-md-4" key={i}>
              <div className="product-card">
                <div className="product-img">
                  <img src={e.picturelink} alt={e.name} />
                </div>
                <div className="product-name-price row">
                  <div className="col-md-6 prduct-title">
                    {e.name}
                    <br />₹ {e.price}
                  </div>
                  <div className="col-md-6 btns">
                    <i
                      className="fa fa-edit"
                      onClick={() => navigate(`/editproducts/${e.id}`)}
                    ></i>
                    &nbsp;&nbsp;&nbsp;
                    <i
                      className="fa fa-trash"
                      onClick={() => productDelete(e.id)}
                    ></i>
                  </div>
                </div>
                <div className="learn-more">
                  {/* <p onClick={() => navigate(`/productdetails/${e.id}`)}>
                    Learn More
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allproducts;
