export default class AddNewTask {
    constructor(task, removeCallback) {
        this.task = task;
        this.removeCallback = removeCallback;
        this.element = this.createElement();
    }

    createElement() {
        const taskBox = document.createElement('div');
        taskBox.classList.add('description-box');

        const checkBoxTask = document.createElement('input');
        checkBoxTask.type = 'checkbox';
        checkBoxTask.classList.add('checkbox-task');

        const taskText = document.createElement('span');
        taskText.textContent = this.task;
        taskText.classList.add('task-text');

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'X';
        buttonRemove.classList.add('button-remove');

        taskBox.appendChild(checkBoxTask);
        taskBox.appendChild(taskText);
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
