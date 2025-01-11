function isMatch(leftChar: string, rightChar: string): boolean {
    return (leftChar == '(' && rightChar == ')')
        || (leftChar == '[' && rightChar == ']')
        || (leftChar == '{' && rightChar == '}');
}

function isOpening(parenthesis: string): boolean {
    return parenthesis == '(' || parenthesis == '[' || parenthesis == '{';
}

export function isValid(s: string): boolean {
    const stack : string[] = [];
    
    for (let i: number = 0; i < s.length; i++)
    {
        let parenthesis : string = s.charAt(i);
        if(isOpening(parenthesis)) {
            stack.push(parenthesis);
        }
        else {
            let top: string | undefined = stack.pop();
            
            if (top === undefined || !isMatch(top, parenthesis)) {
                return false;
            }
        }
    }
    return stack.length == 0;
};
