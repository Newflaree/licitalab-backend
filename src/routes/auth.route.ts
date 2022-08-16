import { Router } from 'express';
// Controllers
import {
  authLogin,
  authRegister,
  renewToken
} from '../controllers/auth';
// Helpers
// Middlewares

/*
  PATH: '/api/auth'
*/
const router: Router = Router();

router.post( '/register', authRegister );
router.post( '/login', authLogin );

router.get( '/renew', renewToken );

export default router;
