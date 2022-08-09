// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.


var isValid = function (s) {
    let notFinished = true;
    let valid = false;
    while (notFinished) {
        const l = s.split("()").join("").split("{}").join("").split("[]").join("");
        notFinished = (l.length !== s.length);
        s = l;
        valid = (l.length === 0);
    }
    return valid;
};

console.log(isValid("([[][]{({}({}))}])"));