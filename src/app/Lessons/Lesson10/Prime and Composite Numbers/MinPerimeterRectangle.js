//    https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

function solution(N) {

    let i = 2;
    let len = N;
    let dividable = false;
    let total = N + 1;
    // let arr = [];

    while (i < len) {

        if (N % i === 0) {

            dividable = true;

            let result = N / i;

            len = result;

            // arr.push([i, result]);

            total = Math.min(total, i + result);

        }
        else {

            if (!dividable) {
                len = Math.floor(N / i);
            }

            console.log('len', len)
            
        }

        i++;
    }

    // console.log('sorted:', sorted)

    // console.log('arr:', arr)
    return total * 2;
}