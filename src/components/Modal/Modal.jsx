import styles from "./Modal.module.css"
import { useOutletContext } from "react-router-dom";

const Modal = () => {
  const {isActive} = useOutletContext();
  const classes = styles["modal-div"] + (isActive ? ` ${styles["active-modal"]}` : "")
  return (
    <div className={classes}>
      
    </div>
  );
}

export default Modal;