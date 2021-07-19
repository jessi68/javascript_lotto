import LottoController from "./controller/LottoController.js"



class App {
  main() {
    const controller = new LottoController();
    controller.initConfigure();
  }
  constructor() {
    this.main();
  }
}

new App();