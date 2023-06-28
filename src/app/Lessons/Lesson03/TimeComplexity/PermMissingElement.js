//    https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {

    let len = A.length;

    if (len <= 1) return 1;

    let maxLen = len + 1;
    console.log('max:', maxLen)
    let total = A.reduce((x, y) => x + y);
    console.log('total:', total)
    let missTotal = total - maxLen;
    console.log('missTotal:', missTotal)
    let actTotal = (len * (len + 1)) / 2;
    console.log('actTotal:', actTotal)
    let o = actTotal - missTotal;
    console.log('o:', o)

    return o;

}