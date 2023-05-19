const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require('./dogsRouter');
const routesTemperaments = require('./tempermantsRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRouter);
router.use('/temperaments', routesTemperaments);

module.exports = router;
