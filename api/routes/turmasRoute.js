const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
    .get('/turmas', TurmaController.getAll)
    .get('/turmas/:id', TurmaController.getOne)
    .post('/turmas', TurmaController.create)
    .put('/turmas/:id', TurmaController.update)
    .delete('/turmas/:id', TurmaController.delete)

module.exports = router