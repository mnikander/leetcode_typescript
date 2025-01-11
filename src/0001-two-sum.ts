function twoSum(nums: number[], target: number): number[] {
    let result : number[] = [];
    for(let i : number = 0; i < nums.length; i++) {
        for (let j : number = i+1; j < nums.length; j++) {
            let sum : number = nums[i] + nums[j];
            if (sum == target) {
                result = [i, j];
            }
        }
    }
    return result;
};

let r1 : number[] = twoSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 42);
console.log(r1[0] + " " + r1[1]);

let r2 : number[] = twoSum([2, 1, 11, 7, 5, 3], 4)
console.log(r2[0] + " " + r2[1]);
