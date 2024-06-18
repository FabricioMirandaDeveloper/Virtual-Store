import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
/* import products from "../assets/products.js"; */
import Product from "../interfaces/product.js";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get("/products.json")
       .then((res) => setProducts(res.data))
       .catch((err) => console.log(err));
  }, []);
 
  return (
    <>
      <Navbar />
      <Hero first="Tecnologia" second="Renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-[1080px] flex flex-wrap justify-center md:justify-between" id="products">
          {products.map((each: Product) => (
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
