const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await getContactById(id);
      return console.log("oneContact--->", oneContact);

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log("newContact--->", newContact);

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log("removeContact--->", deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);
