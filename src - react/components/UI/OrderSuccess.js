import Modal from "./Modal";
import OrderSuccessImage from '../../assets/icons/OrderSuccess.png'

const OrderSuccess = ({onClose}) => {
    return (
<Modal onClose={onClose}>
     <div className="order-container">
        <div className="order-container--success">
            <img src={OrderSuccessImage} alt="ordersuccess"/>
        </div>
     </div>
</Modal>
    )
}

export default OrderSuccess;