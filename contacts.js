// require('./db/index.js')
const db = require('./db')

async function invokeAction(action,) {
  switch (action) {
    case 'list':
      const contacts = await db.getContacts()
      console.table(contacts)
      break;
  
    case 'add':
      
    default:
      throw new Error(`Unknown action: ${action}`);
  }
}

invokeAction('list')



