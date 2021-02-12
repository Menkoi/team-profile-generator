const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('github using constructor', () => {
    const testValue = "GithubUser";
    const e = new Engineer("test", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test('getGithub()', () => {
    const testValue = "GithubUser";
    const e = new Engineer("test", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test('getRole()', () => {
    const testValue = "Engineer";
    const e = new Engineer("test", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});