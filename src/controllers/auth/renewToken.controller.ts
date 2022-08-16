import { Response } from 'express';
// Helpers
import { generateJWT } from '../../helpers/jwt';
// Interfaces
import { AuthRequest } from '../../interfaces/http';
// Models
import { User } from '../../models';

/*
  PATH: '/api/auth/renew'
  REQUIRED-JWT: true
*/
export const renewToken = async ( req: AuthRequest, res: Response ) => {
  const { _id } = req.user;

  try {
    const [ user, token ] = await Promise.all([
      User.findById( _id ),
      generateJWT( _id )
    ]);

    res.status( 200 ).json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.RENEW-TOKEN]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
