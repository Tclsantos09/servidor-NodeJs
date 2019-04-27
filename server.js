const express = require('express')
const http = require('http')
const app = express()
const port = 3000

app.get('/', function(req,res){
  res.sendFile(__dirname + '/pages/pedidos.html');
});

app.get('/dados', function(req,res){
  res.sendFile(__dirname + '/pages/dados.html');
});

app.get('/final', (req, res) => {
  res.send(`<h3 align='center'>Pedido enviado</h3>`)
})

http.createServer(app).listen(3000,() => console.log("Servidor rodando em http://localhost:3000"));
