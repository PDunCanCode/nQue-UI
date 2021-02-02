export class MainController {
    public createView(): HTMLDivElement {
        const container = document.createElement('div');

        const title = document.createElement('h2');
        title.innerText = 'Welcome to the Main Page!';

        const article = document.createElement("div")
        article.innerText = 'Filler Text goes here';

        const button = document.createElement('button');
        button.innerText = 'Login';

        container.append(title, article, button);

        return container;
    }
}