const sentence = 'hello there from lighthouse labs';

let delay = 0;

for (const char of sentence){
// console.log('char :', char);
setTimeout(() => {process.stdout.write(char)}, delay += 50);
};
setTimeout(() => {process.stdout.write('\n')}, delay += 50);


