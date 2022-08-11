

const {createDecipheriv} = require('crypto')
const { Buffer } = require('buffer');



function decryptFiles(algorithm,key,encrypted){

    const iv = encrypted.slice(0,16);
    encrypted = encrypted.slice(16);

    const decipher = createDecipheriv(algorithm, key, iv);
    let result = Buffer.concat([decipher.update(encrypted),decipher.final()])
    return result;

  }  

  module.exports = decryptFiles