import styles from "./CardResume.module.css"
export default function CardResume({total}) {
  return (
    <>
      <div className={styles["cart-resume"]}>
        <div className={styles["cart-data"]}>
          <h2 className={styles["cart-title"]}>
            <span>Resumen</span>
            <span>del</span>
            <span>pedido</span>
          </h2>
          <div className={styles["cart-total"]}>
            <h3>Total</h3>
            <strong className={styles["cart-price"]}>`$ {total}`</strong>
          </div>
          <small className={styles["cart-tax"]}>
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button className={styles["cart-btn"]} id="buy" type="button">
          COMPRAR
        </button>
      </div>
    </>
  );
}
