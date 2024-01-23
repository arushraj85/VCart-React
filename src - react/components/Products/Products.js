import { useState, useEffect } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
// import Form from "./Form";
import Loader from "../UI/Loader";

// const items = [
//   {
//     id: 0,
//     price: 450,
//     discountedPrice: 340,
//     title: "books",
//     thumbnail: "assets/placeholder.png",
//   },
//   {
//     id: 1,
//     pricing: 450,
//     discountedPricing: 340,
//     title: "books2i",
//     thumbnail: "assets/placeholder.png",
//   },
//   {
//     id: 2,
//     pricing: 450,
//     discountedPricing: 340,
//     title: "books",
//     thumbnail: "assets/placeholder.png",
//   },
//   {
//     id: 3,
//     pricing: 450,
//     discountedPricing: 340,
//     title: "books",
//     thumbnail: "assets/placeholder.png",
//   },
// ];

const Products = ({ onAddItem, onRemoveItem, eventState }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    //  fetch(`https://react-guide-23-607f8-default-rtdb.firebaseio.com/items.json`)
    //  .then(response=>response.json())
    //  .then(data => console.log(data))
    async function fetchItems() {
      try {
        const response = await axios(
          `https://react-guide-23-607f8-default-rtdb.firebaseio.com/items.json`
        );
        // console.log(response)
        const data = response.data;
        // console.log(data)
        const transformData = data.map((item, index) => {
          return {
            ...item,
            quantity: 0,
            id: index,
          };
        });
        setItems(transformData);
        setLoader(false);
        // console.log(transformData);
      } catch (error) {
        console.log("error :" + error);
        setLoader(true);
      }
    }
    fetchItems();
  }, []);

  useEffect(() => {
    if (eventState.id > -1) {
      if (eventState.type === 1) {
        handleAddCart(eventState.id);
        // console.log(eventState.id)
      } else if (eventState.type === -1) {
        handleRemoveCart(eventState.id);
      }
    }
  }, [eventState]);

  const handleAddCart = (id) => {
    let data = [...items];
    // console.log(data)
    let index = data.findIndex((i) => i.id === id);
    // console.log(index)

    if (data[index].quantity < 5) {
      data[index].quantity += 1;
      setItems([...data]);
      // console.log(data);

      onAddItem(data[index]);
      // console.log(data[index]);
    }
  };

  const handleRemoveCart = (id) => {
    // let index=presentCartItems.indexOf(id)
    // // console.log(index)
    // if(index!==-1){
    //   let items=[...presentCartItems]
    //   // console.log(items)
    // items.splice(index,1)
    //   setPresentCartItems([...items])
    //   // console.log([...items])
    //   onRemoveItem();
    // }

    let data = [...items];
    let index = data.findIndex((i) => i.id === id);
    if (data[index].quantity !== 0) {
      // console.log(data[index])
      data[index].quantity -= 1;
      setItems([...items]);
      onRemoveItem(data[index]);
    }

    // console.log(id)
  };

  return (
    <>
      <div className={"product-wrapper"}>
        {/* <div className={"form"}>
      <Form item = {item} onSubmission ={submitForm} onInput={inputHandler}/>
  </div> */}
        <div>
          <div>
            {items.map((item) => {
              return (
                <ListItem
                  onAddItem={handleAddCart}
                  onRemoveItem={handleRemoveCart}
                  key={item.id}
                  data={item}
                  // handleUpdate={handleUpdate}
                />
              );
            })}
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
