## Crash
// 对speedX分解得到的两个速度
var s1 = Math.cos(deg) * speedX
var s2 = Math.sin(deg) * speedX

// 对s1进行水平和垂直分解
var s11 = Math.cos(deg) * s1
var s12 = Math.sin(deg) * s1

// 对s2进行水平和垂直分解
var s21 = Math.sin(deg) * s2
var s22 = Math.cos(deg) * s2
// 最终的叠加的水平速度和垂直速度
speedX = (s11 - s21) * -1
speedY = s12 + s22
