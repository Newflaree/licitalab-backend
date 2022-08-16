import { Router } from 'express';
import {check} from 'express-validator';
// Controllers
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent
} from '../controllers/events';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/events'
*/
const router: Router = Router();

router.use( validateJWT );

router.post( '/', [
  validateFields
], createEvent );

router.get( '/', [], getEvents );
router.get( '/:id', [], getEvent );
router.put( '/:id', [], updateEvent );
router.delete( '/:id', [], deleteEvent );

export default router;

