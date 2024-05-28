import style from  "./Hero.module.css"
export function Hero() {
  return (
    <>
      <section className={style["hero-section"]}>
        <article className={style["hero-title"]}>
          <span className={style["hero-span"]}>tecnología</span>
          <span className={style["hero-span"]}>renovada</span>
        </article>
      </section>
    </>
  );
}
