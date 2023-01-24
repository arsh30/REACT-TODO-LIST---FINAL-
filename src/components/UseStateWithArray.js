import React, { useState } from "react";

const UseStateWithArray = () => {
  const arr = [
    { id: 0, name: "Arshdeep", age: 22 },
    { id: 1, name: "simran", age: 22 },
    { id: 2, name: "dripti", age: 22 },
  ];
  const [myArr, setMyArr] = useState(arr);
  const clearData = () => {
    // arr = []; -> const ko hum empty nahi kr skte, so
    //   hame  use state hook chaiye taki component re -
    // render hoye
    setMyArr([]);
  };
  return (
    <div>
      {myArr.map((elem, index) => {
        return (
          <h1 key={elem.id}>
            Name: {elem.name} & Age:{elem.age}
          </h1>
        );
      })}
      <button onClick={clearData}>clear</button>
      {/* <h1>Name:Arshdeep & Age:26</h1> */}
    </div>
  );
};

export default UseStateWithArray;
