import { NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useGlobalProducts } from "../../context/GlobalProducts"
import Spinner from "../Spinner"

export default function ShopLinks() {

    const { deslugyfyCategory, categoriesList, loadingCategories } = useGlobalProducts()

    const [toggleMenu, setToggleMenu] = useState(false)

    // mi collego con lo use ref al dropdown
    const dropdownRef = useRef()

    useEffect(() => {
        // Questa funzione verrà eseguita ogni volta che clicchi nel documento
        const handleClickOutside = (event) => {
            // Controlla se dropdownRef è assegnato e se l'elemento cliccato NON è dentro il menu
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Se hai cliccato fuori, chiudi il menu a tendina
                setToggleMenu(false)
            }
        }
        // Quando il componente è montato, aggiungi l'ascoltatore per i click nel documento
        document.addEventListener("mousedown", handleClickOutside)

        // Quando il componente viene smontato o rimosso dal DOM, rimuovi l'ascoltatore per evitare memory leak
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <li className="nav-link dropdown-wrapper" ref={dropdownRef}>
            <span
                to="shop-online"
                className="nav-link link-a"
                onClick={(e) => {
                    e.preventDefault()
                    setToggleMenu(!toggleMenu)
                }}
            >
                Shop Online
                {toggleMenu && (
                    <div id="dropdown-menu"
                        className={`dropdown-anim ${toggleMenu ? "fade-in" : "fade-out"}`}>
                        <ul>
                            <li><NavLink to="/shop-online">Tutte le Categorie</NavLink></li>
                            {loadingCategories && <Spinner />}
                            {!categoriesList && !loadingCategories &&
                                <div>
                                    <h4 className="errSmall">Errore del server nessuna categoria disponibile</h4>
                                </div>}
                            {categoriesList?.length === 0 && !loadingCategories &&
                                <div>
                                    <h4 className="errSmall">Nessuna categoria disponibile</h4>
                                </div>}
                            {categoriesList?.map((c) => <li key={c.id}><NavLink to={`/shop-online/${c.category_name}`}>{deslugyfyCategory(c.category_name)}</NavLink></li>)}
                        </ul>
                    </div>
                )}
            </span>
        </li>
    )
}