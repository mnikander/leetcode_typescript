export function romanToInt(s: string): number {
    let unigrams = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let bigrams  = {CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4};

    let sum = 0;
    let i = 0;

    while (i < s.length) {
        let oneChar  = s[i];
        let twoChars = "";
        if (i < s.length - 1) {
            twoChars = s[i] + s[i+1];
        }

        if (twoChars in bigrams) {
            let value : number = bigrams[twoChars as keyof typeof bigrams];
            sum = sum + value;
            i = i + 2;
        }
        else if (oneChar in unigrams) {
            let value : number = unigrams[oneChar as keyof typeof unigrams];
            sum = sum + value;
            i = i + 1;
        }
    }
    return sum;
};
