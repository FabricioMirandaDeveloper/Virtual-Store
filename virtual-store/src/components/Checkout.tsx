import { useState, useRef, useEffect } from "react";
import ProductProp from "../interfaces/ProductProp";

export function Checkout({ product }: ProductProp) {
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef(1);
  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productsOnCart.find((item) => item.id === product.id);
    if (one) {
      setQuantity(one.units);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);
  const manageCart = () => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    }
    const one = productsOnCart.find((each) => each.id === product.id);
    if (!one) {
      product.units = Number(units.current.value);
      productsOnCart.push(product);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };
  return (
    <section className="w-[340px] p-[10px] m-[10px]">
      <div className="bg-[#ebebeb] p-[33px] rounded-sm">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-2">
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className="leading-5">
          Includes Country tax and AFIP collection
        </p>
        <ul>
          <li className="flex my-4">
            <span>
              <img src="/truck.png" alt="Truck" />
            </span>
            <span></span>
          </li>
          <li className="flex my-4">
            <span className="mr-4">
              <img src="/plane.png" alt="Plane" />
            </span>
            <span>
              Add the product to the cart to know the shipping costs
            </span>
          </li>
        </ul>
        <div>
          <div className="flex">
            <input
              className="w-[62px] h-[40px] rounded-[10px] border-none mr-3 pl-5"
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={button ? "w-full bg-black text-white font-bold border-none h-[40px] rounded-lg" : " w-full bg-[#ff3b3c] hover:bg-[#fc4848] text-white font-bold border-none h-[40px] rounded-lg"}
              onClick={manageCart}
            >
              {button ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
