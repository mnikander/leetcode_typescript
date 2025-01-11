import { isValid } from "../src/0020-valid-parentheses";

describe('palindrome', () => {

    test('valid parenthesis', () => {
        expect(isValid("")).toBe(true);
    });
    
    test('simple parenthesis', () => {
        expect(isValid("()")).toBe(true);
    });
    
    test('each kind', () => {
        expect(isValid("()[]{}")).toBe(true);
    });
    
    test('nested', () => {
        expect(isValid("([])")).toBe(true);
    });
    
    test('deeply nested', () => {
        expect(isValid("([](){()})")).toBe(true);
    });
    
    test('simple unclosed', () => {
        expect(isValid("(")).toBe(false);
    });
    
    test('nested unclosed', () => {
        expect(isValid("{(}")).toBe(false);
    });
    
    test('mismatch', () => {
        expect(isValid("(]")).toBe(false);
    });
    
    test('nested mismatch', () => {
        expect(isValid("([](])")).toBe(false);
    });
    
    test('reversed order', () => {
        expect(isValid(")(")).toBe(false);
    });
    
    test('interleaved order', () => {
        expect(isValid("([)]")).toBe(false);
    });
});
