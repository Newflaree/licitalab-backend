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
import { eventIdValidator, isDate } from '../helpers/db';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/events'
*/
const router: Router = Router();

router.use( validateJWT );

router.post( '/', [
  check( 'title', 'Title is required' ).not().isEmpty(),
  check( 'desc', 'Description is required' ).not().isEmpty(),
  check( 'start', 'Start date is required' ).custom( isDate ),
  check( 'end', 'End date is required' ).custom( isDate ),
  validateFields
], createEvent );

router.get( '/', [
  validateFields
], getEvents );

router.get( '/:id', [
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( eventIdValidator ),
  validateFields
], getEvent );

router.put( '/:id', [
  check( 'title', 'Title is required' ).not().isEmpty(),
  check( 'desc', 'Description is required' ).not().isEmpty(),
  check( 'start', 'Start date is required' ).custom( isDate ),
  check( 'end', 'End date is required' ).custom( isDate ),
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( eventIdValidator ),
  validateFields
], updateEvent );

router.delete( '/:id', [
  check( 'id', 'Invalid id' ).isMongoId(),
  check( 'id' ).custom( eventIdValidator ),
  validateFields
], deleteEvent );

export default router;

