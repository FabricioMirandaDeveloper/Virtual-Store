import { useRef } from "react";
import styles from "./CardCart.module.css";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/product";
import Product from "../interfaces/Product";

export function CardCart(props) {
  const { id, title, price, color, image, description, quantity} = props;
  const dispatch = useDispatch();
  const unitsToBuy = useRef<HTMLInputElement>(null);
  console.log(unitsToBuy);
  
  const manageUnits = () => {
    const productsOnCart = localStorage.getItem("cart");
    let products = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }
    const one = products?.find((each: Product) => each.id === id);
    console.log(one);
    
    if (one) {
      one.units = Number(unitsToBuy.current.value);
      localStorage.setItem("cart", JSON.stringify(products));
      dispatch(calculateTotal({ products }));
    }
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
            ref={unitsToBuy}
            onChange={manageUnits}
          />
        </div>
        <strong className={styles["price"]}>{`AR$ ${price}`}</strong>
      </article>
    </>
  );
}
