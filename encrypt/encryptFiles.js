
const {scrypt, randomFill ,createCipheriv} = require('crypto')

function encryptFiles(algorithm,password,chunk){


    return new Promise((resolve, reject) => {

      let result;

       scrypt(password, 'salt', 24, (err, key) => {
        if (err) { reject(err); return }
        
        randomFill(new Uint8Array(16), (err, iv) => {
          if (err) { reject(err); return }
      
          const cipher = createCipheriv(algorithm, key, iv);
      
           let file = Buffer.concat([iv,cipher.update(chunk),cipher.final()])
           
           let result = [file,key];
        
           if (err) { reject(err); return }

           resolve(result)
  
        });
      });
     
    }).then((result) => {
      return result;
    }).catch(err => console.error(err));;

  }

  module.exports = encryptFiles