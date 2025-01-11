
import { twoSum } from "../src/0001-two-sum";

describe('twoSum', () => {

    test('0+1', () => {
        expect(twoSum([0, 1], 1)).toStrictEqual([0, 1]);
    });

    test('sequence', () => {
        expect(twoSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 42)).toStrictEqual([7, 8]);
    });

    test('picking the same element twice (in this case #2) is not allowed', () => {
        expect(twoSum([0, 1, 2, 3], 4)).toStrictEqual([1, 3]);
    });

});
