import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import products from "../assets/products";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound.js";
import { ProductCard } from "../components/ProductCard";
import { Thumbs } from "../components/Thumbs.js";
import { Description } from "../components/Description.js";
import { Checkout } from "../components/Checkout.js";
/* import Product from "../interfaces/product.js"; */
import axios from "axios";
import { useEffect, useState } from "react";

export function Details() {
  const { id } = useParams();
  const [productt, setProductt] = useState<Product>({
    id: "",
    title: "",
    price: 0,
    images: [],
    colors: [],
  });
  const [onsale, setOnSalee] = useState<Product[]>([]); 
  useEffect(() => {
    axios("/products.json")
       .then((res) => {
          const products: Array<Product> = res.data;
          const detailProduct: Product | undefined = products.find(
             (each) => each.id === id
          );
          detailProduct && setProductt(detailProduct);
          const filterProducts: Array<Product> = products.filter(
             (each) => each.onsale
          );
          filterProducts.length > 0 && setOnSalee(filterProducts);
       })
       .catch((err) => console.log(err));
 }, [id]);
 
  /* const product: Product = products.find((each) => each.id === id);
  const onsale: Product[] = products.filter((each) => each.onsale); */

  if (productt) {
    return (
      <>
        <Navbar />
        <main
          className="
          w-full flex justify-center 
          items-center p-5
        "
        >
          <div>
            <div id="details" className="flex flex-col md:flex-row justify-center">
              <Thumbs product={productt} />
              <Description product={productt} />
              <Checkout product={productt} />
            </div>
            <div className="flex flex-col w-full">
              <h2 className="
              text-center
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              my-5
              ">Ofertas de la semana</h2>
              <div
                id="product-container"
                className="w-full grid gap-4
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-3
                   lg:grid-cols-4
                   justify-items-center
                   "
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
