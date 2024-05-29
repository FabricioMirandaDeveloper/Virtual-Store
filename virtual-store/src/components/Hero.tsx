import style from  "./Hero.module.css"
export function Hero({first, second}) {
  return (
    <>
      <section className={style["hero-section"]}>
        <article className={style["hero-title"]}>
          <span className={style["hero-span"]}>{first}</span>
          <span className={style["hero-span"]}>{second}</span>
        </article>
      </section>
    </>
  );
}
