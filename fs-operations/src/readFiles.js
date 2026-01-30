const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('./fs-operations/data/input.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

readFile();
