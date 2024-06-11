export function Footer() {
  return (
    <>
      <footer className="min-h-[250px] bg-[#7525a7] flex flex-col items-center">
        <div
          id="footer"
          className="
          grid
          text-center
          w-screen
          p-[10px]
          text-white
          max-[480px]:grid-cols-1
          max-sm:grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5s"
        >
          <ul className="list-none p-[10px]">
            <li className="font-bold pb-2">
              <a className="no-underline" href="./index.html">
                Ofertas
              </a>
            </li>
            <li className="py-[5px]">
              <a className=" no-underline" href="./index.html">
                Laptops
              </a>
            </li>
            <li className="py-[5px]">
              <a className=" no-underline" href="./index.html">
                Audio
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="list-none p-[10px]">
            <li className="font-bold pb-2">
              <a className="text-white no-underline" href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Envios
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="list-none p-[10px]">
            <li className="font-bold pb-2">
              <a className="text-white no-underline" href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Impuestos
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="list-none p-[10px]">
            <li className="font-bold pb-2">
              <a className="no-underline" href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className="py-[5px]">
              <a className=" no-underline" href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className="py-[5px]">
              <a className="no-underline" href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="list-none p-[10px]">
            <li className="font-bold pb-2">
              <a className="no-underline" href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[1080px] border-t-[1px] border-solid border-[#ba53fb] text-center text-white font-bold py-[30px] box-border">
          Curso de HTML + CSS 2024
        </div>
      </footer>
    </>
  );
}
