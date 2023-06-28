//    https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
    
    var leaves = [];
    var i = 0;
    var result = -1;

    for (i = 0; i < A.length; i++) {
        if (typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if (leaves.length <= X) {
        return -1;
    }

    for (i = 1; i <= X; i++) {
        if (typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }

    return result;

}
