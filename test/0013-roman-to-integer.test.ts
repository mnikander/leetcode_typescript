import { romanToInt } from "../src/0013-roman-to-integer";

describe('romanToInt', () => {

    test('1-20', () => {
        expect(romanToInt("I")    ).toBe( 1);
        expect(romanToInt("II")   ).toBe( 2);
        expect(romanToInt("III")  ).toBe( 3);
        expect(romanToInt("IV")   ).toBe( 4);
        expect(romanToInt("V")    ).toBe( 5);
        expect(romanToInt("VI")   ).toBe( 6);
        expect(romanToInt("VII")  ).toBe( 7);
        expect(romanToInt("VIII") ).toBe( 8);
        expect(romanToInt("IX")   ).toBe( 9);
        expect(romanToInt("X")    ).toBe(10);
        expect(romanToInt("XI")   ).toBe(11);
        expect(romanToInt("XII")  ).toBe(12);
        expect(romanToInt("XIII") ).toBe(13);
        expect(romanToInt("XIV")  ).toBe(14);
        expect(romanToInt("XV")   ).toBe(15);
        expect(romanToInt("XVI")  ).toBe(16);
        expect(romanToInt("XVII") ).toBe(17);
        expect(romanToInt("XVIII")).toBe(18);
        expect(romanToInt("XIX")  ).toBe(19);
        expect(romanToInt("XX")   ).toBe(20);
    });

    test('unigrams', () => {
        expect(romanToInt("I")).toBe(   1);
        expect(romanToInt("V")).toBe(   5); // no repitition or prefixing of V is allowed
        expect(romanToInt("X")).toBe(  10);
        expect(romanToInt("L")).toBe(  50); // no repitition or prefixing of L is allowed
        expect(romanToInt("C")).toBe( 100);
        expect(romanToInt("D")).toBe( 500); // no repitition or prefixing of D is allowed
        expect(romanToInt("M")).toBe(1000);
    });
    
    test('bigrams', () => {
        expect(romanToInt("IV")).toBe(  4);
        expect(romanToInt("IX")).toBe(  9);
        expect(romanToInt("XL")).toBe( 40);
        expect(romanToInt("XC")).toBe( 90);
        expect(romanToInt("CD")).toBe(400);
        expect(romanToInt("CM")).toBe(900);
    });
});
