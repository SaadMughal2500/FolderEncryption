

const tar = require('tar')
const removeFiles = require('./removeFiles')

function unzip(result){


    tar.x(  // or tar.extract(
     {
       file : result
     }
   ).then(_=> { 
    // remove zip file
    removeFiles(result)

   })

}

module.exports = unzip