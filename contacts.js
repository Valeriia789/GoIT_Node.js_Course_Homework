// require('./db/index.js')
const db = require("./db");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await db.listContacts();
      console.table(contacts);
      break;

    case "add":
      await db.addContact(name);
      break;

    case "remove":
      await db.removeContact(id);
      break;

    default:
      throw new Error(`Unknown action: ${action}`);
  }
}

// invokeAction({action: 'list'})
// invokeAction({ action: "add", name: "new Contact Wow" });
invokeAction({ action: "remove", id: "7irDVSlmw4yNYz1pY3O85" });
