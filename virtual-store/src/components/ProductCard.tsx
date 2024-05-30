import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
export function ProductCard(props) {
  const { id, title, color, price, image } = props;
  return (
    <>
      <Link className={style["product-card"]} to={"/details/" + id}>
        <img
          className={style["product-img"]}
          src={image}
          alt={id}
        />
        <div className={style["product-info"]}>
          <span className={style["product-title"]}>{title}</span>
          <span className={style["product-description"]}>{color}</span>
          <div className={style["product-price-block"]}>
            <span className={style["product-price"]}>{price}</span>
            <span className={style["product-discount"]}>50% Off</span>
          </div>
          <div className={style["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}
