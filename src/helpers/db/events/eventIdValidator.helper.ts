import { Event } from "../../../models"

export const eventIdValidator = async ( id: string ) => {
  const eventExists = await Event.findById( id );

  if ( !eventExists || !eventExists.status ) {
    throw new Error( 'There is no event with that id' );
  }

  return true;
}
