import { AiOutlineClose } from "react-icons/ai";
import "./index.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="close-modal" onClick={handleClose}>
          <AiOutlineClose
            style={{
              color: "white"
            }}
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
