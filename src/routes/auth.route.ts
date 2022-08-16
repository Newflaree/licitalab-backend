import { Router } from 'express';
// Controllers
// Helpers
// Middlewares

/*
  PATH: '/api/auth'
*/
const router: Router = Router();

router.post( '/register' );
router.post( '/login' );

export default router;
