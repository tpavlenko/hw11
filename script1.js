//  Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' (получить при помощи document.querySelector('input[id="name"]')) берет значение по ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.

//  alrt(greetingMessage + input.value)


let greetingMessage = 'Hello,';
let input = document.querySelector('input[id="name"]');

function greeting() {
	console.log(`${greetingMessage} ${input.value}!`);
}

setInterval(greeting, 5000);