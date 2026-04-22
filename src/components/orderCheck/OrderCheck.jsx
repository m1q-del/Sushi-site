import { useState } from 'react'
import './OrderCheck.css'
import { useNavigate } from 'react-router-dom'
import useCartStore from '../Basket/BasketFunction'

const OrderForm = ()=>{
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const createOrder = useCartStore((state) => state.createOrder)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        try{
            const result = await createOrder({name,phone})
            console.log(result.message)
            console.log('Заказ:', result.order)
            navigate('/')
        } catch(error){
            console.log('Ошибка', error.message)
        }
    }



    return(
        <div className='order-form-container'>
            <form action="" onSubmit={handleSubmit}>
                <p>Номер телефона:</p>
                <input type="text" placeholder='+7 (___)-___-__-__'
                value={phone}
                onChange={(e) =>{
                setPhone(e.target.value.replace(/\D/g,''))
                }}
                required
                />
                <p>Имя пользователя:</p>
                <input type="text" name="" id="" placeholder='Вася'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                />

                <button
                >Отправить</button>
            </form>
        </div>
    )
}

export default OrderForm