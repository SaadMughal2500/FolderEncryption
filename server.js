
const encrypt = require('./encrypt/encrypt')
const decrypt = require('./decrypt/decrypt')


let a = 'enc'
let b = 'dec'

switch(b){
    case 'enc':
        let selectedDir = './aa.mp4'; 
        encrypt(selectedDir)
        break;
    case 'dec':
        let selectedfile = './aa.mp4.enc'
        decrypt(selectedfile)
        break;
    default:
        break;
}





