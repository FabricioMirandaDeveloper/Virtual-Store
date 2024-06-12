
import { Link } from "react-router-dom"
export function NavButton({title, link}) {
    return(
        <>
            <li>
            <Link className="font-bold" to={link}>
                {title}
            </Link>
            </li>
        </>
    )
}