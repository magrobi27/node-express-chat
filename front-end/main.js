(function () {
    const server = 'http://127.0.0.1:3006'
    const socket = io(server);

    socket.on('notification', (data) => {
        console.log('Message depuis le seveur:', data);
    })

    fetch(`${server}/messages`).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    })
    
    
}
)()

