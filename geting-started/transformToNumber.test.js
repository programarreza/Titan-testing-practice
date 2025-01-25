import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should return a number if a numeric string is provided", ()=> {
	// Arrange
	const stringNumber = '5';

	// Actions
	const result = transformToNumber(stringNumber);

	// Assertion
	expect(result).toBeTypeOf('number');
	expect(isNaN(result)).not.toBe(true);
});