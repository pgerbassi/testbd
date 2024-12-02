const express = require('express')
const mongoose = require('mongoose')

//const targetDom = document.querySelector(".data")

const app = express()
app.use(express.json());
const port = 3000
mongoose.connect('mongodb+srv://bibitogerbassi:nexyn159@nexyndb.gw7vo.mongodb.net/?retryWrites=true&w=majority&appName=NexynDB');

const Cliente = mongoose.model('Cliente',{ 
    nome: String,
    email: String,
    documento: String,
    CPF: Boolean
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/webhook',  async (req, res) => {

    const clienteData = req.body

    const cliente = new Cliente({
        nome: clienteData.nome
    })

    await cliente.save();

    res.send(clienteData);
    console.log(clienteData);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})