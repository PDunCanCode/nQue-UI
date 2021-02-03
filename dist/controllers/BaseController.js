export class BaseController {
    constructor(router) {
        this.container = document.createElement("div");
        this.router = router;
    }
    createElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    elementType, innerText, action) {
        const element = document.createElement(elementType);
        if (innerText) {
            element.innerText = innerText;
        }
        if (action) {
            element.onclick = action;
        }
        this.container.append(element);
        return element;
    }
    insertBreak() {
        this.createElement("br");
    }
}
//# sourceMappingURL=BaseController.js.map