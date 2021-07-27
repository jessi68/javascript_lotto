import LottoController from "./controller/LottoController.js"
import Lotto from "./domain/lotto.js";



class App {
  main() {
    const controller = new LottoController();
    controller.init();
  }
  constructor() {
    this.main();
  }
}

Lotto.initLottoInfo();
new App();