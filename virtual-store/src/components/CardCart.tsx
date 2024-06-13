import { useRef, useEffect } from "react";
import styles from "./CardCart.module.css";
export function CardCart(props) {
  const {
    id,
    title,
    description,
    color,
    price,
    image,
    quantity
  } = props;

  const units = useRef(null);
  useEffect(() => {
    if (units.current) {
      units.current.value = quantity
    }
  }, [quantity]);
  const manageUnits = () => {
    const newQuantity = Number(units.current?.value)
    const productsOnCart = JSON.parse(localStorage.getItem("cart"))
    const productToUpdate = productsOnCart.find((each) => each.id === id);
    productToUpdate.units = newQuantity 
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };
  return (
    <>
      <article className={styles["product-cart"]}>
        <img className={styles["product-img"]} src={image} alt={id} />
        <div className={styles["product-details"]}>
          <strong className={styles["product-title"]}>{title}</strong>
          <span className={styles["product-description"]}>{color}</span>
          <p className={styles["product-description"]}>{description}</p>
          <input
            className={styles["product-input"]}
            type="number"
            name="quantity"
            defaultValue={quantity}
            min="1"
            id={id}
            ref={units}
            onChange={manageUnits}
          />
        </div>
        <strong className={styles["price"]}>{`AR$ ${price}`}</strong>
      </article>
    </>
  );
}
