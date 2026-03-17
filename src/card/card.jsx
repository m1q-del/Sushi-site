import "./card.css"

const Card = ({title, price , isNew , description, image,onAddToBasket}) =>{
    return (
        <div className="card">
            {isNew && <div className="is-new">НОВИНКА!</div>}
            <div className="image-card">
                <img src={image} alt="" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                {description && <p className="card-description">{description || "Нету описания"}</p>}
                <div className="card-footer">
                    <span className="card-price">{price} ₽</span>
                    <button onClick={onAddToBasket} className="card-btn">В корзину</button>
                </div>
            </div>
        </div>
    )
}

export default Card