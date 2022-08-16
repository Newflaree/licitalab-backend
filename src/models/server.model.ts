import express, { Application } from 'express';
// Database
import dbConnection from '../database/config.db';
// Routes
import { authRouter } from '../routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // Init methods
    this.dbConnect();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    throw new Error( 'Method not implemented' );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter )
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

export default Server;
