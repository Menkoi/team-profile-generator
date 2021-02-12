const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('school by constructor', () => {
    const testValue = "MIT";
    const e = new Intern("test", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test('getSchool()', () => {
    const testValue = "MIT";
    const e = new Intern("test", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole', () => {
    const testValue = "Intern";
    const e = new Intern("test", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});