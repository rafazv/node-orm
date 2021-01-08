const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
    .get('/niveis', NivelController.getAll)
    .get('/niveis/:id', NivelController.getOne)
    .post('/niveis', NivelController.create)
    .put('/niveis/:id', NivelController.update)
    .delete('/niveis/:id', NivelController.delete)

module.exports = router