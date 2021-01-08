const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.getAll)
router.get('/pessoas/:id', PessoaController.getOne)
router.post('/pessoas', PessoaController.create)
router.put('/pessoas/:id', PessoaController.update)
router.delete('/pessoas/:id', PessoaController.delete)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getOneRegister)
router.post('/pessoas/:estudanteId/matricula', PessoaController.createRegister)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateRegister)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteRegister)


module.exports = router