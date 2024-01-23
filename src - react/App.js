import React from "react";
import { useState } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";

function App() {
  const [cart, setCart] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: '',
  });

  const onAddItem = (item) => {
    // console.log(item)
    // setCart(cart + 1);
    // console.log(item.id)
    let items = [...cart];
    // console.log(items)
    let index = items.findIndex((i) => i.id === item.id);
    //  console.log(items)
    if (index !== -1) {
      items[index] = item;

      // console.log( items[index].quantity)
    } else {
      items.push(item);
    }
    setCart([...items]);
    //  console.log([...items])
  };

  const onRemoveItem = (item) => {
    let items = [...cart];
    let index = items.findIndex((i) => i.id === item.id);
    // console.log(index);
    // console.log(items[index]);
    if (items[index].quantity === 0) {
      // console.log(items)
      items.splice(index, 1);
    }
    //  else{
    //   items[index] = item
    //   // console.log( items[index] )
    //  }

    setCart([...items]);
    // setCart(cart - 1);
  };

  const handleEventQueue = (id, type) => {
    // console.log(id, type);
    setEventQueue({
      id,
      type
    });
  };

  return (
    <>
      <Header
        count={cart.length}
        items={cart}
        onHandleEvent={handleEventQueue}
      />
      <Subheader />
      <Products onAddItem={onAddItem} onRemoveItem={onRemoveItem} eventState={eventQueue}/>
    </>
  );
}

export default App;
