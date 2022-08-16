import { Response } from 'express';
// Helpers
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models

/*
  PATH: '/api/events'
  REQUIRED-JWT: true
*/
export const createEvent = async ( req: AuthRequest, res: Response ) => {

  try {
    res.status( 201 ).json({
      ok: true,
      msg: 'createEvent'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-EVENT]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
