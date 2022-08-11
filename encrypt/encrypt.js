
const fs = require('fs')

const encryptFiles = require('./encryptFiles')

const removeZip = require('./removeZip')

const removeFolder = require('./removeFolder')

const zip = require('./zip')



  const algorithm = 'aes-192-cbc';
  const password = 'saad123';

  async function encrypt(selectedDir){

    let name = await zip(selectedDir)  
    
    let filename = name.concat('.tgz')
     let encryptTo = name.concat('.enc')

   fs.readFile( filename , async (err,file) => {  // can we read zip file?
    if(err) return console.log(err.message)

    let encrypted = await encryptFiles(algorithm,password,file);
    
    fs.writeFile('./key',encrypted[1], (err,file) => {
      if(err) return console.log(err.message)
    })

    fs.writeFile(encryptTo,encrypted[0], (err,file) => {

      if(err) return console.log(err.message)

      if(file){
        console.log('encrypt success!');
      }
    })

    // removing the zip directory.

    // removeZip(filename)

    // removing the original directory

    // removeFolder(selectedDir)


  })

}


module.exports = encrypt