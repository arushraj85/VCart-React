import { Backdrop } from "./Loader";
import  ReactDOM from "react-dom";

const Modal = ({onClose,children}) =>{
    return(
<>
{
    ReactDOM.createPortal(
        <>
        <Backdrop onClose={onClose}/>
        <div className="modal">
            <button type='close' onClick={()=>onClose()}>X</button>
            <div className="content">{children}</div>
        </div>
        </>
        ,
        document.getElementById('modal-root')
    )
}
</>
    )
}

export default Modal;