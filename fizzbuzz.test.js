import { fizzbuzz } from './fizzbuzz.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fizzbuzz av 1 er 1', () => {
    assert.strictEqual(fizzbuzz(1), "1");
})
test('fizzbuzz av 3 er Fizz', () => {
    assert.strictEqual(fizzbuzz(3), "Fizz");
})
test('fizzbuzz av 5 er Buzz', () => {
    assert.strictEqual(fizzbuzz(5), "Buzz");
})
test('fizzbuzz av 15 er FizzBuzz', () => {
    assert.strictEqual(fizzbuzz(15), "FizzBuzz");
})