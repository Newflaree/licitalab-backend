import { Response } from 'express';
// Helpers
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models

/*
  PATH: '/api/events/:id'
  REQUIRED-JWT: true
*/
export const updateEvent = async ( req: AuthRequest, res: Response ) => {

  try {
    res.status( 200 ).json({
      ok: true,
      msg: 'updateEvent'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-EVENT]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
