export function twoSum(nums: number[], target: number): number[] {
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
