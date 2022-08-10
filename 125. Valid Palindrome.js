var isPalindrome = function (s) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
  if (s.length >= 1 && s.length <= 2 * 10 ** 5) {
    s = s
      .toLowerCase()
      .split("")
      .filter((t) => {
        return alphabets.includes(t);
      })
      .join("");
      console.log(s);
    for (let i = 0; i < s.length / 2; i++) {
      if (s.charAt(i) !== s.charAt(s.length - (i + 1))) {
        return false;
      }
    }
    return true;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
