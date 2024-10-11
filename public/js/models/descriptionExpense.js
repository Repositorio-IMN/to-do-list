export default class DescriptionExpense {
    constructor() {
        this.inputDescription = document.querySelector('.description');
        this.contentDescription = document.querySelector('.description-expense');
        this.buttonAdd = document.querySelector('.button-add');
        this.descriptions = [];
        this.initEvents();
    }
    initEvents() {
        this.buttonAdd.addEventListener('click', (event) => {
            event.preventDefault();
            this.addDescription();
        });
    }
    addDescription() {
        const description = this.inputDescription.value.trim();
        this.descriptions.push(description);
        this.renderDescription(description);
    }
    renderDescription(description) {
        const descriptionBox = document.createElement('div');
        descriptionBox.classList.add('description-box');
        descriptionBox.textContent = description;
        this.contentDescription.appendChild(descriptionBox);

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'X';
        buttonRemove.classList.add('button-remove');

        descriptionBox.appendChild(buttonRemove);
        this.contentDescription.appendChild(descriptionBox);

        buttonRemove.addEventListener('click', () => {
            this.contentDescription.removeChild(descriptionBox);
            this.descriptions = this.descriptions.filter(desc => desc !== description);
        });
    }
}
