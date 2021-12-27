import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  // const [addItemName, setAddItemName] = useState('');
  // const [addQuantity, setAddQuantity] = useState('');
  // const [addUnits, setAddUnits] = useState('');
  const [itemData, setItemData] = useState({
    itemName: "",
    quantity: "",
    units: "",
  });

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("/list")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log("error in getting", error);
      });
  };

  const handleItemName = (event) => {
    setItemData((prevState) => {
      return { ...prevState, itemName: event.target.value };
    });
  };

  const handleItemQuantity = (event) => {
    setItemData((prevState) => {
      return { ...prevState, quantity: event.target.value };
    });
  };

  const handleItemUnits = (event) => {
    setItemData((prevState) => {
      return { ...prevState, units: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/list", itemData)
      .then((response) => {
        setItemData({
          ItemName: "",
          quantity: "",
          units: "",
        });
      })
      .catch((err) => {
        alert("error in adding an item");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <h2>Add an Item</h2>

      <form onSubmit={handleSubmit}>
        Item:
        <input
          value={itemData.itemName}
          type="text"
          onChange={handleItemName}
        />
        Quantity:
        <input
          value={itemData.quantity}
          onChange={handleItemQuantity}
          type="text"
        />
        Units:
        <input value={itemData.units} onChange={handleItemUnits} type="text" />
        <button type="submit">Save</button>
      </form>

      <div className="item">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                {item.quantity} {item.unit}
                <div className="container">
                  <button className="btn">buy</button>
                  <button className="btn">remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
