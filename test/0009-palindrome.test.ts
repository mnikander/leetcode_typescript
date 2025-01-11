import { isPalindrome } from "../src/0009-palidrome";

describe('palindrome', () => {

    test('22', () => {
        expect(isPalindrome(22)).toBe(true);
    });

    test('242', () => {
        expect(isPalindrome(242)).toBe(true);
    });

    test('13', () => {
        expect(isPalindrome(13)).toBe(false);
    });

    test('133', () => {
        expect(isPalindrome(133)).toBe(false);
    });
});
