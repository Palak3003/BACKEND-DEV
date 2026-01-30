const fs = require('fs').promises;

async function copyFile() {
  try {
    await fs.copyFile('./fs-operations/data/input.txt','./fs-operations/data/copied.txt');
    console.log("File copied");
  } catch (err) {
    console.error(err.message);
  }
}

copyFile();
