import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback){
	const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
	callback(encryptedMessage);
}

export function encryptMessagePromise(message, key){
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

			if(encryptedMessage){
				resolve(encryptedMessage);
			}else{
				reject(new Error("Failed to encrypt message"));
			}
		})
	})
}

const message = {
	name: "John Doe",
	password: "password123"
}

const secretKey = "secretKey123#%";

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage)=> {
	console.log(encryptedMessage);

})

encryptMessagePromise(JSON.stringify(message), secretKey).then((encryptedMessage)=> console.log(encryptedMessage))