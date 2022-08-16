import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Models
import { User } from '../../models';

/*
  PATH: '/api/auth/register'
  REQUIRED-JWT: false
*/
export const authRegister = async ( req: Request, res: Response ) => {
  const { name, email, password } = req.body;

  try {
    const userRegistered = new User({ name, email, password });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    userRegistered.password = bcrypt.hashSync( password, salt );
    // Save to DB
    await userRegistered.save();

    //TODO: Generate JWT

    res.status( 201 ).json({
      ok: true,
      user: userRegistered
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
