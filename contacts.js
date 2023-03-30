const fs = require("fs/promises");
const path = require("path");
const nanoid = require("nanoid");
const shortid = require("shortid");
const contactsPath = path.resolve("db/contacts.json");

async function readFile(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const allContacts = JSON.parse(data);
  return allContacts;
}

async function listContacts() {
  try {
    const list = await readFile(contactsPath);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const allContacts = await readFile(contactsPath);
    const findContact = allContacts.find((contact) => contact.id === contactId);

    console.log(findContact);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const allContacts = await readFile(contactsPath);
    const deleteContact = allContacts.filter(
      (contact) => contact.id !== contactId
    );
    const newList = JSON.stringify(deleteContact);
    fs.writeFile(contactsPath, newList);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const allContacts = await readFile(contactsPath);
    const newContact = {
      id: shortid.generate(),
      name,
      email,
      phone,
    };
    const newList = JSON.stringify([...allContacts, newContact]);
    fs.writeFile(contactsPath, newList);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { listContacts, getContactById, removeContact, addContact };
