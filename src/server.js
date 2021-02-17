
const express = require("express")
const server = express()

//configurar pasta pública
server.use(express.static("public"))


//utilizando templates engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true

})

//configurar caminhos
//página inicial
server.get("/", (req, res) => {
   return res.render("index.html")
})
server.get("/creat-point", (req, res) => {
  return  res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
   return  res.render("search-results.html")
 })
//ligar o servidor
server.listen(3000)
