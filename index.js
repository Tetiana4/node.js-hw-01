const {
  listContacts,
  addContact,
  getContactById,
  updateContactById,
  removeContactById,
} = require("./contacts");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "update":
      const update = await updateContactById(id, data);
      if (!update) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(update);
      break;

    case "remove":
      const removeContact = await removeContactById(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
// invokeAction({ action: "add" });
