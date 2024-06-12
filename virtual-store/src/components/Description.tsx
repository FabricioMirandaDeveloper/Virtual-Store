export function Description({product}) {
  return (
    <>
      <div className="w-[340px] p-2 m-2">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <form className="mt-7">
          <fieldset>
            <label htmlFor="color">
              Color
            </label>
            <select className="w-full h-[40px] rounded-[10px] p-2 my-2 border-2 border-solid border-[#eaeaea]" id="color">
              {product.colors.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className="mt-7 leading-5">
          <span className="text-sm font-bold">Descripción</span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
