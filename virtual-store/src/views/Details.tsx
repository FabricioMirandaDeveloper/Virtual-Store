import { Navbar } from "../components/NavBar";
import styles from "./Details.module.css";
import { Footer } from "../components/Footer";
import products from "../assets/products";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound.js";
import { ProductCard } from "../components/ProductCard";
import { Thumbs } from "../components/Thumbs.js";
import { Description } from "../components/Description.js";
import { Checkout } from "../components/Checkout.js";

export function Details() {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const onsale = products.filter((each) => each.onsale);

  if (product) {
    return (
      <>
        <Navbar />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product}/>
              <Description product={product}/>
              <Checkout product={product}/>
            </div>
            <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div
                id="product-container"
                className={styles["product-container"]}
              >
                {onsale.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    color={product.colors[0]}
                    image={product.images[0]}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NotFound />
      </>
    );
  }
}
