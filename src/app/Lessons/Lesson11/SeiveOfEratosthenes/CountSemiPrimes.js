//    https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/

function solution(N, P, Q) {

    let i = 0;
    let arr = [];

    while (i < P.length) {

        console.log(i);

        arr[i] = 0;

        let p = P[i];
        let q = Q[i];

        let j = p;
        while (j <= q) {
            console.log('j:', j)

            arr[i] += isSemiPrime(j);
            j++;

            console.log('arr:', arr)
        }

        i++;

        console.log('----');

    }

    return arr;
}

function isSemiPrime(N) {
    return 1;
}
