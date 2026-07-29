const fs = require("fs");
const path = require("path");

const commands = new Map();

const commandPath = path.join(__dirname, "commands");

if (fs.existsSync(commandPath)) {
  const files = fs.readdirSync(commandPath);

  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const command = require(path.join(commandPath, file));

    if (command.name) {
      commands.set(command.name, command);
    }
  }
}

module.exports = {
  commands
};
