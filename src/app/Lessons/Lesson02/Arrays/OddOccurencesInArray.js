//https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(P) {

    //BitWise XOR will return the un-matched element 
    return P.reduce((x, y) => x ^ y)

}
