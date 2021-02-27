//     Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

//     list.myPush(); list.myJoin(); list.myReverse();

// Например: var list = [1, 2, 3];

// function myPush() { ... }

// list.myPush = myPush;

// list.myPush();


// -----PUSH-----

var list = [1, 2, 3];

function myPush(...args) {
	this.splice(this.length, 0, ...args);
	return this;
}

console.log(myPush.call(list, 4, 5));


// var list = [1, 2, 3];

// function myPush(...args) {
// 	this[this.length] = args;
// 	var result = this.flat(Infinity);
// 	return result;
// }

// console.log(myPush.call(list, 4, 5));


// var list = [1, 2, 3];

// function myPush(...args) {

// 	var result = this.concat(args);
// 	return result;
// }

// console.log(myPush.call(list, 4, 5));


// -----JOIN-----

// var list = [1, 2, 3];

// function myJoin(arr) {
// 	var result = arr.toString();
// 	return result;
// }

// console.log(myJoin(list));


// -----REVERSE-----

// var list = [1, 2, 3];

// function myReverse(arr) {
// 	var arrayLength = arr.length;
// 	for (var i = 0; i < arrayLength - 1; i++) {
// 		arr.splice(i, 0, arr.pop());
// 	}
// 	return arr;
// }

// console.log(myReverse(list));


// var list = [1, 2, 3];

// function myReverse(arr) {
// 	arr = arr.reduceRight(function (previousValue, currentValue) {
// 		previousValue.push(currentValue);
// 		return previousValue;
// 	}, []);
// 	return arr;
// }

// console.log(myReverse(list));


// var list = [1, 2, 3];

// function myReverse(arr) {
// 	var arrayLength = arr.length,
// 		halfLength = arrayLength / 2;

// 	for (var i = 0; i < halfLength; i++) {
// 		var start = arr[i];
// 		arr[i] = arr[arrayLength - i - 1];
// 		arr[arrayLength - i - 1] = start;
// 	}
// 	return arr;
// }

// console.log(myReverse(list));