'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, move] of movements.entries()) {
  move > 0
    ? console.log(`STT : ${i + 1} + ${move} VND `)
    : console.log(`STT : ${i + 1} - ${Math.abs(move)} VND `);
}
console.log(`----- FOREACH -----`);
movements.forEach(function (move, i, arr) {
  move > 0
    ? console.log(`STT : ${i + 1} + ${move} VND `)
    : console.log(`STT : ${i + 1} - ${Math.abs(move)} VND `);
});
