import AddToCartIcon from "../../../assets/icons/cart.jpeg";
import { useState } from "react";
import Modal from "../../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addItemHandler, RemoveItemHandler } from "../../../actions";

const ListItem = ({ data }) => {
  // const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const item = useSelector((state) => 
    state.items.find((item) => item.id === data.id)
  );
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch(addItemHandler(data));
    // console.log(data)
  };

  const handleSub = (e) => {
    e.stopPropagation();
    dispatch(RemoveItemHandler(data.id));
  };

  const handleModal = () => {
    setModal(!modal);
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

        {!item || item?.quantity < 1 ? (
          <button className={"cart-add"} onClick={handleAdd}>
            <span>Add to Cart</span>
            <img className={"icon"} src={AddToCartIcon} alt="Cart Icon" />
          </button>
        ) : (
          <div className={"cart-addon"}>
            <button onClick={handleSub}>
              <span>-</span>
            </button>
            <span>{item.quantity}</span>
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

              {!item || item?.quantity < 1 ? (
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
                  <span>{item.quantity}</span>
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
