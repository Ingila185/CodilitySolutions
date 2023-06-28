//    https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/

function solution(N) {

    if (N === 1) {
        return 1;
    }

    let counter = 2;
    let i = 2;
    let len = N;
    let dividable = false;

    while (i < len) {

        if (N % i === 0) {

            dividable = true;

            let result = N / i;

            if (result === i) {
                counter += 1;
            } else {
                counter += 2;
            }

            len = result;

        }
        else {

            if (!dividable) {
                len = Math.floor(N / i);
            }
            
        }

        i++;
    }

    return counter;
}

