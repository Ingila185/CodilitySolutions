//https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/


function solution(A) {

    let i = 0;
    let min = 0;
    let max = 0;
    let profit = 0;
    while (i < A.length) {

        let value = A[i];
        
        if (i === 0 || value < min) {
            min = value;
            max = value;
        }

        if (value > max) {
            max = value;
            
            if (max - min > profit) {
                profit = max - min;
            }
        }

        i++;
    }

    return profit;
}