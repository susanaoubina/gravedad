let a = 0
let az = 0
let ay = 0
let ax = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    ax = input.acceleration(Dimension.X)
    ay = input.acceleration(Dimension.Y)
    az = input.acceleration(Dimension.Z)
    a = Math.sqrt(input.acceleration(Dimension.X) * input.acceleration(Dimension.X) + (input.acceleration(Dimension.Y) * input.acceleration(Dimension.Y) + input.acceleration(Dimension.Z) * input.acceleration(Dimension.Z)))
    basic.showNumber(a / 1023 * 10)
    basic.pause(500)
})
