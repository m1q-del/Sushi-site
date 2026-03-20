import { useState } from "react"
import SushiItem, { sushiItems } from "../../components/SushiItem/SushiItem"
import "./CatalogPage.css"

const CatalogPage = ({ addItemsBasket }) => {
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    const renderCatalogSection = (title) => (
        <>
            <div className="catalog-header">
                <h1>{title}</h1>
                <div className="catalog-filter">
                    <button className="filter-btn">Фильтр</button>
                    <select className="sort-select" onChange={handleSort} value={sort}>
                        <option value="">Показать сначала</option>
                        <option value="new">Сначала новые</option>
                        <option value="cheap">Сначала дешевые</option>
                        <option value="expensive">Сначала дорогие</option>
                    </select>
                </div>
            </div>

            <div className="catalog-grid">
                {sushiItems.map(sushi => (
                    <SushiItem 
                        key={sushi.id} 
                        sushi={sushi}
                        onAddToBasket={addItemsBasket}
                    />
                ))}
            </div>
        </>
    )

    return (
        <div className="catalog-page">
            {renderCatalogSection("Суши")}
            {renderCatalogSection("Суши")}
            {renderCatalogSection("Суши")}
        </div>
    )
}

export default CatalogPage