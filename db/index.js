const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./contacts.json");

async function getContacts() {
  const dbRaw = await fs.readFile(contactsPath);
  const dbContacts = JSON.parse(dbRaw);
  return dbContacts;
}

async function listContacts() {
  const dbContacts = await getContacts();
  return dbContacts;
}

// async function getContactById(contactId) {
//   const id = nanoid()

// }

async function removeContact(id) {
  const dbContacts = await getContacts();
  const contact = dbContacts.find((item) => item.id === id);

  if (!contact) {
    return null;
  }

  const contacts = dbContacts.filter((item) => item.id !== id);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return contact;
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name };
  const contacts = await getContacts();
  contacts.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return contact;
}

module.exports = {
  listContacts,
  addContact,
  removeContact,
};
