import { BaseController } from "./BaseController";
import { AccessRight, SessionToken } from "../models/AuthenticationModels";

export class DashboardController extends BaseController {
  private sessionToken: SessionToken | undefined;
  private searchArea: HTMLInputElement | undefined;
  private searchResultArea: HTMLDivElement | undefined;

  public setSessionToken(sessionToken: SessionToken) {
    this.sessionToken = sessionToken;
  }

  public createView(): HTMLDivElement {
    this.createElement("h2", "Dashboard Controller");
    if (this.sessionToken) {
      this.createElement("label", `Welcome ${this.sessionToken.username}`);
    } else {
      this.createElement(
        "label",
        `Please return to the public areas of this application`
      );
    }
    return this.container;
  }
  private generateButtons() {
    if (this.sessionToken) {
      for (const access of this.sessionToken.accessRights) {
        this.createElement("button", AccessRight[access], async () => {
          console.log(`button ${AccessRight[access]} clicked`);
          await this.triggerAction(access);
        });
      }
      if (this.sessionToken.accessRights.includes(AccessRight.READ)) {
        this.insertBreak();
        this.createElement("label", "search:");
        this.searchArea = this.createElement("input");
        this.searchResultArea = this.createElement("div");
      }
    }
  }
  private async triggerAction(access: AccessRight) {
    console.log(`button ${access} clicked`);
    switch (access) {
      case AccessRight.READ:
        this.searchResultArea;
        break;
      default:
        break;
    }
  }
}
