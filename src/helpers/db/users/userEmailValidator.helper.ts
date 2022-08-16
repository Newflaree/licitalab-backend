import { User } from "../../../models";

export const userEmailValidator = async ( email: string ) => {
  const emailExists = await User.findOne({ email });

  if ( emailExists ) {
    throw new Error( 'There is already user with that email' );
  }

  return true;
}
