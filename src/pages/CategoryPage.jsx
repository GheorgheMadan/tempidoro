import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { useGlobalProducts } from '../context/GlobalProducts';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { debounce } from 'lodash';
import { MdFilterList } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Filters from '../components/Filters';
import ActiveFilters from '../components/ActiveFilters';

export default function CategoryPage() {

    const { category } = useParams(); // es. "orologi"

    const { products, total, offset, limit, fetchProducts, loading,
        loadingMore, searching, setOffset, filters, setFilters, resetAll, handleFilter,
        getCategoryFilterList, categoryFilterList, firstTotal, setFirstTotal } = useGlobalProducts();

    const [showFilter, setShowFilter] = useState(false)
    const filterDropDownRef = useRef()
    // stato input di ricerca
    const [searchQuery, setSearchQuery] = useState("");
    // stato value del input utilizzato per svuotare il valore
    const [searchInput, setSearchInput] = useState("")

    // debounce per evitare chiamate API troppo frequenti
    const debouncedSearch = useCallback(
        debounce((name) => {
            setSearchQuery(name);
        }, 500
        ), [])


    // 2) fetch iniziale (categoria cambiata)
    useEffect(() => {
        if (!category) return;

        setFirstTotal(null)
        setSearchInput("");
        setSearchQuery("");
        resetAll();
        setOffset(0);

        (async () => {
            await fetchProducts({
                category,
                search: "",
                limit,
                offset: 0,
                append: false,
                filters: null
            });

            await getCategoryFilterList(category.toLowerCase());
        })();

    }, [category]);


    useEffect(() => {
        if (!category) return;

        // fetch SEMPRE se prodotti sono 0 (dopo filtro che non trova niente)
        const shouldFetch = (firstTotal > 40 && searchQuery === "") || total > 40 || products?.length === 0 || firstTotal > 40;

        if (!shouldFetch) return;

        fetchProducts({
            category,
            search: searchQuery,
            limit,
            offset: 0,
            append: false,
            filters
        });
    }, [searchQuery, filters, category, firstTotal]);


    // se il totale dei prodotti è =< 20 allora utilizzo useMemo per i filtri 
    const filteredProducts = useMemo(() => {
        const activeFilters = filters || {}; // fallback per evitare errori

        if (!products) return;

        let filtered = [...products];

        if (searchQuery) {
            filtered = filtered.filter(p => p.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
        }
        // filtri in locale
        if (activeFilters.order) {
            filtered.sort((a, b) => {
                const priceA = Number(a.price.replace(',', '.'));
                const priceB = Number(b.price.replace(',', '.'));

                if (activeFilters.order === 'price-asc') return priceA - priceB;
                if (activeFilters.order === 'price-desc') return priceB - priceA;
                if (activeFilters.order === 'name-asc') return a.title.localeCompare(b.title);
                if (activeFilters.order === 'name-desc') return b.title.localeCompare(a.title);
                return 0;
            });
        }
        if (activeFilters.isPromo) {
            filtered = filtered.filter((p) => {
                if (activeFilters.isPromo === "true") {
                    return p.in_promozione === true
                } else if (activeFilters.isPromo === "false") {
                    return p.in_promozione === false
                } else {
                    return
                }
            })
        }
        if (activeFilters.isNew) {
            filtered = filtered.filter((p) => {
                if (activeFilters.isNew === "true") {
                    return p.novita === true
                } else if (activeFilters.isNew === "false") {
                    return p.novita === false
                } else {
                    return
                }
            })
        }
        if (activeFilters.brand)
            filtered = filtered.filter(
                (p) => activeFilters.brand.trim().toLowerCase() === String(p.brand || '').trim().toLowerCase()
            );
        if (activeFilters.color) filtered = filtered.filter((p) => activeFilters.color === p.colore)
        if (activeFilters.material) filtered = filtered.filter((p) => activeFilters.material === p.materiale)
        if (activeFilters.finish) filtered = filtered.filter((p) => activeFilters.finish === p.finitura)
        if (activeFilters.genre) filtered = filtered.filter((p) => activeFilters.genre === p.genere)
        if (activeFilters.pietre) filtered = filtered.filter((p) => activeFilters.pietre === p.pietre)
        if (activeFilters.misura_anello) filtered = filtered.filter((p) => activeFilters.misura_anello === p.misura_anello)
        if (activeFilters.type) filtered = filtered.filter((p) => activeFilters.type === p.tipologia)
        if (activeFilters.misura_ansa) filtered = filtered.filter((p) => activeFilters.misura_ansa === p.misura_ansa)
        if (activeFilters.tipologia_cinturino) filtered = filtered.filter((p) => activeFilters.tipologia_cinturino === p.tipologia_cinturino)
        if (activeFilters.materiale_cinturino) filtered = filtered.filter((p) => activeFilters.materiale_cinturino === p.materiale_cinturino)
        if (activeFilters.materiale_cassa) filtered = filtered.filter((p) => activeFilters.materiale_cassa === p.materiale_cassa)
        if (activeFilters.tipologia_movimento) filtered = filtered.filter((p) => activeFilters.tipologia_movimento === p.tipologia_movimento)
        if (activeFilters.tipo_lenti) filtered = filtered.filter((p) => activeFilters.tipo_lenti === p.tipo_lenti)
        if (activeFilters.modello_gioielleria) filtered = filtered.filter((p) => activeFilters.modello_gioielleria === p.modello_gioielleria)


        return filtered;

    }, [products, filters, searchQuery]);

    // Funzione per caricare altri prodotti
    const handleLoadMore = () => {
        const newOffset = offset + limit;
        fetchProducts({
            category,
            search: searchQuery,
            limit,
            offset: newOffset,
            append: true,
            filters: filters
        });
    };

    const noResults = !loading && !loadingMore && !searching && products?.length === 0;

    // funzione per chiudere il dropdown quando si clicca all'esterno
    useEffect(() => {
        // Questa funzione verrà eseguita ogni volta che clicchi nel documento
        const handleClickOutside = (event) => {
            // Controlla se dropdownRef è assegnato e se l'elemento cliccato NON è dentro il menu
            if (filterDropDownRef.current && !filterDropDownRef.current.contains(event.target)) {
                // Se hai cliccato fuori, chiudi il menu a tendina
                setShowFilter(false)
            }
        }
        // Quando il componente è montato, aggiungi l'ascoltatore per i click nel documento
        document.addEventListener("mousedown", handleClickOutside)

        // Quando il componente viene smontato o rimosso dal DOM, rimuovi l'ascoltatore per evitare memory leak
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // verifico se si è ce qualche filtro attivo
    const isActive = Object.values(filters).some(value => value !== "");


    return (
        <main className="category-page width-85">
            <h1 className="text-center">{category}</h1>
            {/* Sezione ricerca */}
            <div className='container-search'>
                <MdFilterList className='filter-icon' onClick={() => setShowFilter(true)} />
                <div className='search-input'>
                    <input
                        type="text"
                        onChange={e => {
                            debouncedSearch(e.target.value)
                            setSearchInput(e.target.value)
                        }}
                        value={searchInput}
                        placeholder='Cerca...'
                    />
                    {searchInput.length > 0 && < span
                        className='cancel-input'
                        onClick={() => {
                            setSearchInput("")
                            setSearchQuery("")
                        }}>
                        ✕
                    </span>}
                </div>
                <IoIosSearch className='search-icon' />
                <Filters
                    filtersName={categoryFilterList.filters}
                    category={category}
                    show={showFilter}
                    onClose={() => setShowFilter(false)}
                    reset={() => resetAll()} filterDropDownRef={filterDropDownRef}
                    handleFilter={handleFilter}
                    filters={filters}
                // onApply={() => {
                //     fetchProducts({
                //         category,
                //         search: "",               // ← esclude la search
                //         offset: 0,
                //         filters
                //     });
                //     setShowFilter(false);        // chiude il dropdown se vuoi
                // }}
                // fetchProducts={fetchProducts}
                // searchQuery={searchQuery}
                />
            </div>

            <h4>{total <= 40 ? filteredProducts?.length : total} articoli</h4>
            <div className={`container-active-filters ${isActive ? "active" : ""}`}>
                <ActiveFilters filters={filters} setFilters={setFilters} />
            </div>
            {loading && searching && <Spinner />}
            {
                noResults && (
                    <h2 className='text-center'>Nessun prodotto trovato</h2>
                )
            }
            <div className="container-products">
                {total <= 40 ?
                    filteredProducts?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    )) :
                    products?.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>

            {
                products?.length < total && !loadingMore && (
                    <button onClick={handleLoadMore} className="btn-skin-1 btn-large">
                        Carica altri prodotti
                    </button>
                )
            }
            {loadingMore && <Spinner />}
        </main >
    );
}