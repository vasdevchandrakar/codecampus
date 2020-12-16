const _ = require('lodash');

const myArr = [1,2,3,4,5,6,7];
const dupArr = [1,4,5,4,7,8,9,7,5];
let combinedStr = "apple~orange~grapes~banana";
const pi = 3.14;
const strToArray = 'iamnotarray';

const afterChunkArr = _.chunk(myArr,4);	//1 function chunk
console.log(afterChunkArr);

console.log(_.uniq(dupArr));	//2 function uniq

console.log(_.split(combinedStr,'~',3)); //3 function split

console.log(_.floor(pi)); //4 function floor

console.log(_.castArray(strToArray)); //5 function castArray

