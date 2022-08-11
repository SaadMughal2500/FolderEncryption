

// remove the zip created from actual folder

const fs = require('fs')

function removeZip(filename){

    fs.unlink(filename, (err) => {
        if (err) {
          console.error(err)
          return
        }
      
      })
}

module.exports = removeZip
