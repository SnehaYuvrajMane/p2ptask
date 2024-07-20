import { useState, useEffect } from "react";
import React from "react";
import AddProductModal from "./Components/AddProductModal";

const App = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const addProduct = (product) => {
    setData([...data, product]);
  };

  const deleteProduct = (itemIndex) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;
    const newData = data.filter((item, index) => index !== itemIndex);
    setData(newData);
  };

  return (
    <>
      <div className="container py-5 ">
        <div className="d-flex align-items-center justify-content-between p-3">
          <h1 className="text-center">Products</h1>
          <button className="btn btn-success" onClick={() => setModal(true)}>
            add product
          </button>
        </div>
        <div className="row row-cols-5 gap-3 mx-auto ">
          {data.map((item, index) => {
            return (
              <div class="card d-flex  mx-auto w-100 " key={index}>
                <div class="card-body d-flex justify-content-between align-items-center">
                  <h6 class="card-title fw-bold">{item.title}</h6>

                  <div className="d-flex justify-content-between align-items-center gap-xl-4 gap-2">
                    <h5>${item.price}</h5>
                    <p
                      class="btn btn-danger"
                      onClick={() => {
                        deleteProduct(index);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <AddProductModal closeModal={closeModal} addProduct={addProduct} />
      )}
    </>
  );
};

export default App;
