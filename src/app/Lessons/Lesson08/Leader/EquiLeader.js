//https://app.codility.com/programmers/lessons/8-leader/equi_leader/

function solution(A) {

    let count = 0;
    let i = 0;
    let currThreshold = -1;
    const B = [];
    const C = [];

    while (i < A.length) {
        C[A[i]] = C[A[i]] ? C[A[i]] + 1 : 1;
        i++;
    }

    i = 0;

    while (i < A.length) {

        B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1;
        C[A[i]] = C[A[i]] ? C[A[i]] - 1 : 0;

        let threshold1 = Math.floor((i + 1) / 2) + 1;
        let threshold2 = Math.floor(((A.length - (i + 1)) / 2)) + 1;

        if (B[A[i]] === threshold1) {
            currThreshold = i;
        }
        if (currThreshold !== -1 &&
            B[A[currThreshold]] >= threshold1 && 
            C[A[currThreshold]] >= threshold2
        ) {
            count++
        }

        i++;
        
    }

    return count;
}


