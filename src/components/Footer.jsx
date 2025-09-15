import { Link } from "react-router-dom";
import "../css/Footer.css"

// import icone di react icons
import { LiaMapMarkerSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <div>
                    <h1 className="title-footer">Tempi d'<span className="orange-text title-footer">Oro</span></h1>
                </div>
                <div className="container-cards-footer">
                    <div className="card-footer">
                        <h5>
                            <LiaMapMarkerSolid /> Indirizzo
                        </h5>
                        <a href="https://www.google.it/maps/place/Corso+Sforza,+71A,+48033+Cotignola+RA/@44.3852626,11.9426323,17z/data=!4m6!3m5!1s0x477e0263acf98dcd:0xb170e292072639df!8m2!3d44.3852199!4d11.942702!16s%2Fg%2F11c29876jj?hl=it&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D">Corso Sforza, 71A, 48033 Cotignola RA</a>
                    </div>
                    <div className="card-footer">
                        <h5>
                            <BsTelephone /> Telefono
                        </h5>
                        <p>0545 40663 - 393 9927352</p>
                    </div>
                    <div className="card-footer">
                        <h5>
                            <MdOutlineMail className="mail-icon" /> Email
                        </h5>
                        <p>info@tempidoro.com</p>
                    </div>
                    <div className="card-footer">
                        <h5>
                            <IoShareSocialOutline /> Social
                        </h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/tempidoro.oreficeriaottica/">
                                <FaFacebookF className="icon" />
                            </a>
                            <a href="https://www.instagram.com/tempidoro/">
                                <FaInstagram className="icon" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-banner">
                <p>
                    &copy; 2025 Tempidoro. All rights reserved. -
                    <Link> Privacy & Cookie Policy</Link> -
                    <Link> Condizioni di Vendita</Link> -
                    P.Iva e C.F. 00150360394
                </p>
            </div>
        </footer>
    );
}