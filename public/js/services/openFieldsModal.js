export default class FieldExpense {
    constructor() {
        this.modal = document.querySelector('.modal');
        this.openModalButton = document.querySelector('.To-add-new-task');
        this.closeModalButton = document.querySelector('.close');
        this.initEvents();
    }
    initEvents() {
        this.openModalButton.addEventListener('click', () => this.openModal());
        this.closeModalButton.addEventListener('click', () => this.closeModal());
    }
    openModal() {
        this.modal.style.display = "block";
    }
    closeModal() {
        this.modal.style.display = "none";
    }
}

