import { Response } from 'express';
// Helpers
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models

/*
  PATH: '/api/events'
  REQUIRED-JWT: true
*/
export const getEvents = async ( req: AuthRequest, res: Response ) => {

  try {
    res.status( 200 ).json({
      ok: true,
      msg: 'getEvents'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-EVENTS]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

