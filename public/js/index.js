import FieldExpense from "./services/openFieldsModal.js";
import DescriptionExpense from "./models/descriptionExpense.js";

const fieldExpense = new FieldExpense();
const descriptionExpense = new DescriptionExpense();

fieldExpense.initEvents();

descriptionExpense.initEvents();
