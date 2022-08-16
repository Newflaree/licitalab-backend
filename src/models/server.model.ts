import express, { Application } from 'express';
import cors from 'cors';
// Database
import dbConnection from '../database/config.db';
// Routes
import { authRouter, eventsRouter } from '../routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3002';
    this.apiPaths = {
      auth: '/api/auth',
      events: '/api/events'
    }

    // Init methods
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    // Cors
    this.app.use( cors() );
    // PaseBody
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRouter );
    this.app.use( this.apiPaths.events, eventsRouter );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

export default Server;
