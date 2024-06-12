import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { useState, useEffect } from "react";
import { CardCart } from "../components/CardCart";
import CardResume from "../components/CardResume";

export function Cart() {
  const [productsOnCart, setProductsOnCart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products);
    }
  }, []);
  // Paso 1: Definir la función handleQuantityChange
  const handleQuantityChange = (id, newQuantity) => {
    // Actualizar el estado del carrito con la nueva cantidad
    const updatedProducts = productsOnCart.map((product) =>
      product.id === id ? { ...product, units: newQuantity } : product
    );
    setProductsOnCart(updatedProducts);
  };
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
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </section>
        <CardResume total="90"/>
      </main>
      <Footer />
    </>
  );
}
