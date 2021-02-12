
const { expect, test } = require("@jest/globals");
const Employee = require ("../lib/Employee");

test('Start Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test('Set name via constructor', () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('can set id via constructor', () => {
    const testValue = 100;
    const e = new Employee("testing", testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via constructor', () => {
    const testValue = "test@test.com";
    const e = new Employee("testing", 1,testValue);
    expect(e.email).toBe(testValue);
});

test('get name using getName()', () => {
    const testValue = "Hanna";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('get id using getId()', () => {
    const testValue = 100;
    const e = new Employee("testing", testValue);
    expect(e.getId()).toBe(testValue);
});

test('get email using getEmail()', () => {
    const testValue = "test@test.com";
    const e = new Employee("testing", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
})

test('get role from getRole()', () => {
    const testValue = "Employee";
    const e = new Employee("Hanna", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
})