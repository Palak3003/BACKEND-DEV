const fs = require('fs').promises;

async function dirOps() {
  try {
    await fs.mkdir('./fs-operations/backup', { recursive: true });
    const files = await fs.readdir('./fs-operations/data');
    console.log(files);
  } catch (err) {
    console.error(err.message);
  }
}

dirOps();
