import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Helpers
import { generateJWT } from '../../helpers/jwt';
// Models
import { User } from '../../models';

/*
  PATH: '/api/auth/register'
  REQUIRED-JWT: false
*/
export const authRegister = async ( req: Request, res: Response ) => {
  const { name, email, password } = req.body;

  try {
    const registeredUser = new User({ name, email, password });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    registeredUser.password = bcrypt.hashSync( password, salt );
    // Save to DB
    await registeredUser.save();

    // Generate JWT
    const token = await generateJWT( registeredUser.id );

    res.status( 201 ).json({
      ok: true,
      user: registeredUser,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
