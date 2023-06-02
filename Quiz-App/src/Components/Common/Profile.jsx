import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "@mui/material";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and update user details
    closeModal();
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Button
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={openModal}
      >
        Edit Details
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Edit User Details"
      >
        <h2>Edit User Details</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="d-flex">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>

            <div className="d-flex">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Button
              variant="contained"
              style={{ marginRight: "1rem" }}
              type="submit"
            >
              Save
            </Button>
            <Button variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
