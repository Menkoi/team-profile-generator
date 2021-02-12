const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

test('office number using constructor', () => {
    const testValue = 100;
    const e = new Manager("testing", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole()', () => {
    const testValue = "Manager";
    const e = new Manager("testing", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test('officeNumber using officeNumber()', () => {
    const testValue = 100;
    const e = new Manager("testing", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
