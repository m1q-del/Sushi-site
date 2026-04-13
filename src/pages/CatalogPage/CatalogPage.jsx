import { useEffect, useState } from "react"
import "./CatalogPage.css"
import { getAllProducts } from "../../API/ProductsAPI"
import SushiItem from '../../components/SushiItem/SushiItem'
import useCartStore from "../../components/Basket/BasketFunction"

const CatalogPage = () => {
    const [sort, setSort] = useState('')
    const [products, setProducts] = useState([])

    const addItemsBasket = useCartStore((state) => state.addBasketItem);

    useEffect(()=>{
        getAllProducts().then(response => {
            if(response.success){
                setProducts(response.products)
            }
        })
    },[])


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
                {products.map(product => (
                    <SushiItem 
                        key={product.id} 
                        sushi={product}
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