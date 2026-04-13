import { fibonacci } from './fibonacci.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fibonacci(1) should return 1', () => {
    assert.equal(fibonacci(1), 1);
});
test('fibonacci(2) should return 1', () => {
    assert.equal(fibonacci(2), 1);
});
test('fibonacci(3) should return 2', () => {
    assert.equal(fibonacci(3), 2);
});
test('fibonacci(5) should return 5', () => {
    assert.equal(fibonacci(5), 5);
});
test('fibonacci(10) should return 55', () => {
    assert.equal(fibonacci(10), 55);
});
