import { Response } from 'express';
// Helpers
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models
import { Event } from '../../models';

/*
  PATH: '/api/events/:id'
  REQUIRED-JWT: true
*/
export const getEvent = async ( req: AuthRequest, res: Response ) => {
  const { id } = req.params;

  try {
    const event = await Event.findById( id );

    res.status( 200 ).json({
      ok: true,
      event
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-EVENT]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

