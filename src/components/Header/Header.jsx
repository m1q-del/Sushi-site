import "./Header.css"
import Basket from "../Basket/Basket"
import { Link } from "react-router-dom"
import useCartStore from "../Basket/BasketFunction"

const Header = () => {
    const items = useCartStore((state) => state.items);
    const setShow = useCartStore((state) => state.setShow);

    const getTotalItemsCount = () => {
        return items.reduce((total, item) => total + (item.quantity || 1), 0)
    }

    return (
        <div>
            <header className="header">
                <Link to="/" className="logo">logo</Link>
                
                <ul className="menu-search">
                    <li>
                        <button className="btn-menu">О нас</button>
                    </li>
                    <li>
                        <button className="btn-menu">Контакты</button>
                    </li>
                    <li>
                        <Link to="/">
                            <button className="btn-menu">Меню</button>
                        </Link>
                    </li>
                </ul>
                
                <div className="user-menu">
                    <ul className="account">
                        <li>
                            <Link to="/registration">
                                <button className="account-btn">Регистрация</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="basket">
                        <li>
                            <button onClick={() => setShow(true)} className="basket-btn">
                                Корзина ({getTotalItemsCount()})
                            </button>

                            <Basket />
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header