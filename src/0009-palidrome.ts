export function isPalindrome(x: number): boolean {
    let str : string = "" + x;
    for (let i : number = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};