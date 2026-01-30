const fs = require('fs').promises;

async function safeRead() {
  try {
    await fs.readFile('./fs-operations/data/unknown.txt');
  } catch (err) {
    const log = `${new Date()} - ${err.message}\n`;
    await fs.appendFile('./fs-operations/logs/app.log', log);
    console.log("Error logged");
  }
}

safeRead();
