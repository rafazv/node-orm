const database = require('../models')

class PessoaController {
    static async getAll(req, res) {
        try {
            const allPeople = await database.Pessoas.findAll()
            return res.json(allPeople)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController