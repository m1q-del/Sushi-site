import { useEffect, useRef, useState } from "react"
import './HelperChat.css'

const HelperChat = ()=>{
    const [chatOpen, setChatOpen] = useState(false)   
    const [message, setMessage] = useState([{text: 'Здравствуйте, чем могу помочь?', from: 'other'}])
    const [input , setInput] = useState('')
    const [socket, setSocket] = useState(null)
    const lastMessage = useRef('')


    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:5000')
        let connect = false

        ws.onopen = ()=>{
            connect = true
            console.log('WebSocket подключен')
        }

         ws.onmessage = (event) => {
            console.log('Получено:', event.data)
            if(event.data === lastMessage.current){
                return
            }

            setMessage(prev => [...prev, { text: event.data, from: 'other' }])
        }

        ws.onerror = (error)=>{
            console.log('Ошибка:s ',error)
        }

        setSocket(ws)
        return () =>{
            if(connect && ws.readyState === WebSocket.OPEN){
            ws.close()
            }
        }


    },[])

    const handleMessage = ()=>{
        if(input.trim() === '' || !socket) return

        lastMessage.current = input

    setMessage(prev => [...prev, { text: input, from: 'me' }])

        socket.send(input)
        setInput('')

        setTimeout(()=>{
            lastMessage.current = ''
        },500)
    }


    return (
        <>
            <div 
            className="chat-button"
            onClick={()=>setChatOpen(true)}
            >
                🎧
            </div>

            {chatOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <span>
                            Чат поддержки
                        </span>

                        <button
                        onClick={()=>setChatOpen(false)}
                        >Закрыть
                        </button>
                    </div>


                    <div className="chat-messages">
                        {message.map((message , index)=>{
                            return <div
                                key = {index}
                                className={`message ${message.from === 'me' ? 'message-right' : 'message-left'}`}
                                >
                                    <span className="message-bubble">
                                        {message.text}
                                    </span>
                                </div>
                        })}
                    </div>

                    <div className="chat-input-container">
                        <input type="text"
                        className="chat-input"
                        placeholder="Введите сообщение"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        onKeyPress={(e)=> e.key === 'Enter' && handleMessage()}
                        />


                        <button
                        className="chat-send"
                        onClick={handleMessage}
                        >
                            Отправить
                        </button>
                    </div>

                </div>
            )}
        </>
    )

}

export default HelperChat


