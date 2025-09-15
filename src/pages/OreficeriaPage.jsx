export default function OreficeriaPage() {
    return (
        <>
            {/*Jumbotron section */}
            <div className="jumbotron-slider" style={{ backgroundColor: "#f5f2f2" }}>
                <div className="slider-track">
                    <div className="slide">
                        <img src="./imgHomePage/tempidoro_bg.jpg" alt="Immagine oreficeria" />
                        <div className="slide-description">
                            <h2>Oreficeria</h2>
                            <p>Tutto quello che puoi desiderare fatto con artigianalità</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SERVIZI SECTION */}
            <section className="cards-section-bg">
                <div className="cards-section">
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/saldatura.svg" alt="saldatura" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Saldature in oro e argento</h4>
                            <p>
                                Offriamo servizi per riparare gioielli sia in oro sia in argento. Per qualsiasi particolare esigenza contattateci o venite in negozio
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/anelli.svg" alt="riduzione e ingrandimento anelli" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Riduzione e ingrandimento anelli</h4>
                            <p>
                                I gioielli restano sempre anche quando noi cambiamo: per questo offriamo il servizio di riduzione o ingrandimento anelli, per fare in modo che i ricordi viaggino sempre insieme a voi.
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/pulizia.svg" alt="pulizia" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Pulizia e lucidatura gioielli</h4>
                            <p>
                                Un gioiello mantiene il suo splendore anche sotto la polvere o le incrostazioni, ma quando luccica è sempre più bello.
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/incastonatura.svg" alt="incastonatura" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Incastonatura e infilatura pietre</h4>
                            <p>
                                Con il tempo puù capitare di perdere alcuni dettagli importanti dei nostri bracciali o anelli: noi effettuiamo anche il servizio di incastonatura per eivtare che si possa perdere qualsiasi oggetto che forma il prezioso che indossate.
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/incisioni.svg" alt="incisioni" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Incisioni personalizzate</h4>
                            <p>
                                Le incisioni fanno diventare personale un gioiello che potrebbe essere di chiunque, danno il vero valore aggiunto a qualsiasi regalo che si decide di fare a persone care o a noi stessi.
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./oreficeriaPage/riparazione.svg" alt="riparazione" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Vendita e riparazione</h4>
                            <p>
                                Per qualsiasi ingranaggio fuori posto o dettaglio da sistemare che sia un orologio o un accessorio, Tempi d'Oro vi potrà fornire la più artigianale assistenza.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
            {/* DESCRIPTION SECTION */}
            <main>
                <section className="homepage-description-section">
                    <h1 className="text-center text-title mb-5 title">
                        Gioielli per ogni occasione
                    </h1>
                    <p>
                        Tempi d'Oro è un negozio specializzato nella vendita di gioielli, oreficeria, orologeria e oggettistica in oro e argento. Vengono eseguite riparazioni specializzate di pendoli e orologi da polso, anche di marche prestigiose. Tempi D'oro è nata nel 1958 e vanta una lunga storia di tradizione e passione per i gioielli: da generazioni, siamo al fianco dei clienti per offrire una attenta consulenza nella scelta degli oggetti più appropriati alle proprie necessità sia per i regali più preziosi sia per i doni dedicati speciali dedicati a bambini e ragazzi (infatti da qualche tempo collaboriamo con brand come Lego per venire incontro alle richieste di grandi e piccini).
                    </p>
                </section>
                {/* BRAND LOGO SECTION */}
                <section className="container-merch-img ">
                    <div className="img-row img-row2">
                        <img src="./oreficeriaPage/calvin-klein.png" alt="calvin klein" />
                        <img src="./oreficeriaPage/brosway.png" alt="brosway" />
                        <img src="./otticaPage/scuderia-ferrari.png" alt="scuderia ferrari" />
                        <img src="./oreficeriaPage/festina.png" alt="festina" />
                        <img src="./oreficeriaPage/lotus.png" alt="versace" />
                        <img src="./oreficeriaPage/jaguar.jpg" alt="jaguar" />
                        <img src="./oreficeriaPage/gemoro.png" alt="gemoro" />
                        <img src="./oreficeriaPage/calypso.jpg" alt="calypso" />
                    </div>
                </section>
            </main>
            {/* IMGS STORE */}
            <section className="container-img-oreficeria">
                <img src="./oreficeriaPage/oref1.jpg" alt="" />
                <img src="./oreficeriaPage/oref2.jpg" alt="" />
                <img src="./oreficeriaPage/oref3.jpg" alt="" />
                <img src="./oreficeriaPage/oref4.jpg" alt="" />
            </section>
            {/* CONTACTS SECTION */}
            <section className="section-bg-oreficeria section-bg-ottica">
                <div className="container-content ">
                    <h1 className="text-center text-title title title-m-bottom ">Vuoi saperne di più sui nostri servizi?</h1>
                    <p>
                        Vieni a trovarci nella nostra sede in Corso Sforza, 71A a Cotignola e sarai accolto da Nastasia e Diego che ti consiglieranno al meglio in base a qualsiasi tua esigenza.
                    </p>
                    <a href="tel:0545 40663" className="white-button btn ">
                        Contattaci
                    </a>
                </div>
            </section>
        </>
    );
}