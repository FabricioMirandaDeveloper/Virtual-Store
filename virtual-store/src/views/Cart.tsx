import { Navbar } from "../components/NavBar";
import styles from "./Cart.module.css";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { useState, useEffect } from "react";
import { CardCart } from "../components/CardCart";

export function Cart() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Hero first="Mi" second="Carrito" />
      <main>
        <section>
          {productsOnCart.map((product) => (
            <CardCart
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              color={product.colors[0]}
              image={product.images[0]}
              quantity={product.units}
            />
          ))}
        </section>
        <div className={styles["cart-resume"]}>
          <div className={styles["cart-data"]}>
            <h2 className={styles["cart-title"]}>
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className={styles["cart-total"]}>
              <h3>Total</h3>
              <strong className={styles["cart-price"]}>$800000</strong>
            </div>
            <small className={styles["cart-tax"]}>
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button className={styles["cart-btn"]} id="buy" type="button">
            COMPRAR
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
