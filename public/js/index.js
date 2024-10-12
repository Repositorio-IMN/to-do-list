import FieldExpense from "./services/openFieldsModal.js";
import AddConteinerTask from "./services/addConteinerTask.js";

const fieldExpense = new FieldExpense();
const addConteinerTask = new AddConteinerTask();

fieldExpense.initEvents();
addConteinerTask.initEvents();
