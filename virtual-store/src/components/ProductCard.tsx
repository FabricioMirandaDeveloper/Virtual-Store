import { Link } from "react-router-dom";
export function ProductCard(props) {
  const { id, title, color, price, image } = props;
  return (
    <>
      <Link className="w-[250px] m-4 rounded-[15px] bg-[#f0f0f0] text-[#383838]" to={"/details/" + id}>
        <img
          className="w-full h-[250px] object-cover object-center rounded-t-[15px]"
          src={image}
          alt={id}
        />
        <div className="p-5">
          <span className="text-[20px] font-bold block leading-6 break-words">{title}</span>
          <span className="text-[12px] text-[#383838]">{color}</span>
          <div className="flex justify-between items-center my-1">
            <span className="text-[20px] font-bold">{price}</span>
            <span className="text-[12px] font-bold text-[#428f13]">50% Off</span>
          </div>
          <div className="text-[10px] font-light">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}
