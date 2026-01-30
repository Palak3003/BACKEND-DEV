const fs = require('fs').promises;

async function writeFile() {
  try {
    await fs.writeFile('./fs-operations/data/output.txt', 'Hello Node FS');
    console.log("File written");
  } catch (err) {
    console.error(err.message);
  }
}

writeFile();
