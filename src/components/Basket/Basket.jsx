import "./Basket.css"
import useCartStore from "./BasketFunction"

const Basket = () => {

    const show = useCartStore((state) => state.show);
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const hideBasket = useCartStore((state) => state.hideBasket);
    const totalPrice = useCartStore((state) => state.priceItems());

    return (
        <div>
            {show && (
                <div className="basket-modal">
                    <div className="basket-modal-content">
                        <h2>Корзина</h2>
                        <button onClick={hideBasket}>Закрыть</button>

                        {items.length === 0 ? (
                            <p>Корзина пуста</p>
                        ) : (
                            <>
                                <ul>
                                    {items.map((item) => {
                                        if (!item || typeof item.id === 'undefined') {
                                            return null;
                                        }

                                        const uniqueKey = String(item.id); 
                                        return (
                                            <li key={uniqueKey}>
                                                {item.title} - {item.price}₽ x {item.quantity}
                                                <button onClick={() => removeItem(item.id)}>Удалить товар</button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="basket-total">
                                    <strong>Итого: {totalPrice}₽</strong>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Basket
