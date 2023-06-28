
function solution(H) {
    // write your code in JavaScript (Node.js 4.0.0)

    var counter = 0;
    var height = 0;
    var blocks = [];
    var i = 0;

    while (i < H.length) {
        console.log(i);
        console.log('value: ', H[i])
        if (H[i] > height) {
            var newBlock = H[i] - height;
            blocks.push(newBlock);
            height += newBlock;
            counter++;
            i++;
        } else if (H[i] < height) {
            var lastBlock = blocks.pop();
            height -= lastBlock;
        } else {
            i++;
        }


        console.log('blocks:', blocks)
        console.log('height:', height)
        console.log('counter:', counter)
        console.log('--------------------')
    }

    return counter;
}
