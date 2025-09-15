import "../css/PagesStyle.css"

export default function OtticaPage() {
    return (
        <>
            {/*Jumbotron section */}
            <div className="jumbotron-slider" style={{ backgroundColor: "#f5f2f2" }}>
                <div className="slider-track">
                    <div className="slide">
                        <img src="./otticaPage/ottica-page-jumbo.png" alt="Immagine ottica" />
                        <div className="slide-description">
                            <h2>Ottica</h2>
                            <p>UN SERVIZIO CHE TI SEGUE IN OGNI TUO PASSO</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* SEZIONE SERVIZI */}
            <section className="cards-section-bg">
                <div className="cards-section">
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/analisi-visiva-img.svg" alt="analisi-visiva-img" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Analisi visiva completa</h4>
                            <p>Grazie a alcuni test l’ottico optometrista è in grado di valutare lo stato di motricità, binocularità, stereopsi, flessibilità e ampiezza accomodativa e fusionale del sistema visivo per poter consigliare un’eventuale prescrizione di lenti.</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/occhi-img.svg" alt="occhi-img" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Visual Training con Jet Program</h4>
                            <p>Una specifica ginnastica oculare all'avanguardia che aiuta a vedere meglio: gli esercizi insegnano ad ottimizzare il modo di utilizzare vista e visione.</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/stars-img.svg" alt="stars-img" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Soluzioni ottiche personalizzate</h4>
                            <p>Consulenza qualificata in materia di lenti correttive. Ogni necessità visiva ha bisogno della sua lente, fatta su misura e realizzata per adattarsi alle specificità di ogni singolo occhio.
                            </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/lenti-contatto.svg" alt="lenti-contatto" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Applicazione lenti a contatto</h4>
                            <p>I clienti saranno affiancati nella scelta delle lenti a contatto più adatte ai propri occhi e allo stile di vita: morbide, rigide o semi-rigide per qualsiasi problematica visiva di cui si soffre.</p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/videocentratore.svg" alt="videocentratore" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Videocentratore Visioffice</h4>
                            <p>Una tecnologia digitale che è in grado di fotografare e filmare il viso per aiutare nella scelta della montatura, grazie alla misurazione precisa del comportamento visivo e delle condizioni di portabilità degli occhiali. </p>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="icon-img p-icon-img">
                            <img src="./otticaPage/riparazione-occhiali.svg" alt="riparazione-occhiali" />
                        </div>
                        <div>
                            <h4 className="text-center title-card-section">Riparazione occhiali</h4>
                            <p>Oltre ai prodotti di prima qualità, occhiali da vista e da sole di marchi noti del settore, con la possibilità di personalizzarne le montature e le prestazioni tecniche, il negozio offre servizi professionali di varia natura.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* SEZIONE DESCRIZIONE OTTICA */}
            <section className="section-ottica">
                <div className="container-content-ottica " id="p-ottica-page">
                    <h1 className="text-title title-ottica-page">Un trattamento di qualità </h1>
                    <p className="content-ottica text-color ">
                        In Tempi D'Oro, oltre che accoglienza e professionalità, trovi un'alta qualità nel servizio: moltissimi modelli di occhiali da vista e da sole delle più grandi marche e designer internazionali ma soprattutto una scrupolosa e attenta visita eseguita da una specialista nel settore che da anni si occupa di trovare la soluzione migliore ad ogni problema visivo.
                        <br />
                        <br />
                        Grazie alle tecnologie più avanzate non avrai solo la possibilità di modulare le richieste per risolvere qualsiasi problematica ma anche di allenarti per alleviare l'insorgenza di disturbi che minano la funzionalità oculare.
                        <br />
                        <br />
                        In Tempi D'Oro non si svolge attività medica-oculistica - che deve essere eseguita nelle apposite sedi - ma si offre tutto il sapere della disciplina optico-oftalmica con massima qualità e alta professionalità
                    </p>
                </div>
                <div>
                    <img src="./otticaPage/ingrid-ottica-page.jpg" alt="ottica" />
                </div>
            </section>

            {/* SEZIONE BRANDS LOGO */}
            <section className="container-merch-img">
                <div className="img-row">
                    <img src="./otticaPage/rayban.png" alt="rayban" />
                    <img src="./otticaPage/gucci.png" alt="gucci" />
                    <img src="./otticaPage/blumarine.png" alt="blumarine" />
                    <img src="./otticaPage/versace.png" alt="versace" />
                    <img src="./otticaPage/polo.png" alt="polo ralph lauren" />
                </div>
                <div className="img-row">
                    <img className="img-margin-right" src="./otticaPage/guess.png" alt="guess" />
                    <img className="img-margin-right" src="./otticaPage/burberry.jpg" alt="burberry" />
                    <img className="img-margin-right" src="./otticaPage/carrera.jpg" alt="carrera" />
                    <img src="./otticaPage/romeogigli.jpg" alt="romeogigli" />
                </div>
                <div className="img-row">
                    <img className="img-margin-right" src="./otticaPage/michael-kors.webp" alt="michael kors" />
                    <img src="./otticaPage/lamarca.jpg" alt="lamarca" />
                    <img src="./otticaPage/dsquared2.jpg" alt="dsquared2" />
                    <img src="./otticaPage/scuderia-ferrari.png" alt="scuderia ferrari" />
                </div>
            </section>

            {/* SEZIONE CONTATTI */}
            <section className="section-bg-ottica" >
                <div className="container-content ">
                    <h1 className="text-center text-title title title-m-bottom ">Vuoi prenotare un'appuntamento? </h1>
                    <p>
                        Chiamaci allo 0545 40663 e chiedi di Ingrid oppure vieni a trovarci in sede
                        <a className="orange-text" href="https://www.google.com/maps/dir//Corso+Sforza,+71%2FA-C,+48033+Cotignola+RA/@44.3851903,11.8603013,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x477e0263ad6c2b83:0x64846970fb8d6008!2m2!1d11.9426641!2d44.3852346?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"> QUI</a>
                        <br />
                        <br />
                        la nostra specialista in ottica e optometria sarà felice di consigliarti al meglio
                    </p>
                    <a href="tel:0545 40663" className="white-button btn ">
                        Contattaci
                    </a>
                </div>
            </section>
        </>
    );
}