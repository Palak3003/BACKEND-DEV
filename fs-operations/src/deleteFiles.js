const fs = require('fs').promises;

async function deleteFile() {
  try {
    await fs.unlink('./fs-operations/data/copied.txt');
    console.log("File deleted");
  } catch (err) {
    console.error(err.message);
  }
}

deleteFile();
