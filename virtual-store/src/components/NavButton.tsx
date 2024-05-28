import style from "./NavButton.module.css"
export function NavButton({title, link}) {
    return(
        <>
            <li className={style["navLi"]}>
            <a className={style["navA"]} href={link}>
                {title}
            </a>
            </li>
        </>
    )
}