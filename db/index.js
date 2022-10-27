const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, './contacts.json')

async function getContacts() {
  const dbRaw = await fs.readFile(contactsPath)
  const dbContacts = JSON.parse(dbRaw)
  return dbContacts
}

async function addContact(contact) {

}

module.exports = {
  getContacts
}