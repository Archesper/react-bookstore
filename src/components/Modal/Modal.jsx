import styles from "./Modal.module.css"
import { useOutletContext } from "react-router-dom";


const Modal = ({children}) => {
  const {isActive, toggleIsActive} = useOutletContext();
  const classes = styles["modal-div"] + (isActive ? ` ${styles["active-modal"]}` : "")
  return (
    <div className={classes}>
      <div onClick={(e) => {if (e.target === e.currentTarget) {toggleIsActive()}}} className={styles.backdrop}></div>
      {children}
    </div>
  );
}

export default Modal;