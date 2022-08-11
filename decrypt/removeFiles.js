

// remove the zip created from actual folder

const fs = require('fs')

function removeFiles(filename){

    fs.unlink(filename, (err) => {
        if (err) {
          console.error(filename,err)
          return
        }
      
      })
}

module.exports = removeFiles
