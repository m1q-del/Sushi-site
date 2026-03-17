import Card from "../card/card"
import "./sushiItem.css"

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
    },{
        id:4,
        title: "Суши",
        price: 375,
        description: "3 шт.",
        isNew: true,
        image: "/src/image/i.webp"
    }
]

const Catalog = ({ addItemsBasket  }) =>{
    return (
        <div className="catalog">
            <div className="catalog-header">
                <h1>Суши</h1>
                <div className="catalog-filter">
                    <button className="filter-btn">Фильтр</button>
                    <select className="sort-select">
                        <option value="">Показать сначала</option>
                        <option value="">Сначала новые</option>
                        <option value="">Сначала дешевые</option>
                        <option value="">Сначала дорогие</option>
                    </select>
                </div>
            </div>

            <div className="catalog-grid">
                {sushiItems.map(sushi =>(
                    <Card
                        key = {sushi.id}
                        title = {sushi.title}
                        price = {sushi.price}
                        image = {sushi.image}
                        isNew = {sushi.isNew}
                        description = {sushi.description}
                        onAddToBasket={()=>{addItemsBasket(sushi)}}
                    />
                ))}
            </div>


            <div className="catalog-header">
                <h1>Суши</h1>
                <div className="catalog-filter">
                    <button className="filter-btn">Фильтр</button>
                    <select className="sort-select">
                        <option value="">Показать сначала</option>
                        <option value="">Сначала новые</option>
                        <option value="">Сначала дешевые</option>
                        <option value="">Сначала дорогие</option>
                    </select>
                </div>
            </div>

            <div className="catalog-grid">
                {sushiItems.map(sushi =>(
                    <Card
                        key = {sushi.id}
                        title = {sushi.title}
                        price = {sushi.price}
                        image = {sushi.image}
                        isNew = {sushi.isNew}
                        description = {sushi.description}
                        onAddToBasket={()=>{addItemsBasket(sushi)}}
                    />
                ))}
            </div>
            <div className="catalog-header">
                <h1>Суши</h1>
                <div className="catalog-filter">
                    <button className="filter-btn">Фильтр</button>
                    <select className="sort-select">
                        <option value="">Показать сначала</option>
                        <option value="">Сначала новые</option>
                        <option value="">Сначала дешевые</option>
                        <option value="">Сначала дорогие</option>
                    </select>
                </div>
            </div>

            <div className="catalog-grid">
                {sushiItems.map(sushi =>(
                    <Card
                        key = {sushi.id}
                        title = {sushi.title}
                        price = {sushi.price}
                        image = {sushi.image}
                        isNew = {sushi.isNew}
                        description = {sushi.description}
                        onAddToBasket={()=>{addItemsBasket(sushi)}}
                    />
                ))}
            </div>
            


        </div>

    )
}



export default Catalog
