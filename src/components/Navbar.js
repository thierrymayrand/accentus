import "./Navbar.css"
import { navItems } from "../store/NavItems"
import { Link } from "react-router-dom"


function Navbar() {
    console.log(navItems)
    return (
        <div className="navbar__container">
            {navItems.map((item) => {
                return (
                    <Link className="nav-link" to={`/${item.ref}`}>
                        <p className="nav-link__title">{item.title}</p>
                    </Link>



                )
            })}
        </div>
    )
}

export default Navbar;