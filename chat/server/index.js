
const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const path = require("path")
const app = express()

const server = http.createServer(app)
const io = new Server(server)
app.use(express.static("./Public"))

app.get("/"  , (req , res) => {
return res.path("./Public./index.html")
})

io.on("connection", (socket) => {
  socket.on("message-user" , (message) => {
    console.log("user -->" , message)
  })
});

app.listen(3000 , () => {
    console.log(`Server running at http://localhost:3000`)
})