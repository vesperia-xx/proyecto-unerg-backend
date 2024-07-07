// Rutas de usuarios / Auth
// host + /api/auth
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearPasantias, crearServicio, obtenerPasantias, obtenerServicios } = require('../controllers/inscripciones');

const { validarCampos } = require('../middlewares/validar-campos');


router.post('/pasantias', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('empresa', 'La empresa es obligatoria').not().isEmpty(),
    check('tutorAcademico', 'El tutor académico es obligatorio').not().isEmpty(),
    check('tutorEmpresarial', 'El tutor empresarial es obligatorio').not().isEmpty(),
    validarCampos
],
    crearPasantias);

router.post('/servicio', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('empresa', 'La empresa es obligatoria').not().isEmpty(),
        check('tutorAcademico', 'El tutor comunitario es obligatorio').not().isEmpty(),
        check('tutorComunitario', 'El tutor comunitario es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearServicio);

router.get('/registro-pasantias', obtenerPasantias);
router.get('/registro-servicio', obtenerServicios);

module.exports = router;