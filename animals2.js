var animals = ['Кошка', 'Собака'];
var name = prompt("Введите кого хотите добавить в конец", "")
animals.push(name);
alert(animals);
var animal2 = prompt('Введите кого хотите добавить в начало');
animals.unshift(animal2);
alert(animals);
var num = prompt('Введите номер животного для удаления') - 1;
animals.splice(num, 1);
alert(animals);
animals.shift();
alert(animals);
