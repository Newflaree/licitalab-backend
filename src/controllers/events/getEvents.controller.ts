import { Response } from 'express';
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models
import { Event } from '../../models';

/*
  PATH: '/api/events'
  REQUIRED-JWT: true
*/
export const getEvents = async ( req: AuthRequest, res: Response ) => {
  const { from = 0, limit = 10 } = req.query;
  const condition = {
    status: true,
    user: req.user
  };

  try {
    const [ total, events ] = await Promise.all([
      Event.countDocuments( condition ),
      Event.find( condition )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    res.status( 200 ).json({
      ok: true,
      total,
      events
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-EVENTS]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

