import { NavLink, Link } from "react-router-dom";
// Icons
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";
// components
import ShopLinks from "./headerComponents/ShopLinks";
import "../css/Header.css";

// cuore pieno
import { IoIosHeart } from "react-icons/io";

import { useGlobalProducts } from "../context/GlobalProducts";

export default function Header() {

    const { fav } = useGlobalProducts();

    // Use effect che attiva la funzione che nasconde il logo allo scroll della pagina
    useEffect(() => {
        const header = document.querySelector("header");
        const logo = document.querySelector(".navbar-brand");
        let lastScroll = window.scrollY;

        const onScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add("shrink");
                logo.classList.add("hide");

            } else {
                header.classList.remove("shrink");
                logo.classList.remove("hide");
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header>
            <nav>
                <Link className="navbar-brand" href="/">
                    <img src="/Logo.png" alt="Logo" />
                </Link>
                <div className="navbar-nav">
                    <NavLink to="home" className="link-a">Home</NavLink>
                    <NavLink to="ottica" className="link-a">Ottica</NavLink>
                    <NavLink to="oreficeria" className="link-a">Oreficeria</NavLink>
                    <NavLink to="contatti" className="link-a">Contatti</NavLink>
                    <ShopLinks />
                    <NavLink to="carrello" className="link-a"><IoCartOutline /></NavLink>
                    <NavLink to="login" className="link-a"><FaUser /></NavLink>
                    <NavLink to="preferiti" className="link-a heart-link">
                        <IoIosHeart className="orange-heart orange-icon-header" />
                        {fav.length > 0 && <span className="fav-count">{fav.length}</span>}
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}