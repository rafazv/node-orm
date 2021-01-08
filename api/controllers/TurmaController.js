const database = require('../models')

class TurmaController {

    static async getAll(req, res) {
      try {
        const allClasses = await database.Turmas.findAll()
        return res.json(allClasses)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async getOne(req, res) {
        const { id } = req.params
        try {
            const oneClass = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(oneClass)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newClass = req.body
        try {
            const createdClass = await database.Turmas.create(newClass)
            return res.status(201).json(createdClass)
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    static async update(req, res) {
        const newData = req.body
        const { id } = req.params
        try {
            await database.Turmas.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedClass = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(updatedClass)
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return { message: `O id ${id} foi deletado`}
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }
}

module.exports = TurmaController
