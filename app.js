let input = ["bat", "tap", "cat", "tab", "pat"];
let arr = [];

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        let word = input[i].split('').sort().join('');

        let word2 = input[j].split('').sort().join('');
        
        if (word === word2) {

            arr.push([input[i], input[j]]);
        }
    }
}

console.log(arr);



