const { program } = require("commander");
// const db = require('./db/index.js') - але можна просто ./db
const db = require("./db");

async function invokeAction({ action, id, name, email, phone, limit }) {
  switch (action) {
    case "list":
      console.log("limit", limit);
      const contacts = await db.listContacts();
      if (limit) {
        console.table(contacts.slice(-limit));
      } else {
        console.table(contacts);
      }
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
// invokeAction({ action: "remove", id: "7irDVSlmw4yNYz1pY3O85" });

// const [, , action] = process.argv;
// // invokeAction({action})

// switch (action) {
//   case "list":
//     invokeAction({ action });
//     break;

//   case "add":
//     const [, , , ...nameArgs] = process.argv;
//     const name = nameArgs.join(" ");
//     invokeAction({ action, name });
//     break;

//   default:
//     break;
// }

// console.log('Commander start!');

program
  .command("list")
  .alias("ls")
  .option("-l, --limit <limit>")
  .action(async (options) => {
    // console.log(options);
    invokeAction({ action: "list", limit: options.limit });
  });

program.command("add <nameArgs...>").action(async (options) => {
  // console.log('options:', options);
  invokeAction({ action: "add", name: options.join(" ") });
});

// program.command("add <nameArgs ...>").action(async (options) => {
//   invokeAction({ action: "add", name: options});
// });

program.command("remove <id>").action(async (options) => {
  // console.log('exec remove' + options.id);
  const id = options;
  invokeAction({ action: "remove", id });
});

program.parse();
