import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  authLogin,
  authRegister,
  renewToken
} from '../controllers/auth';
// Helpers
import { userEmailValidator } from '../helpers/db';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/auth'
*/
const router: Router = Router();

router.post( '/register', [
  check( 'name', 'Name is required' ).not().isEmpty(),
  check( 'email', 'Email is required' ).isEmail(),
  check( 'email' ).custom( userEmailValidator ),
  check( 'password', 'Password must be longer than 6 char' ).isLength({ min: 6 }),
  validateFields
], authRegister );

router.post( '/login', [
  check( 'email', 'Email is required' ).isEmail(),
  check( 'password', 'Password is required' ).not().isEmpty(),
  validateFields
], authLogin );

router.get( '/renew', [
  validateJWT,
  validateFields
], renewToken );

export default router;
