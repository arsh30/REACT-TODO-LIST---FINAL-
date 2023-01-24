import React, { useState } from "react";

const TodoApp = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //   console.log(items);
  const addItem = () => {
    //   simple jo input data me likha usko kisi variable me store krwane ke liye we
    // have usestate hook -> Items me save krwalege
    if (!inputData) {
      alert("please enter something");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const removeItem = (id) => {
    // alert(id);
    let updatedItems = items.filter((elem, index) => {
      return id !== index;
    });
    setItems(updatedItems);
  };

  const clearAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="container">
        {/* <div className="img"></div> */}
        <figure>
          {/* <img src="" alt="" /> */}
          <h1>Image</h1>
          <figcaption>Add your List Here</figcaption>
        </figure>

        <div className="addItem input">
          <input
            type="text"
            placeholder="Enter your tasks"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {/* Aagr sirf input me pass krege inputData ki value toh Kuch Likh nahi payege
          so we have 1 more attribute onChange
           */}
          <button onClick={addItem}>Add Item</button>
        </div>

        {/* ITEMS ADDED -> Is is container, and each item means 1 single item*/}
        <div className="items-list showItems">
          {items.map((elem, index) => {
            return (
              <div
                className="each-item"
                key={index}
                style={{ display: "flex", paddingTop: "10px" }}
              >
                <h3>{elem}</h3>
                <button
                  onClick={() => removeItem(index)}
                  style={{
                    margin: "15px",
                    border: "1px solid red",
                  }}
                >
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>

        {/* clear all item */}
        <div className="clearAll">
          <button onClick={clearAll}>CHECKLIST</button>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
