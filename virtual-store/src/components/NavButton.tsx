import style from "./NavButton.module.css"
import { Link } from "react-router-dom"
export function NavButton({title, link}) {
    return(
        <>
            <li className={style["navLi"]}>
            <Link className={style["navA"]} to={link}>
                {title}
            </Link>
            </li>
        </>
    )
}