import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent
} from '../controllers/events';
// Helpers
import { isDate } from '../helpers/db';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/events'
*/
const router: Router = Router();

router.use( validateJWT );

router.post( '/', [
  check( 'title', 'Title is required' ).not().isEmpty(),
  check( 'start', 'Start date is required' ).custom( isDate ),
  check( 'end', 'End date is required' ).custom( isDate ),
  validateFields
], createEvent );

router.get( '/', [], getEvents );
router.get( '/:id', [], getEvent );
router.put( '/:id', [], updateEvent );
router.delete( '/:id', [], deleteEvent );

export default router;

