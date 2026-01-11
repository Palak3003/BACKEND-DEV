const fs = require("fs");

// READ FILE
function readLogFile() {
    fs.readFile("log.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }
        console.log("Log file content:Today we learned logfile\n", data);
    });
}

// WRITE FILE (overwrite)
function writeLogFile(newData) {
    fs.writeFile("log.txt", newData, (err) => {
        if (err) {
            console.error("Error writing file:", err.message);
            return;
        }
        console.log("New log data written successfully");
    });
}

// APPEND FILE
function appendLogFile(data) {
    fs.appendFile("log.txt", data, (err) => {
        if (err) {
            console.error("Error appending file:", err.message);
            return;
        }
        console.log("Data appended successfully");
    });
}

// DELETE FILE
function deleteLogFile() {
    fs.rm("log.txt", (err) => {
        if (err) {
            console.error("Error deleting file:", err.message);
            return;
        }
        console.log("Log file deleted successfully");
    });
}

module.exports = {
    readLogFile,
    writeLogFile,
    appendLogFile,
    deleteLogFile
};
