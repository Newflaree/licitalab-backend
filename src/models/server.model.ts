import express, { Application } from "express";

class Server {
  public app: Application;
  public port: string;

  constructor() {
    this.app = express();
    this.port = '3002';
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    })
  }
}

export default Server;
