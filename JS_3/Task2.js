var styles = [ "Джаз", "Блюз" ];
console.log(styles);

styles.push("Рок-н-Ролл");
console.log(styles);

styles.splice(-2, 1, 'Класика');
console.log(styles);

console.log(styles.shift());

styles.unshift('Реп', 'Реггі');
console.log(styles);