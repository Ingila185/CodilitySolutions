
function solution(N) {
    let numToBin = N.toString(2); //Convert number to binary format string 

    for (let i = numToBin.length - 2; i > 0; i--) //subtract 2 to omit first and last 1.
    {
        let zeros = padZero(i); 
        if (numToBin.indexOf(zeros) !== -1) {

            return i;
        }

    }
    return 0;
}

function padZero(len) {

    let s = '';

    for (let i = 0; i < len; i++) {
        s = s + '0';   
    }
    return '1' + s + '1'; 
}

test(1038)

function test(...params) {
    console.log('\n(', ...params, ')\n');
    console.log('\n=>', solution(...params), '\n\n');
}