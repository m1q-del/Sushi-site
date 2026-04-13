import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"; 
import Header from "./components/Header/Header"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import Login from "./pages/LoginPage/Login"
import Auth from "./components/Auth/Auth";
import HelperChat from "./pages/helperChat/HelperChat";

function App() {
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)

    return (
        <BrowserRouter>
            <div className="App">
                <Header
                    show={show}
                    setShow={setShow}
                    items={items}
                    setItems={setItems}
                />
                
                <Routes>
                    <Route 
                        path="/" 
                        element={<CatalogPage />} 
                    />
                    <Route 
                        path="/registration" 
                        element={<RegistrationPage />} 
                    />
                    <Route 
                        path="/login" 
                        element={<Login />} 
                    />
                    <Route
                        path="/auth"
                        element={<Auth />}
                    />
                </Routes>

                <HelperChat/>
            </div>
        </BrowserRouter>
    )
}

export default App