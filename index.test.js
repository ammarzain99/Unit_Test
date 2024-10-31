const add = require('./index');

test('menambahkan 1 + 2 sama dengan 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('menambahkan angka negatif', () => {
    expect(add(-1, -2)).toBe(-3);
});