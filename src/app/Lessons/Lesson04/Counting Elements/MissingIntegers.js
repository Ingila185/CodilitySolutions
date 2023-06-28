//    https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {

    let missing = 0;
    let condition = true;

    A = getUnique(A.filter(i => i > 0)).sort((a, b) => a - b);
    console.log('A:', A)

    if (A[0] !== 1) { return 1; }

    if (A[A.length - 1] === A.length) { return A.length + 1; }

    while (condition) {
        missing++;
        condition = A[missing - 1] === missing;
    }

    return missing;

}



function getUnique(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}