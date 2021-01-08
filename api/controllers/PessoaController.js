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

    static async getOne(req, res) {
        const { id } = req.params
        try {
            const person = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(person)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const newPerson = req.body
        try {
            const createdPerson = await database.Pessoas.create(newPerson)
            return res.status(201).json(createdPerson)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const newData = req.body
        try {
            await database.Pessoas.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedPerson = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(updatedPerson)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.json({message: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneRegister(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const oneRegister = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.json(oneRegister)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createRegister(req, res) {
        const { estudanteId } = req.params
        const newRegister = {...req.body, estudante_id: Number(estudanteId)}
        try {
            const createdRegister = await database.Matriculas.create(newRegister)
            return res.status(201).json(createdRegister)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateRegister(req, res) {
        const { estudanteId, matriculaId } = req.params
        const newData = req.body
        try {
            await database.Matriculas.update(newData, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const updatedRegister = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.json(updatedRegister)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteRegister(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.json({message: `id ${matriculaId} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController