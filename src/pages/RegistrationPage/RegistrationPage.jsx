import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../API/LoginAPI";
import "./Registration.css";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        setError("");

        try {
            const result = await loginApi(formData);
            console.log('Login successful:', result);
            localStorage.setItem('userId', result.userId);
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            
            switch(error.status) {
                case 401:
                    setError('Wrong password or email');
                    break;
                case 403:
                    setError('User is blocked');
                    break;
                case 500:
                    setError('Server error');
                    break;
                case 0:
                    setError('Network error');
                    break;
                default:
                    setError('Error');
            }
        } finally {
            setLoad(false);
        }
    };

    return (
        <div className="registr-page">
            <div className="registr-container">
                <h2>Регистрация</h2>
                
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <p>Имя:</p>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormData}
                        required
                        disabled={load}
                    />

                    <p>Почта:</p>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormData}
                        required
                        disabled={load}
                    />

                    <p>Пароль:</p>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormData}
                        required
                        disabled={load}
                    />
                    
                    <button 
                        type="submit" 
                        disabled={load}
                        className={load ? 'loading' : ''}
                    >
                        {load ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                    
                    <button 
                        type="button" 
                        className="cancel-btn" 
                        onClick={() => navigate('/')}
                        disabled={load}
                    >
                        На главную
                    </button>

                    <button
                    onClick={() => navigate("/login")}
                    >Есть аккаунт?</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;