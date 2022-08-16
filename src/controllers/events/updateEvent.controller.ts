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
export const updateEvent = async ( req: AuthRequest, res: Response ) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const event = await Event.findByIdAndUpdate( id, body, { new: true })
      .populate( 'user', 'name' );

    res.status( 200 ).json({
      ok: true,
      event
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-EVENT]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

