let [str1, str2] = require('fs').readFileSync(
    'z1.in'
).toString().trim().split('\n')

str1 = str1.split('');
str2 = str2.split('');

len1 = str1.length
len2 = str2.length

let dp = Array.from({ length: len2+1 }, () => new Array(len1+1).fill(0));

for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
        if (str2[i-1] === str1[j-1]) {
            dp[i][j] = dp[i-1][j-1] + 1
        } else {
            dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
        }
    }
}
// console.log(str1, str2)
// console.log(dp)
console.log(dp[len2][len1])