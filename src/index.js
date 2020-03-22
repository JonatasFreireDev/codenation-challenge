import express from 'express';

import './challenge';

class App {
   constructor() {
      this.server = express();
   }
}

export default new App().server;
