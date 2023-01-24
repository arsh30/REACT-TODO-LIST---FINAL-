import React, { useState } from "react";

const ReviseTodo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  //   console.log(items);

  const addItem = () => {
    if (!inputData) {
      alert("please eneter something");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const removeItem = (id) => {
    let updatedItems = items.filter((elem, index) => {
      return id !== index;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="container">
        <figure style={{ marginBottom: "10px" }}>
          <img src="" alt="MyImg" />
          <figcaption>Add your List Here!</figcaption>
        </figure>

        <div className="inputBox">
          <input
            type="text"
            placeholder="enter your task"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addItem}>Add Your Item</button>
        </div>

        {items.map((elem, index) => {
          return (
            <div key={index} className="each-item" style={{ display: "flex" }}>
              <h3>{elem}</h3>
              <button
                onClick={() => removeItem(index)}
                style={{ margin: "15px" }}
              >
                Remove Item
              </button>
            </div>
          );
        })}
        {/* <div className="each-item" style={{ display: "flex" }}>
          <h3>Apple</h3>
          <button style={{ margin: "15px" }}>Remove Item</button>
        </div> */}

        <div className="clear-All" style={{ marginTop: "20px" }}>
          <button onClick={removeAll}>ClearAll</button>
        </div>
      </div>
    </>
  );
};

export default ReviseTodo;
