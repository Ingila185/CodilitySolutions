//    https://app.codility.com/programmers/lessons/6-sorting/distinct/
function solution(A) {

    var seen = [];
    var count = 0;
    var len = A.length;
    for (var i = 0; i < len; i++) {
        var item = A[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            count++
        }
    }
    return count;

}