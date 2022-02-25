import "./Navbar.css"
import { navItems } from "../store/NavItems"
import { Link } from "react-router-dom"


function Navbar() {
    console.log(navItems)
    return (
        <div className="navbar__container">
            {navItems.map((item) => {
                return (
                    <Link to={`/${item.ref}`}>
                        <p>{item.title}</p>
                    </Link>



                )
            })}
        </div>
    )
}

export default Navbar;