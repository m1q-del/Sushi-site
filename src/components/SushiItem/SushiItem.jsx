import "./SushiItem.css"
import Card from "../Card/Card"
const SushiItem = ({ sushi, onAddToBasket }) => {
    return (
        <Card
            title={sushi.title}
            price={sushi.price}
            image={sushi.image}
            isNew={sushi.isNew}
            description={sushi.description}
            onAddToBasket={() => onAddToBasket(sushi)}
        />
        
        
    )
}

export default SushiItem