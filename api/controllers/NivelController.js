const database = require('../models')

class NivelController {

    static async getAll(req, res) {
      try {
        const allLevels = await database.Niveis.findAll()
        return res.json(allLevels)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async getOne(req, res) {
        const { id } = req.params
        try {
            const oneLevel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(oneLevel)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async create(req, res) {
        const newLevel = req.body
        try {
            const createdClass = await database.Niveis.create(newLevel)
            return res.status(201).json(createdClass)
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    static async update(req, res) {
        const newData = req.body
        const { id } = req.params
        try {
            await database.Niveis.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedLevel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.json(updatedLevel)
        } catch (error) {
            return res.status(500).json(error.message);
        } 
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy({
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

module.exports = NivelController
