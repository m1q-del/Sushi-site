import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../header/header";
import Catalog from "../sushiItem/sushiItem";
import Registr from "../registration/registration";

function App (){
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)

    const addItemsBasket = (product) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
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
                    <Route path="/" element={<Catalog addItemsBasket={addItemsBasket} />} />
                    <Route path="/registration" element={<Registr />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App