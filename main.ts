let A = 1
let B = 2
let C = A
A = B
B = C
basic.forever(function () {
    basic.showString("A=" + A + "B=" + B)
})
