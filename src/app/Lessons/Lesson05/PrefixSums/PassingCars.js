//    https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function solution(A) {

    let counter = 0;
    let zeroCount = 0;
    let len = A.length;

    let i = A.indexOf(0);
    while (i < len) {

        if (A[i] === 0) {
            zeroCount++;
        } else {
            counter += zeroCount
            if (counter > 1000000000) { return -1; }
        }

        i++;
    }

    return counter;

}

