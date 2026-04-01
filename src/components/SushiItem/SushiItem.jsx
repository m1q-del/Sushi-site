import "./SushiItem.css"
import Card from "../Card/card"
import { Generate } from "../../generateId/GenerateId"

export const sushiItems = [
    {
        id:1,
        title: "Суши",
        price: 375,
        description: "3 шт.",
        isNew: false,
        image: "/src/image/i.webp",
    }, 
    {
        id:2,
        title: "Суши",
        price: 375,
        description: "3 шт.",
        isNew: true,
        image: "/src/image/i.webp"
    },
    {
        id:3,
        title: "Суши",
        price: 375,
        description: "3 шт.",
        isNew: false,
        image: "/src/image/i.webp"  
    },
    {
        id: Generate(),
        title: item.name,
        price: item.price,
        description: item.description,
        isNew: item.isNew,
        image: item.image
    }
]


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