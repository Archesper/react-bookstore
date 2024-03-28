import styles from "./ItemCount.module.css";

const ItemCount = ({ count, className }) => {
  const overflow = count > 99;
  const classes =
    styles["item-count"] + (overflow ? ` ${styles["overflow"]}` : "") + (className ? ` ${className}` : "");
  return (
    <div data-testid="item-count" className={classes }>
      {overflow ? "99+" : count}
    </div>
  );
};

export default ItemCount;
