import { Navigate, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
// import del provider dei prodotti 
import GlobalProductsProvider from "./context/GlobalProducts"

// import delle pagine
import HomePage from "./pages/HomePage"
import OtticaPage from "./pages/OtticaPage"
import OreficeriaPage from "./pages/OreficeriaPage"
import ContattiPage from "./pages/ContattiPage"
import ShopOnlinePage from "./pages/ShopOnlinePage"
import CarthPage from "./pages/CarthPage"
import NotFoundPage from "./pages/NotFoundPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import ConditionsPage from "./pages/ConditionsPage"
import CategoryPage from "./pages/CategoryPage"
import ProductDetail from "./pages/ProductDetail"
import FavPage from "./pages/FavPage"

// import del layout di default
import DefaultLayout from "./layout/DefaultLayout"
import Spinner from "./components/Spinner";

// import del componente che scrolla in automatico in su al montaggio delle pagine 
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setAppLoading(false);
    }, 300);

    return () => clearTimeout(delay);
  }, []);

  if (appLoading) {
    return (
      <div className="fullpage-spinner-wrapper">
        <Spinner />
      </div>
    );
  }

  return (

    <GlobalProductsProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ottica" element={<OtticaPage />} />
          <Route path="/oreficeria" element={<OreficeriaPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/shop-online" element={<ShopOnlinePage />} />
          <Route path="/shop-online/:category" element={<CategoryPage />} />
          <Route path="/carrello" element={<CarthPage />} />
          <Route path="/preferiti" element={<FavPage />} />
          {/* Rotte per le pagine statiche */}
          <Route path="/priacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/condizioni-di-vendita" element={<ConditionsPage />} />
          <Route path="/product/:slugAndId" element={<ProductDetail />} />
          {/* Rotta per gestire il caso in cui la pagina non esiste */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalProductsProvider>

  )
}

export default App
