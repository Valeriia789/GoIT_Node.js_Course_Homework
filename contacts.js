const fs = require('fs').promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// працює:
function listContacts() {
  fs.readFile(contactsPath, "utf8")
  .then((data) => console.log(data.toString()))
  .catch(err => console.log(err.message));
}
listContacts()

module.exports = {
  listContacts,
};


// function getContactById(contactId) {
//   // ...твій код
// }

// function removeContact(contactId) {
//   // ...твій код
// }

// function addContact(name, email, phone) {
//   // ...твій код
// }
