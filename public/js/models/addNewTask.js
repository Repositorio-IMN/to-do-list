export default class AddNewTask {
    constructor(task, removeCallback) {
        this.task = task;
        this.removeCallback = removeCallback;
        this.element = this.createElement();
    }

    createElement() {
        const taskBox = document.createElement('div');
        taskBox.classList.add('description-box');
        taskBox.textContent = this.task;

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'X';
        buttonRemove.classList.add('button-remove');

        taskBox.appendChild(buttonRemove);

        buttonRemove.addEventListener('click', () => {
            this.removeCallback(this.task);
            taskBox.remove();
        });

        return taskBox;
    }

    getElement() {
        return this.element;
    }
}
