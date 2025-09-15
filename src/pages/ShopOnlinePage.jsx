import { Link } from "react-router-dom";
import { useGlobalProducts } from "../context/GlobalProducts";

export default function ShopOnlinePage() {

    const { categoriesList } = useGlobalProducts()

    console.log(categoriesList);


    return (
        <>
            <section className="cards-section-bg">

                <div className="cards-section">
                    {categoriesList.map(c => {
                        return (
                            <div key={c.id} className="card-section">
                                <div className="icon-img p-icon-img">
                                    <img src={`./shopImg/${c?.category_image}`} alt={c?.category_name} />
                                </div>
                                <div className="card-section-content">
                                    <Link to={c?.category_name}>
                                        <h4 className="orange-text card-title-shop">{c?.category_name}</h4>
                                    </Link>
                                    <div>
                                        <Link className="btn orange-button" to={c?.category_name}>MOSTRA TUTTI</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section-bg-shop-online" >
                <div className="container-content ">
                    <h1 className="text-center text-title title title-m-bottom ">Condizioni di vendita</h1>
                    <p>
                        Le caratteristiche e il prezzo dei vari prodotti in vendita sul Sito (di seguito “Prodotto” o “Prodotti”) sono riportati nel box relativo a ciascun Prodotto.
                        <br />
                        <br />
                        Per l’acquisto dei Prodotti il Cliente dovrà compilare e inviare il modulo d’ordine in formato elettronico, seguendo le istruzioni contenute nel Sito. Il Cliente dovrà aggiungere il Prodotto al “Carrello” e, dopo aver preso visione delle Condizioni Generali e della Politica di Privacy e confermato la loro accettazione, dovrà inserire i dati di spedizione e eventuale fatturazione, selezionare la modalità di pagamento desiderata e confermare l’ordine.
                        <br />
                        <br />
                        Con l’invio dell’ordine dal Sito, che ha valore di proposta contrattuale, il Cliente riconosce e dichiara di aver preso visione di tutte le indicazioni fornitegli durante la procedura d’acquisto e di accettare integralmente le presenti Condizioni Generali e di pagamento trascritte.
                        <br />
                        <br />
                        Una volta ricevuto l’ordine, verrà verificata la disponibilità degli stock per l’evasione dell’ordine stesso. Nel caso in cui uno o più Prodotti non risultassero disponibili, il Servizio Clienti invierà tempestiva comunicazione via email al Cliente il quale, entro le successive 12 ore, avrà facoltà di rispondere per confermare la spedizione degli eventuali ulteriori Prodotti disponibili o annullarla. In caso di mancata risposta entro tale termine, l’ordine verrà considerato confermato e i Prodotti disponibili saranno messi in spedizione. In tal caso l’intero importo relativo ai Prodotti mancanti verrà stornato o comunque, a seconda del metodo di pagamento prescelto, non sarà addebitato al Cliente.
                    </p>
                    <Link to="/condizioni-di-vendita" className="white-button btn ">
                        Leggi le Condizioni di Vendita
                    </Link>
                </div>
            </section>
        </>
    );
}