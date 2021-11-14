const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("");

const listContacts = async () => {
  const data = await fs.readFile(`${contactsPath}/db/contacts.json`);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
