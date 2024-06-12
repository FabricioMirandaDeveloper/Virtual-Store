
import { Link } from "react-router-dom"
export function NavButton({title, link}) {
    return(
        <>
            <li>
            <Link className="text-xs sm:text-sm md:text-base font-bold px-2" to={link}>
                {title}
            </Link>
            </li>
        </>
    )
}