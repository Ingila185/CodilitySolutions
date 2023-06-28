//    https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function solution(A) {

    let B = A.sort((a, b) => b - a);
    let max = B[0] * B[1] * B[2];

    if ((B[B.length - 1] < 0) && (B[B.length - 2] < 0)) {
        let minusTotal = B[B.length - 1] * B[B.length - 2] * B[0];
        max = Math.max(max, minusTotal);
    }

    return max;

}
