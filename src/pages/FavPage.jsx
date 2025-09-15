import { useGlobalProducts } from "../context/GlobalProducts"
import ProductCard from "../components/ProductCard";

export default function FavPage() {

    const { fav } = useGlobalProducts();

    return (
        <main className="category-page width-85">
            <h1 className="text-center title">I tuoi articoli preferiti</h1>
            <h4>{fav.length} articoli</h4>
            {fav.length === 0 && <h2 className='text-center'>Non hai ancora aggiunto nessun prodotto ai preferiti.</h2>}
            <div className="container-products">
                {fav.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}