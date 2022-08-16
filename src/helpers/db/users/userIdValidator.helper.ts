import { User } from "../../../models";

export const userIdValidator = async ( id: string ) => {
  const userExists = await User.findById( id );

  if ( !userExists || !userExists.status ) {
    throw new Error( 'There is no user with that id' );
  }

  return true;
}

