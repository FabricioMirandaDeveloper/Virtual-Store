import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import Product from "../interfaces/product.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store) => store.products.text);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);
  console.log(text)
  
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
