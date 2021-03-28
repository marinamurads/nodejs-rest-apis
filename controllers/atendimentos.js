module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('GET na rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)
        
        res.send('POST na rota de atendimentos')

    })
}