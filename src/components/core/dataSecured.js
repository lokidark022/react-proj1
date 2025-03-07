
import * as CryptoJS from 'crypto-js'
import jsxToString from 'jsx-to-string';
function dataSecured (text , type, pass){

   var secretKey = pass;
 
    let result = '';
    if(type == 'enc'){
        // const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString()
        const cryptoInfo = CryptoJS.AES.encrypt(JSON.stringify(text), secretKey);
        result = cryptoInfo;
    }else if(type == 'dec'){
        const plainText = CryptoJS.AES.decrypt(text.toString(), secretKey).toString(CryptoJS.enc.Utf8);
        result = plainText;
    }
    return result
}
export default dataSecured