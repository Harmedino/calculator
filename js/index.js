
let input1, input2, sumUP, minus, divide, times, operan;
let press = false;
function calculator() {
    document.querySelector(".body").style.display = "inherit";
    document.querySelector('#for').style.display = "none"
}
let screen = document.getElementById('screen')
lott = screen.innerHTML
function clickMe(click) {

    let screen = document.getElementById('screen')
    
    if (operan != "") {
        screen.innerHTML = ""
        press = false
        operan = ""

    }
    screen.innerHTML += click
    input2 = screen.innerHTML

}

function opera(sign) {

    if (input1) {
        operaa()
    }
    let top = document.getElementById('top')
    screen2 = document.getElementById('screen').innerHTML


    top.innerHTML = screen2 + sign
    lot = screen2
    input1 = lot
    operan = sign
    sumUP = sign
    // console.log(top.innerHTML);
    // press = true
    divide = top.innerHTML

}
function operaa(lol) {

    let ans

    if (sumUP === '*') {
        ans = Number(input1) * Number(input2)
    }
    else if (sumUP === '+') {
        ans = Number(input1) + Number(input2)
    }
    else if (sumUP === '-') {
        ans = Number(input1) - Number(input2)
    }
    else if (sumUP === "/") {
        ans = Number(input1) / Number(input2)
    }
    document.getElementById('screen').innerHTML = ans
    document.getElementById('top').innerHTML = ""
    let top2 = document.getElementById("top")
    top2.innerHTML = divide += input2 += lol
    times = lol

}
function clickOut() {
   
    document.getElementById('screen').innerHTML = ''
    document.getElementById('top').innerHTML = ""
}
let body = document.querySelector('.body')
function cleaqr() {
    body.style.display = 'none'
    document.querySelector('#for').style.display = "inherit"
}
// let a = 5
// let b = 5
//  b +=a

// console.log(b);


// let screen = document.getElementById('screen').innerHTML = ""

// function one() {
//     let num1 = document.getElementById('num1').innerHTML
//     document.getElementById('screen').innerHTML+=num1

// }
// function two() {
//     let num2 = document.getElementById('num2').innerHTML

//     document.getElementById('screen').innerHTML+=num2

// }
// function three() {
//     let num3 = document.getElementById('num3').innerHTML
//     document.getElementById('screen').innerHTML+=num3

// }
// function four() {
//     let num4 = document.getElementById('num4').innerHTML
//     document.getElementById('screen').innerHTML+=num4

// }
// function five() {
//     let num5 = document.getElementById('num5').innerHTML
//     document.getElementById('screen').innerHTML+=num5

// }
// function six() {
//     let num6 = document.getElementById('num6').innerHTML
//     document.getElementById('screen').innerHTML+=num6

// }
// function seven() {
//    let num7 = document.getElementById('num7').innerHTML
//     document.getElementById('screen').innerHTML+=num7

// }
// function eight() {
//     let num8 = document.getElementById('num8').innerHTML
//     document.getElementById('screen').innerHTML+=num8

// }
// function nine() {
//     let num9 = document.getElementById('num9').innerHTML
//     document.getElementById('screen').innerHTML+=num9

// }
// function zero() {
//     let num0 = document.getElementById('num0').innerHTML
//     document.getElementById('screen').innerHTML+=num0

// }
// function dott() {
//     let dot = document.getElementById('dot').innerHTML
//     document.getElementById('screen').innerHTML+=dot

// }
// function clear0() {
//     let clear = document.getElementById('clear').innerHTML
//     document.getElementById('screen').innerHTML='0'

// }

// let screen = document.getElementById('screen').innerHTML
// let num1 = document.getElementById('num1').innerHTML
// let num2 = document.getElementById('num2').innerHTML
// let screen11 = document.getElementById('screen').innerHTML
// document.getElementById('screen').innerHTML = ""
