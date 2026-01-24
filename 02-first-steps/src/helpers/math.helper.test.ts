import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
	test("should add two positives numbers", () => {
		// ! 1. Arrange
		const a = 1;
		const b = 3;

		// ! 2. Act
		const result = add(a, b);

		// ! 3. Assert
		expect(result).toBe(a + b);
	});

	test("should add two negative numbers", () => {
		const a = -7;
		const b = -5;

		const result = add(a, b);
		expect(result).toBe(a + b);
	});
});

describe("subtract", () => {
	test("should subtract two positive numbers", () => {
		const a = 5;
		const b = 2;

		const result = subtract(a, b);

		expect(result).toBe(a - b);
	});

	test("should subtract positive number and negative number", () => {
		const a = -7;
		const b = 5;

		const result = subtract(a, b);
		expect(result).toBe(a - b);
		expect(result).lessThan(0);
	});
});

describe("multiply", () => {
	test("should multiply two positive numbers", () => {
		const a = 5;
		const b = 2;

		const result = multiply(a, b);

		expect(result).toBe(a * b);
	});

	test("should multiply number multiply to 0", () => {
		const a = 5;
		const b = 0;

		const result = multiply(a, b);

		expect(result).toBe(0);
	});
});
