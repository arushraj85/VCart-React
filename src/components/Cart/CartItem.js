import { useDispatch, useSelector } from "react-redux";
import { addItemHandler,RemoveItemHandler } from "../../actions";

const CartItem = ({ data, onDecreaseItem, onIncreaseItem }) => {

  const item = useSelector((state) => 
  state.items.find((item) => item.id === data.id)
);

const dispatch= useDispatch()

const handleAdd = (e) => {
  e.stopPropagation();
  dispatch(addItemHandler(data));
  // console.log(data)
};

const handleSub = (e) => {
  e.stopPropagation();
  dispatch(RemoveItemHandler(data.id));
};

  return (
    <div className="checkout-modal_list-item">
      <div className="img-wrap">
        <img className="img-fluid" src={data.thumbnail} alt={data.title} />
      </div>
      <div className="information">
        <div>
          <h4>{data.title}</h4>
          <div className="pricing">
            <span>{data.discountedPrice}</span>
            <small>
              <strike>{data.price}</strike>
            </small>
          </div>
        </div>
        <div className="cart-addon cart-addon__modal">
          <button onClick={handleSub}>-</button>
          <span className="counter">{item.quantity}</span>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
