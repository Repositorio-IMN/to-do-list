import AddNewTask from "../models/addNewTask.js";

export default class AddConteinerTask {
    constructor() {
        this.tasks = [];
        this.containerTask = document.querySelector('.container-task');
        this.inputTask = document.querySelector('.input-task');
        this.buttonAdd = document.querySelector('.button-add');
        this.initEvents();
    }

    initEvents() {
        this.buttonAdd.addEventListener('click', () => this.addTask());
    }

    addTask() {
        const task = this.inputTask.value.trim();
        if (task) {
            this.renderTask(task);
            this.tasks.push(task);
            this.inputTask.value = '';
        }
    }

    renderTask(task) {
        const taskElement = new AddNewTask(task, (tsk) => {
            this.tasks = this.tasks.filter(t => t !== tsk);
        });

        this.containerTask.appendChild(taskElement.getElement());
    }
}
