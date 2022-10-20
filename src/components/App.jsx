import React, { useState } from "react";

function App() {
  const [list, changeList] = useState([]);
  const [listItem, changeListItem] = useState("");
  function handleChange(event) {
    // listItem = event.target.value;

    changeListItem(event.target.value);
  }
  function addInput(event) {
    //list.push(listItem);
    var name = [];
    changeList((prevValue) => {
      return [...prevValue, listItem];
    });
    //showList();
    //console.log(list);
    changeListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={listItem} />
        <button>
          <span onClick={addInput}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {list.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
