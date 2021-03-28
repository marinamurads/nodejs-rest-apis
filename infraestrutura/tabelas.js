class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
        console.log('Tabelas foram chamadas')
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT null, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARy KEY(id)) '

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela atendimentos criada com sucesso')
            }
        })

    }
}

module.exports = new Tabelas