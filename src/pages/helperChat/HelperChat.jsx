import { useEffect, useState } from "react"

const HelperChat = ()=>{
    const [chatOpen, setChatOpen] = useState(false)   
    const [massage, setMassage] = useState([{text: 'Здравствуйте, чем могу помочь?', sender: "support"}])
    const [input , setInput] = useState('')
    const [socket, setSocket] = useState(null)


    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:5000')

        ws.onmessage = (event)=>{
            setMassage(prev => [...prev, {text: event.data, from: 'other'}])
        }

        setSocket(ws)
        return () =>{
            ws.close()
        }

    },[])

    const handleMassage = ()=>{
        if(input.trim() === '' || !socket) return

        socket.send(input)
        setMassage(prev => [...prev, {text:input, from: 'me'}])
        setInput('')
    }

}