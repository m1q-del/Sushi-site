const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 5000 })
const clients = []

server.on('connection', (socket) => {
    console.log('Клиент подключился, всего:', clients.length + 1)
    clients.push(socket)

    socket.on('message', (message) => {
        console.log('Сообщение от клиента:', message.toString())
        console.log('Отправляем всем, кроме отправителя...')
        
        clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message.toString())
                console.log('  → отправлено другому клиенту')
            }
        })
    })

    socket.on('close', () => {
        console.log('Пользователь отключился')
        const index = clients.indexOf(socket)
        if (index !== -1) {
            clients.splice(index, 1)
        }
        console.log('Осталось клиентов:', clients.length)
    })
})

console.log('Сервер запущен на порту: 5000')