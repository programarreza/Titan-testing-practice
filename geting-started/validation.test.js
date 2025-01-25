import { describe, expect, it } from "vitest"
import { validateEmail, validateStringNotEmpty } from "./validation"

// VALIDATE EMAIL
describe("validateEmail()", ()=> {
	it("should validate a correct email address", ()=> {
		const email = "example@mail.com"
		const resultFn = ()=> validateEmail(email)
	
		expect(resultFn).not.toThrow()
	})
	
	it("should throw an error when email is invalid", ()=> {
		const email = "example.com"
		const resultFn = ()=> validateEmail(email)
	
		expect(resultFn).toThrow("Email is not valid")
	})
	
	it("throws an error when email is empty", ()=> {
		const email = ""
		const resultFn = ()=> validateEmail(email)
	
		expect(resultFn).toThrow("Email is not valid")
	})
	
	it("throws an error for an undefined email address", ()=> {
		expect(() => validateEmail(undefined)).not.toThrow("Invalid email address")
	})
})

// VALIDATE STRING NOT EMPTY
describe("validateStringNotEmpty()", ()=> {
	it("should validate a not-empty array", () => {
		const arr = [1,2,3]
		const resultFn = ()=> validateStringNotEmpty(arr)
	
		expect(resultFn).not.toThrow()
	});
	
	it("throws an error when array is empty", () => {
		const arr = []
		const resultFn = ()=> validateStringNotEmpty(arr)
	
		expect(resultFn).toThrow("Array can not be empty")
	});	
})


