import React from "react";

const DeleteModel = ({ isOpen, onclose, onComfirm }) => {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h3>Are you sure</h3>
        <p>this action cannot be undone.</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={onclose}
          style={{
            backgroundColor: "#ccc",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Cancel
        </button>
        <button
          onClick={onComfirm}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModel;
