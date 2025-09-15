// CSS DI SLICK REACT 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// JUMBOTRON
import Jumbotron from "../components/Jumbotron"
// CSS DELLA HOME PAGE
import "../css/PagesStyle.css"
// CSS DEI PRODOTTI
import "../css/ProductsStyle.css"
import { useEffect } from "react"
import { useGlobalProducts } from "../context/GlobalProducts"
// componente card prodotti
import ProductCard from "../components/ProductCard"
// react slick
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function HomePage() {

    const { products,
        total,
        limit,
        offset,
        fetchProducts, loading, setProducts, setOffset } = useGlobalProducts()

    // chiama UNA SOLA VOLTA all'avvio
    useEffect(() => {
        setProducts(null)
        setOffset(0)
        fetchProducts({
            category: null,
            isPromo: true,
            isEvidence: true,
            isNew: true,
            limit,
            offset: 0,
            append: false,
        });
        // se il linter rompe, aggiungi disable oppure includi fetchProducts/limit
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        afterChange: (current) => {
            const buffer = 5;
            const itemsShown = products.length;
            const isNearEnd = current >= itemsShown - buffer;

            if (isNearEnd && products.length < total) {
                const nextOffset = offset + limit;
                fetchProducts({
                    category: null,
                    search: "",
                    limit,
                    offset: nextOffset,
                    append: true,
                    // niente filters qui: passiamo i flag direttamente
                    isPromo: true,
                    isNew: true,
                    isEvidence: true,
                });
            }
        },
    };



    return (
        <>
            <Jumbotron />
            <main>
                {/* SECTION SLIDER */}
                <section className="evidence-section products-section mb-5">
                    <h1 className="text-center text-title mb-5 title">In evidenza dallo shop online</h1>
                    <div className="container-err">
                        {loading && <Spinner />}
                        {!products && !loading && <h1 className="errText">Erorre del server riprova più tardi</h1>}
                        {products?.length === 0 && !loading && <h1 className="errText">Nessun prodotto disponibile in evidenza</h1>}
                    </div>
                    {!loading && products?.length > 0 && products && <div className="evidence-products">
                        < Slider {...settings}>
                            {products?.map(product => (<ProductCard key={product.id} product={product} />))}
                        </Slider>
                    </div>}
                </section>
                {/* SECTION STORIA */}
                <section className="width-85 mb-5">
                    <div className="description-section">
                        <h1 className="text-center text-title mb-5 title">Una storia d'Oro</h1>
                        <p>
                            Tempi D’Oro inizia la sua attività nel 1958 grazie all’esperienza dei <strong>Fratelli Tarlazzi</strong>. Marcello ed Elmo erano gli unici nel paese a saper riparare gli ingranaggi degli orologi e, oltre ad avere una grande manualità, era la passione a guidarli.
                            <br />
                            L'azienda nasce sotto i portici del Credito Romagnolo di Cotignola ma poi, dopo qualche anno, è costretta a spostarsi per <strong>ampliamento dell'attività e dei locali</strong>. Inizialmente le lavorazioni svolte riguardavano solamente il mondo dell'oreficeria con servizi come riparazione di orologi, pulizia e la lucidatura di gioielli o la riduzione e ingrandimento di anelli.
                            <br />
                            Poi dal Maggio 1997 la figlia di Elmo entra a far parte dell'azienda in qualità di ottico-optometrista e quindi <strong>all'attività di oreficeria si implementa il servizio di ottica con analisi visiva optometrica</strong>.
                            <br />
                            <br />
                            Attualmente l'azienda resta nelle mani dei due figli di Elmo, <strong>Diego e Ingrid</strong>, a cui egli ha tramandato la passione sia per la professione sia per le cose fatte bene, per l'<strong>artigianalità</strong> e per la <strong>qualità</strong>.
                        </p>
                    </div>
                </section>
                {/* SECTION STAFF */}
                <section className="bg-gray" >
                    <div className="cards-section width-85">
                        <div>
                            <div className="icon-img">
                                <img src="./staff/ingrid.png" alt="Ingrid Tarlazzi" />
                            </div>
                            <div>
                                <h4 className="text-center title-card-section">Ingrid Tarlazzi</h4>
                                <p><strong>Ottico Optometrista.</strong></p>
                                <p>Specializzata in Ottica e Optometria dopo aver conseguito i diplomi nel 1996-1997, esperta e sempre aggiornata in materia di Training Visivo Optometrico</p>
                            </div>
                        </div>
                        <div className="card-section">
                            <div className="icon-img">
                                <img src="./staff/diego.png" alt="Diego Tarlazzi" />
                            </div>
                            <div>
                                <h4 className="text-center title-card-section">Diego Tarlazzi</h4>
                                <p><strong>Titolare del negozio.</strong></p>
                                <p>Addetto alla vendita in store e on-line
                                    a cui associa l'attività di riparazione di orologi, imparata sotto la guida del padre.</p>
                            </div>
                        </div>
                        <div className="card-section">
                            <div className="icon-img">
                                <img src="./staff/nastasia.png" alt="Nastasia Mazzari" />
                            </div>
                            <div>
                                <h4 className="text-center title-card-section">Nastasia Mazzari</h4>
                                <p><strong>Addetta alla vendita.</strong></p>
                                <p>Work in Progress:
                                    sta seguendo un corso di ottica per conseguire la qualifica di Ottico entro il 2020.</p>
                            </div>
                        </div>
                    </div>
                </section >
                {/* SECTION OREFICERIA */}
                < section className="section-bg-tempi" >
                    <div className="container-content">
                        <h1 className="text-center text-title title title-m-bottom ">Oreficeria</h1>
                        <i>
                            "I gioielli sono qualcosa di irreale! <br />
                            Nessuna descrizione, per quanto minuziosa, renderà mai totalmente conto del loro carattere magico. Come tutte le opere d’arte, un gioiello viene fatto per una persona o per un’occasione determinata: esso esiste in funzione di una ragione profonda che dobbiamo scoprire. Come ogni arte, la gioielleria risponde al bisogno di abbellire la vita, di ornare l’essere umano"
                        </i>
                        <span>Donatella Fici, responsabile Jewellery Bulgari</span>
                        <Link to='/oreficeria' className="white-button btn">
                            Scopri i nostri servizi
                        </Link>
                    </div>
                </section >
                {/* SECTION OTTICA */}
                < section className="section-ottica" >
                    <div className="container-content container-content-ottica text-color">
                        <h1 className="text-title title-ottica-home text-color">Ottica</h1>
                        <i className="text-color">
                            "Più di tutte, gli uomini amano la sensazione della vista. In effetti, non solo ai fini dell’azione, ma anche senza avere alcuna intenzione di agire, noi preferiamo il vedere, in un certo senso, a tutte le altre sensazioni. E il motivo sta nel fatto che la vista ci fa conoscere più di tutte le altre sensazioni."
                        </i>
                        <span>
                            Aristotele
                        </span>
                        <Link to='/ottica' className="btn orange-button">
                            Entra nel mondo dell'Ottica
                        </Link>
                    </div>
                    <div className="ottica-home-img-bg">
                        <img src="./imgHomePage/ottica-home.jpg" alt="ottica" />
                    </div>
                </section >
            </main >


        </>
    )
}
