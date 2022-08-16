import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Helpers
import { generateJWT } from '../../helpers/jwt';
// Models
import { User } from '../../models';

/*
  PATH: '/api/auth/login'
  REQUIRED-JWT: false
*/
export const authLogin = async ( req: Request, res: Response ) => {
  const { email, password } = req.body;

  try {
    const registeredUser = await User.findOne({ email });

    // Check if email exists and if user is active
    if ( !registeredUser || !registeredUser.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, registeredUser.password );
    if ( !validPass ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Generate JWT
    const token = await generateJWT( registeredUser.id );

    res.status( 200 ).json({
      ok: true,
      user: registeredUser,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-LOGIN]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

