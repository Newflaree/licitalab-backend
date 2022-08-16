import { Request, Response } from 'express';

export const renewToken = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'renewToken'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.RENEW-TOKEN]'.red }: Error Details: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}


