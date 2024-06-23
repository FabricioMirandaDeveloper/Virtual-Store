import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { useState, useEffect, } from "react";
import { CardCart } from "../components/CardCart";
import CardResume from "../components/CardResume";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/product";

export function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      setProductsOnCart(JSON.parse(products));
      dispatch(calculateTotal({ products: JSON.parse(products) }));
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
              color={product.colors ? product.colors[0] : ''}
              image={product.images ? product.images[0] : ''}
              quantity={product.units}
            />
          ))}
        </section>
        <CardResume/>
      </main>
      <Footer />
    </>
  );
}
