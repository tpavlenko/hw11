//     Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.

//     list.myPush(); list.myJoin(); list.myReverse();

// Например: var list = [1, 2, 3];

// function myPush() { ... }

// list.myPush = myPush;

// list.myPush();


// ----- PUSH-----

var list = [1, 2, 3];

function myPush(arr) {
	for (var i = 1; i < arguments.length; i++) {
		arr[arr.length] = arguments[i];
	}
	return arr;
}
console.log(myPush(list, 4, 5));



----- JOIN-----

var list = [1, 2, 3];

function myJoin(arr, sign) {
	sign = !sign ? "," : sign;
	if (!arr) return "";

	var result = "";
	for (var i = 0; i < arr.length; i++) {
		result += i > 0 ? sign : "";
		result += arr[i];
	}
	return result;
}

console.log(myJoin(list, "; "));



----- REVERSE-----

var list = [1, 2, 3];

function myReverse(arr) {
	var arrayLength = arr.length,
		halfLength = arrayLength / 2;

	for (var i = 0; i < halfLength; i++) {
		var start = arr[i];
		arr[i] = arr[arrayLength - i - 1];
		arr[arrayLength - i - 1] = start;
	}
	return arr;
}

console.log(myReverse(list));