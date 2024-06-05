import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import style from "./OnSale.module.css";
import products from "../assets/products.js";
import { OnSaleCard } from "../components/OnSaleCard.js";

function OnSale() {
  const onSaleProducts = products.filter((product) => product.onsale);
  const productPerSlice = 3
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(productPerSlice);
  
  console.log(from);
  console.log(to);
  const slicedProducts = onSaleProducts.slice(from, to);
  console.log(slicedProducts);
  
  
  const nextSug = () => {
    if(to < onSaleProducts.length) {
      setFrom(from + productPerSlice)
      setTo(to + productPerSlice)
    }
  }
  const prevSug  = () => {
    if(from > 0) {
      setFrom(from - productPerSlice)
      setTo(to - productPerSlice)
    }
  }

  return (
    <>
      <Navbar />
      <main>
          <button onClick={prevSug}>Anterior</button>
        <div className={style["product-container"]} id="products">
          {slicedProducts.map((each) => (
            <OnSaleCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
              discount={each.discount}
            />
          ))}
        </div>
        <button onClick={nextSug}>Siguiente</button>
      </main>
      <Footer />
    </>
  );
}

export default OnSale;
