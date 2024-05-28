import style from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className={style.footerContainer}>
          <ul className={style.footerUl}>
            <li className={style.footerMainItem}>
              <a className={style.footerA} href="./index.html">
                Ofertas
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Laptops
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Audio
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className={style.footerUl}>
            <li className={style.footerMainItem}>
              <a className={style.footerA} href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Envios
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className={style.footerUl}>
            <li className={style.footerMainItem}>
              <a className={style.footerA} href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Impuestos
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className={style.footerUl}>
            <li className={style.footerMainItem}>
              <a className={style.footerA} href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className={style.footerLi}>
              <a className={style.footerA} href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className={style.footerUl}>
            <li className={style.footerMainItem}>
              <a className={style.footerA} href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footerCopyright}>Curso de HTML + CSS 2023</div>
      </footer>
    </>
  );
}
