import * as CryptoJS from 'crypto-js'


function dataEncrypt(text,type){

    const secretKey = process.env.REACT_APP_SECRET_KEY ? process.env.REACT_APP_SECRET_KEY : '12345'

    if(type == 'enc'){
        const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString()
        return cipherText
    }else if(type == 'dec'){
        const bytes = CryptoJS.AES.decrypt(text, secretKey )
        const plainText = bytes.toString(CryptoJS.enc.Utf8)
        return plainText
    }
    
}
export default dataEncrypt;
