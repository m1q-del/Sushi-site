import { useState } from "react"
import { useNavigate } from "react-router";
import "./registration.css"

const Registr = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleFormData = (e)=>{
        const {name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('form submit: ', formData)
        
        navigate('/');
    }

    return (
        <div className="registr-page">
            <div className="registr-container">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <p>Имя:</p>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormData}
                        required
                    />

                    <p>Почта:</p>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormData}
                        required
                    />

                    <p>Пароль:</p>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormData}
                        required
                    />
                    
                    <button type="submit">Зарегистрироваться</button>
                    <button 
                        type="button" 
                        className="cancel-btn" 
                        onClick={()=> navigate('/')}
                    >
                        На главную
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Registr