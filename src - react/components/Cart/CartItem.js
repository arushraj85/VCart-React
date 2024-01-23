const CartItem = ({ data, onDecreaseItem, onIncreaseItem }) => {
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
          <button onClick={() => onDecreaseItem(data.id)}>-</button>
          <span className="counter">{data.quantity}</span>
          <button onClick={() => onIncreaseItem(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
