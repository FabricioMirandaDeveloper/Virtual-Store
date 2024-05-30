import { Navbar } from "../components/NavBar";
import style from "./Home.module.css";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import products from "../assets/products.js";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero first="Tecnologia" second="Renovada" />
      <main>
        <div className={style["product-container"]} id="products">
          {products.map((each) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
