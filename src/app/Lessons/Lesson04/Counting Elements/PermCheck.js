//    https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {

    A = A.sort((a, b) => a - b);
    for (var i = 0; i < A.length; i++) {
        if (A[i] != i + 1) {
            return 0;
        }
    }

    return 1;

}