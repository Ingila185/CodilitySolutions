//    https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

//Rotate an array A to the right by the number of times K

function solution(A, K) {

    K = (A.length > K) ? K : K % A.length;

    var d = A.slice(0, A.length - K);
    var e = A.splice(A.length - K);
    return e.concat(d);

    }
