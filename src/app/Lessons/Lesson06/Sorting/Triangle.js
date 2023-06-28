//    https://app.codility.com/programmers/lessons/6-sorting/triangle/

function solution(A) {

    let i = 0;
    let len = A.length;

    A = A.sort((a, b) => b - a);

    while (i < len) {

        let p = A[i];

        let q = A[i + 1];
        let r = A[i + 2];

        if ((p + q > r) && (p + r > q) && (q + r > p)) {
            return 1;
        }

        i++;
    }

    return 0;

}
