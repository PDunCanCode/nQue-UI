import { LoginController } from "./controllers/LoginController";
import { MainController } from "./controllers/MainController";
import { SessionToken } from "./models/AuthenticationModels";
import { DashboardController } from "./controllers/DashboardController";

export class Router {
  private mainElement = document.getElementById("main-container");

  public handleRequest() {
    console.log("handling request for: " + this.getRoute());

    switch (this.getRoute()) {
      case "/login":
        this.switchToLoginView();
        break;
      case "/board":
        this.switchToDashboardView(undefined);
      default:
        if (this.mainElement) {
          const mainController: MainController = new MainController(this);
          this.mainElement.append(mainController.createView());
        }
        break;
    }
  }
  public switchToDashboardView(sessionToken: SessionToken | undefined) {
    if (this.mainElement) {
      this.mainElement.innerHTML = "";
      const dashboardController: DashboardController = new DashboardController(
        this
      );
      if (sessionToken) {
        dashboardController.setSessionToken(sessionToken);
      }
      this.mainElement.append(dashboardController.createView());
    }
  }
  public switchToLoginView() {
    if (this.mainElement) {
      this.mainElement.innerHTML = "";
      const loginController: LoginController = new LoginController(this);
      this.mainElement.append(loginController.createView());
    }
  }

  private getRoute(): string {
    return window.location.pathname;
  }
}
