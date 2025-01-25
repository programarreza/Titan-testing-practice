import { expect, it } from "vitest";
import { add } from "./math";

it("should return the correct sun if an array of number is provided", ()=> {
	// Arrange
	const numbers = [1, 2 ,3, 12 , 3, 4];
	const expectedResult = numbers.reduce((acc, cur)=> {
		return acc + cur;
	})

	// Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBe(expectedResult);
})

it("it should provide NaN if at least one invalid number is provided", ()=> {
	// Arrange
	const numbers = [1, 2 ,'invalid', 12 , 3, 4];

	// Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBeNaN();
})

it("it should provide correct sum if an array numeric string is provided", ()=> {
	// Arrange
	const numbers = ["1", "2" , "4"];
	const expectedResult = numbers.reduce((acc, cur)=> {
		return +acc + +cur;
	})

	// Actions
	const result = add(numbers);

	// Assertion
	expect(result).toBe(expectedResult);
})


it("it should throw an error of no argument is passed", () => {
	const resultFn = () => {
		add();
	}

	expect(resultFn).toThrow();
})

it("it should throw an error if multiple argument is provided", () => {
	const resultFn = ()=> {
		add(1, 2, 3);
	}

	expect(resultFn).toThrow(/is not iterable/i);
});