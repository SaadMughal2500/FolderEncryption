
  
  const tar = require('tar')
  const fs  = require('fs')
  
  function zip(selectedDir){

    let dirName = selectedDir.substring(selectedDir.lastIndexOf('/') + 1, selectedDir.length);
    let name = dirName;
     dirName = dirName.concat('.tgz');

    // zip this directory

      tar.c(
        {
          gzip: true // this will perform the compression too
        },
        [selectedDir]
      ).pipe(fs.createWriteStream(dirName));

      return name;
  }


  module.exports = zip