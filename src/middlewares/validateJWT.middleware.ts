import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
// Interfaces
import {AuthRequest} from "../interfaces/http";
// Models
import { User } from "../models";

export const validateJWT = async ( req: AuthRequest, res: Response, next: NextFunction ) => {
  const token = req.header( 'x-token' ) || '';

  if ( !token ) {
    res.status( 401 ).json({
      ok: false,
      msg: 'There is no token in the request'
    });
  }

  try {
    const { uid }: any = jwt.verify( token, process.env.SECRET_KEY || '' );
    const user = await User.findById( uid );

    if ( !user || !user.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Token is invalid'
      });
    }

    req.user = user.id;
    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-JWT]'.red }: Error Details: ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}
