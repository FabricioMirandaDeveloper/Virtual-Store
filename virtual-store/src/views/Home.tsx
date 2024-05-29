import { Navbar } from "../components/NavBar";
import style from "./Home.module.css";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export function Home() {
  return (
    <>
      <Navbar/>
      <Hero first="Tecnologia" second="Renovada"/>
      <main>
        <div className={style["product-container"]} id="products">
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={style["product-card"]} href="./details.html">
            <img
              className={style["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={style["product-info"]}>
              <span className={style["product-title"]}>iPad Pro 12.9</span>
              <span className={style["product-description"]}>Silver</span>
              <div className={style["product-price-block"]}>
                <span className={style["product-price"]}>900000</span>
                <span className={style["product-discount"]}>50% Off</span>
              </div>
              <div className={style["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer/>
    </>
  );
}
