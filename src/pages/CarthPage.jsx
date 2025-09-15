import "../css/CarthPage.css"
import { NavLink, Link } from "react-router-dom";

export default function CarthPage() {
    return (
        <main>
            <div className="cart-nav">
                <ul>
                    <li><NavLink>IL TUO CARRELLO</NavLink></li>
                    <li><NavLink>ACCEDI</NavLink></li>
                    <li><NavLink>FATTURAZIONE</NavLink></li>
                    <li><NavLink>SPEDIZIONE</NavLink></li>
                    <li><NavLink>PAGAMENTO</NavLink></li>
                    <li><NavLink>CONFERMA</NavLink></li>
                </ul>
            </div>
            <div className="emty-cart">
                <h2>
                    Il tuo carrello è vuoto
                </h2>
                <p>
                    Il tuo carrello è vuoto. Per aggiungere articoli al tuo carrello naviga su tempidoro.com, quando trovi un articolo che ti interessa, clicca su <strong>"Aggiungi al carrello"</strong>.
                    <br />
                    Continua a fare acquisti sul sito web <strong>www.tempidoro.com</strong>.
                    <br />
                    I prezzi degli articoli nel tuo carrello riflettono sempre il prezzo più recente visualizzato sulle relative pagine prodotto.
                    <br />
                    <br />
                    Vuoi utilizzare un codice promozionale? Ti chiederemo di inserirlo al momento del pagamento.
                </p>
                <div className="empty-cart-bottom">
                    <div>
                        <Link to="/shop-online">
                            <button>TORNA AL NEGOZIO</button>
                        </Link>
                    </div>
                    <div>
                        <img src="./empty-cart.png" alt="Carrello Vuoto" />
                    </div>
                </div>
            </div>
        </main>
    );
}