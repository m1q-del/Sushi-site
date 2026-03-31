import { useEffect, useRef, useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [values, setValues] = useState(["", "", "", "", "", ""]);
    const inputRef = useRef([]);

    const navigate = useNavigate()

    const generateNum = () => {
        let result = "";
        for (let i = 0; i < 6; i++) {
            const nums = Math.floor(Math.random() * 10);
            result += nums;
        }
        return result;
    };

    useEffect(()=>{
        const allFiled = values.every(value => value !== "")

        if(allFiled){
            setTimeout(()=>{
                navigate('/')
            },500)
        }
    })


    function LastIndex() {
        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i]) {
                return i;
            }
        }
        return -1;
    }

    function emptyInput() {
        for (let i = 0; i < values.length; i++) {
            if (!values[i]) {
                return i;
            }
        }
        return -1;
    }

    const handleDelet = (index, e) => {
        const lastIndex = LastIndex()

    if (e.key === "Backspace") {
        e.preventDefault();

        if (values[index] !== "" && index === lastIndex) {
            const newValues = [...values];
            newValues[index] = "";
            setValues(newValues);
            inputRef.current[index]?.focus();
        } 
        else if (index === lastIndex + 1 && lastIndex >=0) {
            const newValues = [...values];
            newValues[index - 1] = "";
            setValues(newValues);
            inputRef.current[index - 1]?.focus();
        }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
    }
}

const handleInput = (index, e) => {
    const value = e.target.value;

    if (value && !/^\d$/.test(value)) {
        return;
    }

    const newValue = value.slice(-1);
    const firstEmptyIndex = emptyInput();

    if (firstEmptyIndex === -1) {
        return;
    }

    if (index !== firstEmptyIndex && newValue) {
        inputRef.current[firstEmptyIndex]?.focus();
        return;
    }

    if (newValue) {
        const newValues = [...values];
        newValues[index] = newValue;
        
        let nextEmptyIndex = -1;
        for (let i = 0; i < newValues.length; i++) {
            if (!newValues[i]) {
                nextEmptyIndex = i;
                break;
            }
        }
        
        setValues(newValues);
        
        if (nextEmptyIndex !== -1) {
            inputRef.current[nextEmptyIndex]?.focus();
        }
    }
};

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2>Подтверждение</h2>
                <p className="auth-subtitle">Введите код из email</p>
                
                <div className="input-container">
                    {values.map((value, index) => {
                        return (
                            <input
                                key={index}
                                className="auth-input"
                                value={value}
                                onChange={(e) => handleInput(index, e)}
                                onKeyDown={(e) => handleDelet(index, e)}
                                maxLength="1"
                                pattern="\d"
                                ref={(el) => (inputRef.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                autoFocus={index === 0}
                                autoComplete="off"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default Auth;