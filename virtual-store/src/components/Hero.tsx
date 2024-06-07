export function Hero({first, second}) {
  return (
    <>
      <section className="h-[200px] bg-[url('/hero_bg.png')] bg-cover bg-top flex justify-center min-[680px]:h-[210px] ,min-[1080px]:object-contain">
        <article className="w-[1080px] flex flex-col items-start justify-center pl-5">
          <span className="text-white font-bold text-[20px] min-[680px]:text-[40px]">{first}</span>
          <span className="text-white font-bold text-[50px] leading-[30px] min-[680px]:text-[100px] min-[680px]:leading-[80px]">{second}</span>
        </article>
      </section>
    </>
  );
}
