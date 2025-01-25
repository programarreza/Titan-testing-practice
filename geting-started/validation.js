
export function validateEmail(email){
	const emailRegex = /\S+@\S+\.\S+/;

	if(!emailRegex.test(email)){
		throw new Error("Email is not valid");
	}
}

export function validateStringNotEmpty(arr){
	if(!Array.isArray(arr) || arr.length === 0){
		throw new Error("Array can not be empty")
	}
}