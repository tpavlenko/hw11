//  Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' (получить при помощи document.querySelector('input[id="name"]')) берет значение по ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.

//  alrt(greetingMessage + input.value)


let input = document.querySelector('input[id="name"]');
let greetingMessage = 'Hello, ';

function greeting() {
	console.log(greetingMessage + input.value);
}

greeting.bind(input);

setInterval(greeting, 5000);