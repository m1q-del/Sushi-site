const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 5000 })
const clients = []

server.on('connection', (socket) => {
    console.log('Клиент подключился')
    clients.push(socket)

    socket.on('message', (message) => {
        console.log('Сообщение от пользователя: ', message.toString())
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString())
            }
        })
    })

    socket.on('close', () => {
        console.log('Пользователь отключился')
        const index = clients.indexOf(socket)
        if (index !== -1) {
            clients.splice(index, 1)
        }
    })
})

console.log('Сервер запущен на порту: 5000')