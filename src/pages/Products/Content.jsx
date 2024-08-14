import React from "react";

const Content = ({ closeModal, Data }) => {
  const handleContent = () => {
    console.log("oki");
    closeModal();
  };

  return (
    <>
      <h1>Hello World! {Data.id}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eius itaque molestiae sit quidem ullam, quis ut molestias quas dolores
        cum ratione, sint quibusdam iusto.
      </p>
      <button className="close-btn" onClick={handleContent}>
        OK
      </button>
    </>
  );
};

export default Content;
