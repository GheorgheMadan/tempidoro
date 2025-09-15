import { Link } from "react-router-dom"
import { memo } from "react";
import AddToFavButton from "./AddToFavButton";

// Funzione per trasformare un titolo in uno slug leggibile
function slugify(title) {
    return title
        .toLowerCase()                  // tutto minuscolo
        .replace(/[^a-z0-9\s-]/g, '')   // rimuove caratteri speciali
        .replace(/\s+/g, '-')           // sostituisce spazi con trattini
        .replace(/-+/g, '-');           // rimuove trattini ripetuti
}

export default memo(function ProductCard({ product }) {

    // calocolo prezzo scontato 
    const discount = `0.${product.discount}`
    const discountedPriceCalc = (Number(product.price) - (Number(product.price) * Number(discount))).toFixed(2)
    const discountedPriceToModify = discountedPriceCalc.toString()
    const discountedPrice = discountedPriceToModify.replace(".", ",")

    // modifica prezzo 
    const priceToModify = Number(product.price).toFixed(2)
    const priceToModify2 = priceToModify.toString()
    const price = priceToModify2.replace(".", ",")

    // tags
    const arrTags = product.tags?.split(',').map(t => t.trim());

    // genera lo slug dal titolo
    const slug = slugify(product?.title);

    return (
        <div className="product-card">
            <div className="btn-fav-container">
                <AddToFavButton product={product} />
            </div>
            <div className="card-content">
                <figure>
                    <Link to={`/product/${slug}-${product?.id}`}>
                        <img src={`/prodotti/${product?.image}`} alt={product.title} />
                    </Link>
                </figure>
                <div>
                    <Link to={`/product/${slug}-${product.id}`}>
                        <h5>{product.title}</h5>
                    </Link>
                </div>
                <div className="price-section">
                    {product.in_promozione ? (
                        <div className="discount-section">
                            <span className="original-price">€ {price}</span>
                            <span className="price">€ {discountedPrice}</span>
                        </div>
                    ) : (
                        <span className="price">€ {price}</span>
                    )}
                </div>
                {product?.available || product?.stock > 0 ?
                    <div className="container-button">
                        <button className="btn-skin-1 btn-xs">AGGIUNGI AL CARRELLO</button>
                    </div> :
                    <p className="out-of-stock">Prodotto non disponibile</p>}
                <div className="other-details">
                    <Link to={`/product/${slug}-${product?.id}`}>Ulteriori dettagli</Link>
                </div>
                <div className="tags-container">
                    {arrTags?.map((tag, i) => (
                        <span className="tag" key={`${tag}-${i}`}>{tag}</span>
                    ))}
                </div>
            </div>

            {product.novita && <span className="news">NOVITÀ</span>}
        </div>
    )
})

