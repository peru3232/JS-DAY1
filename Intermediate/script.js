// Exercise 1
const arrE1 = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
arrE1.sort();
console.log('Exercise 1\n'+ arrE1);

// Exercise 2
const arrE2_1 = ['apple', 'banana', 'kiwi'];
arrE2_1.push('orange');
console.log(`Exercise 2\n${arrE2_1[0]}, ${arrE2_1[1]}, ${arrE2_1[2]}, ${arrE2_1[3]}`);
console.log(String(arrE2_1));
console.log(String(arrE2_1.splice(0,3)));

const arrE2_2 = ['monkey', 'horse', 'dog'];
arrE2_2.sort();
console.log(String(arrE2_2));
arrE2_2.unshift('cat');
console.log(String(arrE2_2));

// Exercise 3
const stringVar = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
const outputs = stringVar.split('/');
console.log('Exercise 3\nOutput of the whole array in seperated lines:');
outputs.forEach(line => {console.log(line)});
