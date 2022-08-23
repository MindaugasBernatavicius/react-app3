import React, { useEffect, useRef, useState } from "react";

let flexContainer = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

let customW65 = {
  width: "65%",
};
let customW35 = {
  width: "35%",
};

const SequentialStateUpdates = () => {
  const [newItem, setNewItem] = useState({ name: "" });
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) localStorage.setItem("items", JSON.stringify(items));
    else setItems(JSON.parse(lsItems));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleInput = (e) => {
    setNewItem({ name: e.target.value });
  };

  const handleClick = (e) => {
    itemInput.current.value = "";
    // ... do not allow empty values
    // ... and repeated values by pressing "add" button
    if (newItem.name !== "") {
      setItems([...items, newItem]);
      setNewItem({ name: "" });
    }
  };

  const deleteItem = (index) => {
    let filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div style={flexContainer}>
      <div className="card w-25 text-bg-light">
        <div className="card-body">
          <h1 className="card-title">Items</h1>
          <div className="row p-3">
            <input
              id="input"
              type="text"
              className="form-control"
              style={customW65}
              ref={itemInput}
              onChange={handleInput}
            />
            <button
              className="btn btn-secondary"
              style={customW35}
              onClick={handleClick}
            >
              Click me
            </button>
          </div>
          <ul className="list-group">
            {items.length > 0 ? (
              items.map((item, idx) => (
                <li key={idx} className="list-group-item">
                  {item.name}
                  <button
                    onClick={() => {
                      deleteItem(idx);
                    }}
                    className="btn btn-warning float-end"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <div>No items found!</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SequentialStateUpdates;
