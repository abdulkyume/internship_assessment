import React, { useState } from "react";
import Inputs from "../shared/Inputs/Inputs";
import { register } from "../../api";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Layout1 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalMessage, setmodalMessage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFormData = async (e) => {
    e.preventDefault();
    const formData = [{
      name: e.target[0].value,
      dob: e.target[1].value,
      email: e.target[2].value,
      tel: e.target[3].value,
    }];

    const response = await register(formData);
    if (response.status === 200) {
      setmodalMessage(response.data);
      openModal();
      e.target.reset();
    }
    else{
      setmodalMessage("Server Error!! Can not Register");
      openModal();
    }
  };

  const customBtn = {
    backgroundColor: "#5DADF7",
    border: "none",
    padding: "4px 8px 4px 8px",
  };
  return (
    <section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalMessage}
      </Modal>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{height:"75vh"}}>
          <form onSubmit={handleFormData} id="myform">
            <div className="form-group row my-4">
              <label
                htmlFor="inputfullname"
                className="col-sm-2 col-md-3 col-lg-2 col-form-label fw-bold"
              >
                Full Name:
              </label>
              <div className="col-sm-10 col-md-9 col-lg-10">
                <Inputs type="text" classs="form-control" id="inputfullname" />
              </div>
            </div>
            <div className="form-group row my-4">
              <label
                htmlFor="inputdob"
                className="col-lg-2 col-sm-2 col-md-3 col-form-label fw-bold"
              >
                Date Of Birth:
              </label>
              <div className="col-sm-10 col-md-9 col-lg-10">
                <Inputs type="date" classs="form-control" id="inputdob" />
              </div>
            </div>
            <div className="form-group row my-4">
              <label
                htmlFor="inputEmail"
                className="col-sm-2 col-md-3 col-lg-2 col-form-label fw-bold"
              >
                Email:
              </label>
              <div className="col-sm-10 col-md-9 col-lg-10">
                <Inputs type="email" classs="form-control" id="inputEmail" />
              </div>
            </div>
            <div className="form-group row my-4">
              <label
                htmlFor="inputphn"
                className="col-lg-2 col-sm-2 col-md-3 col-form-label fw-bold"
              >
                Phone Number:
              </label>
              <div className="col-sm-10 col-md-9 col-lg-10">
                <Inputs type="tel" classs="form-control" id="inputphn" />
              </div>
            </div>
            <div className="form-group my-4 text-end">
              <button type="submit" style={customBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Layout1;
