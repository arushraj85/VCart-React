import { useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import OrderSuccess from "../UI/OrderSuccess";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItemHandler, addItemHandler, clearCartHandler } from "../../actions";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const [orderModal,setOrderModal] =useState(false)
 const items= useSelector(state=>state.items)
 const totalAmount = useSelector(state=>state.totalAmount)
 const dispatch=useDispatch()

  const handleModal = () => {
    setModal(!modal);
    // console.log(items);
  };

  const handleOrderModal = () => {
    setOrderModal(!orderModal)
    setModal(false)
    dispatch(clearCartHandler())
  };

  // const dispatchEvents= (type,item) => {
   
  //   if(type==='add'){
  //     dispatch(addItemHandler(item))
  //   }
  //   else if(type==='remove'){
  //     dispatch(RemoveItemHandler(item.id))
  //   }
  // }
  
  return (
    <>
      <button onClick={handleModal}>
        <span data-items={items.length}>Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart-plus"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      </button>
      {modal && (
        <Modal onClose={handleModal}>
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal_list">
              {items.length > 0 ? (
                items.map((item) => {
                  return (
                    <CartItem
                      data={item}
                      key={item.id}
                      // onIncreaseItem={item=>dispatchEvents('add',item)}
                      // onDecreaseItem={item=>dispatchEvents('remove',item)}
                    />
                  );
                })
              ) : (
                <div className="'empty-cart">
                  Please add something in your cart
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount!</h4>
                  <h4>
                    {totalAmount}
                    {" "}
                    INR
                  </h4>
                </div>
                <button onClick={handleOrderModal}>Order Now</button>
              </div>
            )}
          </div>
        </Modal>
      )}
      {
        orderModal && <OrderSuccess onClose={handleOrderModal}/>
      }
    </>
  );
};

export default Cart;
