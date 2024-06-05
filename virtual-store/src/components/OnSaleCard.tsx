import style from "./OnSaleCard.module.css";

export function OnSaleCard(props) {
  const { id, title, color, price, image, discount } = props;

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  const onSalePrice = Number(price) * (1 - Number(discount) / 100);
  const formattedOnsalePrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(onSalePrice);

  return (
    <>
      <a className={style["product-card"]}>
        <img className={style["product-img"]} src={image} alt={id} />
        <div className={style["product-info"]}>
          <span className={style["product-title"]}>{title}</span>
          <span className={style["product-description"]}>{color}</span>
          <div className={style["product-onsale-block"]}>
            <span className={style["product-onsale-description"]}>Desde</span>
            <span
              className={style["product-initial-price"]}
            >{`AR$. ${formattedPrice}`}</span>
          </div>
          <div className={style["product-price-block"]}>
            <span
              className={style["product-price"]}
            >{`AR$. ${formattedOnsalePrice}`}</span>
            <span
              className={style["product-discount"]}
            >{`${discount}% OFF`}</span>
          </div>
          <div className={style["product-tax-policy"]}>
            Comprá y pagá en pesos
          </div>
        </div>
      </a>
    </>
  );
}
