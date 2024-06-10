import styles from "./CardCart.module.css"
export function CardCart(props) {
  const { id, title, description, color, price, image, quantity, onQuantityChange } = props;
  const handleChange = (event) => {
    onQuantityChange(id, event.target.value);
  };
  return (
    <>
    <article className={styles["product-cart"]}>
          <img
            className={styles["product-img"]}
            src={image}
            alt={id}
          />
          <div className={styles["product-details"]}>
            <strong className={styles["product-title"]}>{title}</strong>
            <span className={styles["product-description"]}>{color}</span>
            <p className={styles["product-description"]}>
              {description}
            </p>
            <input
              className={styles["product-input"]}
              type="number"
              name="quantity"
              value={quantity}
              min="1"
              id={id}
              onChange={handleChange}
            />
          </div>
          <strong className={styles["price"]}>{`AR$ ${price}`}</strong>
        </article>
    </>
  );
}