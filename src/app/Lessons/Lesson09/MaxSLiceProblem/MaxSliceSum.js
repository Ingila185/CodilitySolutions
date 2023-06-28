//https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/


function solution(A) {

    let sum = -1000000;
    let total = -1000000;
    let i = 0;

    while (i < A.length) {

        sum = Math.max(A[i], sum + A[i]);
        total = Math.max(sum, total);

        i++;

        console.log('----');

    }

    return total;
}
