import React, { useState, useEffect } from "react";
import Dialog from "./Dialog";

const BioItem = ({ name, age, id, handleDelete }) => {
  const [open, setOpen] = useState(false);

  const [bio, setBio] = useState({
    name: "",
    age: "",
    id: "",
  });

  useEffect(() => {
    const selectedBio = { name, age, id };
    setBio(selectedBio);
  }, [name, age, id]);

  const handleCloseModal = () => setOpen(false);

  const handleChange = (e) => {
    setBio({ ...bio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, q) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <div className="list-item">
        <h1>
          Name : {name} and Age : {age}
        </h1>
        <button>Remove</button>
        <button>Edit</button>
      </div>

      {/* Edit Modal */}
      <Dialog
        open={open}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        dialogItem={bio}
        handleChange={handleChange}
      />
    </>
  );
};

export default BioItem;
