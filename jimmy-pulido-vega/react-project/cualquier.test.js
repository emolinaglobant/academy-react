const add = require('./cualquier.js')

test("probando suma 1 + 2 = 3", () => {
    expect(add(1,2)).toBe(3)
})