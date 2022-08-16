import { Response } from 'express';
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models
import { Event } from '../../models';

/*
  PATH: '/api/events'
  REQUIRED-JWT: true
*/
export const createEvent = async ( req: AuthRequest, res: Response ) => {
  const { title, desc, start, end } = req.body;

  try {
    const newEvent = new Event({ title, desc, start, end });
    newEvent.user = req.user;

    await newEvent.save();

    res.status( 201 ).json({
      ok: true,
      event: newEvent
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-EVENT]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
