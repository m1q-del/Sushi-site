import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";  // ← убрали useEffect
import Header from "./components/Header/Header"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import Login from "./pages/LoginPage/Login"
import Auth from "./components/Auth/Auth";
import HelperChat from "./pages/helperChat/HelperChat";

function App() {
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)

    const addItemsBasket = (product) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity) + 1 }
                        : item
                )
            } else {
                return [...prevItems, { ...product, quantity: 1 }]
            }
        })
    }

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
                        element={<CatalogPage addItemsBasket={addItemsBasket} />} 
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