const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('GET na rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {

        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        console.log(req.body)
        
        res.send('POST na rota de atendimentos')

    })
}