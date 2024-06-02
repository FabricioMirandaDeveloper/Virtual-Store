import styles from "./Thumbs.module.css"

export function Thumbs({product}) {
    return (
      <>
        <section className={styles["product-images-block"]}>
          <div className={styles["product-images"]}>
            <img
              className={styles["mini-img"]}
              src={product.images[0]}
              alt={product.title}
            />
            {
              <img
                className={styles["mini-img"]}
                src={product.images[0]}
                alt={product.title}
              />
            }
          </div>
          <img
            className={styles["big-img"]}
            id="big-img"
            src={product.images[0]}
            alt={product.title}
          />
        </section>
      </>
    );
}