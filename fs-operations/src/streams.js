const fs = require('fs');

const rs = fs.createReadStream('./fs-operations/data/input.txt');
const ws = fs.createWriteStream('./fs-operations/data/streamCopy.txt');

rs.pipe(ws);

ws.on('finish', () => {
  console.log("Stream copy done");
});
