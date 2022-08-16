import express, { Application } from 'express';
// Database
import dbConnection from '../database/config.db';

class Server {
  public app: Application;
  public port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';

    // Init methods
    this.dbConnect();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    throw new Error( 'Method not implemented' );
  }

  routes() {
    throw new Error( 'Method not implemented' );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

export default Server;
