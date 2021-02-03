import { LoginController } from "./controllers/LoginController";
import { MainController } from "./controllers/MainController";
export class Router {
    constructor() {
        this.mainElement = document.getElementById("main-container");
    }
    handleRequest() {
        console.log("handling request for: " + this.getRoute());
        switch (this.getRoute()) {
            case "/login":
                this.switchToLoginView();
                break;
            default:
                if (this.mainElement) {
                    const mainController = new MainController(this);
                    this.mainElement.append(mainController.createView());
                }
                break;
        }
    }
    switchToLoginView() {
        if (this.mainElement) {
            this.mainElement.innerHTML = "";
            const loginController = new LoginController(this);
            this.mainElement.append(loginController.createView());
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}
//# sourceMappingURL=Router.js.map