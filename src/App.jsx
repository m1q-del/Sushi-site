import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import Login from "./pages/LoginPage/Login"
import Auth from "./components/Auth/Auth";

function App() {
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)


    useEffect(()=>{
        const socket = new WebSocket('ws://localhost:5000')
        let connect = false

        socket.onopen = ()=>{
            console.log('Сервер подключен')
            connect = true
        }

        socket.onmessage = (event)=>{
            console.log(`Сообщение сервера: ${event.data}`)
        }

        socket.onerror = (error)=>{
            console.log(`Ошибка: `, error)
        }

        return ()=>{
            if(connect){
                socket.close()
            }
        }
    },[])



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
            </div>
        </BrowserRouter>
    )
}

export default App