
  
  const fs = require('fs')
  const decryptFiles = require('./decryptFiles')
  const removeFiles = require('./removeFiles')
  const unzip = require('./unzip')

  const algorithm = 'aes-192-cbc';

  
  function decrypt(selectedfile){

    return new Promise((resolve, reject) => {

     fs.readFile('./key', (err,key) => {

    if(err) return console.log(err.message)

     fs.readFile(selectedfile, async (err,file) => {

    if(err) return console.log(err.message)

    console.log('key',key,'file',file);

      const decrepted  = await decryptFiles(algorithm,key,file);

      console.log('decrepted',decrepted);

      fs.writeFile('./aa4.tgz',decrepted, (err,file) => {

        if (err) { reject(err); return }

        resolve('./aa4.tgz')   
        })  
    })
  }) }).then((result) => {

    return new Promise((resolve, reject) => {

      console.log('unzipping...');
      
      unzip(result)   // unzip and remove zip file.

      resolve(result) 
     }).then((result) => {
    
      // removeFiles(selectedfile)
      // removeFiles('./key');


     })

   
      return result;
  }).catch(err => console.error(err));;
}

module.exports = decrypt 