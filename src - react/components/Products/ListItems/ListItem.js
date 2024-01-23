import AddToCartIcon from "../../../assets/icons/cart.jpeg";
import { useState } from "react";
import Modal from "../../UI/Modal";

const ListItem = ({ data, onAddItem, onRemoveItem }) => {
  // const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    // if (count >= 5) {
    //   alert(`${data.title} more than 5 cannot be added`);
    // } else setCount(count + 1);
    onAddItem(data.id);
    // console.log(data.id)
  };

  const handleSub = (e) => {
    e.stopPropagation();
    // if (count === 0) {
    //   return;
    // }
    // if (count === 1) {
       onRemoveItem(data.id);
    //   // console.log(data.id)
    // }
    // setCount(count - 1);
  };

  const handleModal = () => {
    setModal(!modal)
  };

  return (
    <>
      <div onClick={handleModal} className={"item-card"}>
        <img className={"img-fluid"} src={data.thumbnail} alt="not found" />
        <div className={"item-card__information"}>
          <div className={"pricing"}>
            <span>{data.discountedPrice} </span>
            <small>
              <strike>{data.price}</strike>
            </small>
          </div>
          <div className={"title"}>
            <h3>{data.title}</h3>
          </div>
        </div>

        {data.quantity < 1 ? (
          <button className={"cart-add"} onClick={handleAdd}>
            <span>Add to Cart</span>
            <img className={"icon"} src={AddToCartIcon} alt="Cart Icon" />
          </button>
        ) : (
          <div className={"cart-addon"}>
            <button onClick={handleSub}>
              <span>-</span>
            </button>
            <span>{data.quantity}</span>
            <button onClick={handleAdd}>
              <span>+</span>
            </button>
          </div>
        )}
        {/* <div>
          <button onClick={() => handleUpdate(data.id)}>Update</button>
        </div> */}
      </div>
      {modal && (
        <Modal onClose={handleModal}>
          <div className="item-card__modal">
            <div className="img-wrap">
              <img
                className={"img-fluid"}
                src={data.thumbnail}
                alt="not found"
              />
            </div>
            <div className="meta">
              <h3>{data.title}</h3>
              <div className={"pricing"}>
                <span>{data.discountedPrice} </span>
                <small>
                  <strike>{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>

              {data.quantity < 1 ? (
                <button
                  className={"cart-add cart-add__modal"}
                  onClick={handleAdd}
                >
                  <span>Add to Cart</span>
                  <img className={"icon"} src={AddToCartIcon} alt="Cart Icon" /> 
                </button>
              ) : (
                <div className={"cart-addon cart-addon__modal"}>
                  <button onClick={handleSub}>
                    <span>-</span>
                  </button>
                  <span>{data.quantity}</span>
                  <button onClick={handleAdd}>
                    <span>+</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ListItem;
