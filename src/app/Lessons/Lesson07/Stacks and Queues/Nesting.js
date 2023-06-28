//    https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

function solution(S) {
    let temp = '';
    while (S !== '') {
        temp = S.replace(/\(\)|(\(\(\)\))|(\(\(\(\)\)\))/g, '');
        if (temp === S) {
            return 0;
        }
        S = temp;
    }
    return 1;
}
