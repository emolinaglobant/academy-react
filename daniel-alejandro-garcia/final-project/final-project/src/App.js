import InitialPage from "./pages/InitialPage";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { NewsApiContextProvider } from "./context/newsApiContext/NewsApiContext";
import { AuthProvider } from "./context/authContext/AuthContext";
import { PokeApiContextProvider } from "./context/pokeApiContext/PokeApiContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import MyAccount from "./pages/MyAccount";
import SearchPage from "./pages/SearchPage";
import InformationPokemon from "./pages/InformationPokemon";
import SurpriseMePage from "./pages/SurpriseMePage";
import { BrowserRouter } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <PokeApiContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <NewsApiContextProvider>
                  <InitialPage />
                </NewsApiContextProvider>
              }
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/surpriseme" element={<SurpriseMePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/myAccount"
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pokemon/information/:id"
              element={<InformationPokemon />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PokeApiContextProvider>
      </AuthProvider> 
    </BrowserRouter>
    </> 
  );
}

export default App;
