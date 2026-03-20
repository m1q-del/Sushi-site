import "./Basket.css"

const Basket = ({show, setShow, items, setItems}) => {

    const hideBasket = () => {
        setShow(false)
    }

    const removeItem = (productId) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.id === productId) {
                    const newQuantity = (item.quantity || 1) - 1
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
                }
                return item
            })
            
            return updatedItems.filter(item => item !== null)
        })
    }

    const priceItems = () => {
        return items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    }

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
                                    {items.map((item, index) => {
                                        if (!item || typeof item.id === 'undefined') {
                                            return null;
                                        }

                                        const uniqueKey = String(item.id); 
                                        return (
                                            <li key={uniqueKey}>
                                                {item.title} - {item.price}₽ x {item.quantity || 1}
                                                <button onClick={() => removeItem(item.id)}>Удалить товар</button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="basket-total">
                                    <strong>Итого: {priceItems()}₽</strong>
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
