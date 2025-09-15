import "../css/ContactsPage.css"

export default function ContattiPage() {
    return (
        <main>
            {/*Jumbotron section */}
            <div className="jumbotron-slider" style={{ backgroundColor: "#f5f2f2" }}>
                <div className="slider-track">
                    <div className="slide">
                        <img src="./ottica-oref-bg.jpg" alt="Immagine oreficeria e ottica" />
                        <div className="slide-description">
                            <h2>Ottica e Oreficeria</h2>
                            <p>Una brillante attività di famiglia</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contacts-page-section">
                <div className="container-form-contact">
                    <h1 className="text-title title-contacts-page">Contattaci</h1>
                    <p>Se hai richieste specifiche compila i campi qui sotto e saremo lieti di poterti rispondere al più presto</p>
                    <form action="">
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Telefono" />
                        <textarea placeholder="Messaggio"></textarea>
                        <button type="submit" className="btn-skin-1 btn-large ">Invia</button>
                    </form>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2329.4206543552523!2d11.942648061662487!3d44.38523247407124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e0263ac534eff%3A0x50a7d5ab8dfd61b5!2sCorso%20Sforza%2C%2071%2C%2048010%20Cotignola%20RA%2C%20Italia!5e0!3m2!1sit!2sus!4v1752765343694!5m2!1sit!2sus"
                        style={{ border: 0 }}
                        frameborder="0"
                        allowFullScreen="true"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
