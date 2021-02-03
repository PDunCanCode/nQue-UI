import { BaseController } from "./BaseController";

export class MainController extends BaseController {
  public createView(): HTMLDivElement {
    const title = this.createElement("h2", "Welcome to the Main Page!");

    const article = document.createElement("div");
    article.innerText = "Filler Text goes here";

    const button = this.createElement("button", "Login", () => {
      this.router.switchToLoginView();
    });

    this.container.append(title, article, button);

    return this.container;
  }
}
