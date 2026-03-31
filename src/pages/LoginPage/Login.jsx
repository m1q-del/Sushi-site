import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

const Login = ()=>{
    const navigate = useNavigate()

    const [load, setLoad] = useState(false)
    const [error , setError] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });



        const handleFormDataLogin = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoad(true)
        setError('')

        try{
            setTimeout(()=>{
                navigate('/auth')
            },1000)
        } catch{
            setError('Ошибка')
        } finally{
            setLoad(false)
        }
    }


    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Вход в аккаунт</h2>                
                    <form onSubmit={handleSubmit}>
                    <p>Почта:</p>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormDataLogin}
                        placeholder="example@mail.com"
                        required
                        disabled={load}
                    />

                    <p>Пароль:</p>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormDataLogin}
                        placeholder="Введите пароль"
                        required
                        disabled={load}
                    />
                    
                    <button 
                        type="submit"
                        disabled={load}
                        className={load ? 'loading' : ''}
                    >
                        {load ? 'Вход...' : 'Войти'}
                    </button>
                    
                    <button 
                        type="button" 
                        className="cancel-btn" 
                        onClick={() => navigate('/')}
                        disabled={load}
                    >
                        На главную
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login