import React from "react";

const AddProductModal = ({ addProduct, closeModal }) => {
  return (
    <div
      className="container-fluid position-fixed top-0 z-index-10"
      style={{ height: "100vh", backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={closeModal}
    >
      <div
        className="modal-dialog  card p-3 my-3 z-index-20"
        data-bs-backdrop="static"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content ">
          <div className="modal-header">
            <h3>Add Product</h3>
          </div>
          <div className="modal-body">
            <form
              onSubmit={() => {
                addProduct({
                  title: document.getElementById("title").value,
                  price: document.getElementById("price").value,
                });
                closeModal();
              }}
            >
              <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control" id="title" />

                <label for="price">Price</label>
                <input type="text" className="form-control" id="price" />

                <div className="p-2 d-flex gap-3">
                  <button className="btn btn-primary">Add</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
