

const fs = require('fs')

// remove the orginal encryped folder

function removeFolder(selectedDir){

    fs.rm(selectedDir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
}

module.exports = removeFolder