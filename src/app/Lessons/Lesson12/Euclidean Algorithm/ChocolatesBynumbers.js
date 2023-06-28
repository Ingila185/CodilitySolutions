//    https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

function solution(N, M) {

    let i = 0;
    let count = 1;

    if (N % M === 0) {
        return N / M;
    }

    while (i !== -1) {

        i = i + M;

        if (i >= N) {
            i = i % N;

            if (i === 0) {
                return count;
            }
        }

        count++;

    }

    return 1;
}