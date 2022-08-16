import { Request, Response } from 'express';

export const authLogin = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'authLogin'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-LOGIN]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

