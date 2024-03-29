const fruits = ['🍊', '🍒', '🍋', '🍑', '🍍'];

// 배열을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + ' flavor!');
}

// 추가, 삭제 => 지양해야 하는 방식💩
fruits[fruits.length] = '🍉'; // 특히나 인덱스로 직접 접근해서 추가, 삭제하는 것은 절대 No!
console.log(fruits);

delete fruits[3]; // 💩💩💩 해당 인덱스가 비게 됨
console.log(fruits);
