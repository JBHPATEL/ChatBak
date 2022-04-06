const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http,{
    cors: {
      methods: ["GET", "POST" , "PUT" , "DELETE"]
    }
  })

io.on('connection', socket => {
    console.log("connect");
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
    console.log(message);   
  })
})

http.listen(8000, function() {
  console.log('listening on port 8000')
})