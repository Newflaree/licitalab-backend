import { Router } from 'express';
import {check} from 'express-validator';
// Controllers
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/events'
*/
const router: Router = Router();

router.use( validateJWT );

router.post( '/', [] );
router.get( '/', [] );
router.get( '/:id', [] );
router.put( '/:id', [] );
router.delete( '/:id', [] );

export default router;

