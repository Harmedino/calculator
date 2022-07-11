
let input1, input2, sumUP, divide, times, operan, tall;
let press = false;
let click = false;
let screen = document.getElementById('screen')




let switchPower = document.querySelector('.power').innerHTML
function power() {
    let switchPower = document.querySelector('.power').innerHTML
    if (switchPower == 'ON') {
        document.querySelector('.power').style.backgroundColor = "blue"
        document.querySelector('.power').innerHTML = "OFF"
        document.querySelector('.screen').style.backgroundColor = "rgb(240, 236, 236)"
        click = true;
    } else {
        document.querySelector('.power').innerHTML = "ON"
        document.querySelector('.power').style.backgroundColor = "red"
        document.querySelector('.screen').style.backgroundColor = "grey"
        document.querySelector('.screen').innerHTML = ""
        document.querySelector('.top').innerHTML = ""
        click = false;
    }
}
function clickOut() {
    document.getElementById('top').innerHTML = ""
   screen.innerHTML = ""

}

function clickMe(numbers) {
    let screen = document.getElementById('screen')

    if (!click) {
        return;
    }
    if (operan != "") {
        screen.innerHTML = ""
        operan = ""

    }
    // if (press) {
    //     press = false
    //     screen.innerHTML = ""
    // }
    screen.innerHTML += numbers
    input2 = screen.innerHTML
}

function cScreen() {
    if (!click) {
        return;
    }
    screen.innerHTML = ""

}
function squareRoot() {
    if (!click) {
        return;
    }
    document.getElementById('top').innerHTML = `&radic; (${screen.innerHTML})`
    let root = Math.sqrt(screen.innerHTML)
    document.getElementById('screen').innerHTML = root
}
function square() {
    if (!click) {
        return;
    }
    document.getElementById('top').innerHTML = `sqr (${screen.innerHTML})`
    let squarr = Math.pow(screen.innerHTML, 2);
    document.getElementById('screen').innerHTML = squarr;
}
function negative(sette) {

    if (sette == '-') {
        screen.innerHTML = "-" + screen.innerHTML
        let sette = ""
        console.log(sette);
    }
    else {
        screen.innerHTML = screen.innerHTML
      let  sette = '-'
        console.log(sette);
    }
}
function over() {
    if (!click) {
        return;
    }
    document.getElementById('top').innerHTML = "1/" + (screen.innerHTML);
    let overOne = 1 / screen.innerHTML
    document.getElementById('screen').innerHTML = overOne
}
function del() {

    let count = screen.innerHTML
    let spac = count.slice(0, count.length - 1)
    screen.innerHTML = spac
}
function operators(signs) {
    if (!click) {
        return;
    }
    let top = document.getElementById('top')
    screen2 = document.getElementById('screen').innerHTML
    // let input = input1 || input2
    if (input1) {
        operaa()
    }
    top.innerHTML = screen2 + signs
    lot = screen2
    input1 = lot
    operan = signs
    sumUP = signs
    press = true
    // divide = top.innerHTML
}
function modulus() {
    let top = document.getElementById('top')
    // if (input1 =="") {
    //     screen.innerHTML = 0
    //     top.innerHTML = "" 
    //     return;
    // }


    // console.log(sumUP);
    if (input1 != "") {
        let tott = Math.pow(input1, 2) / 100
        screen.innerHTML = tott
        top.innerHTML = input1 + sumUP + screen.innerHTML
        
    }


}
let ans
function operaa(lol) {
    if (!click) {
        return;
    }
    let top2 = document.getElementById("top")
    if (lol == '=' && ans) {
        let tall = ans
        input1 = tall
    }

    if (sumUP === '*') {
        ans = Number(input1) * Number(input2)
        top2.innerHTML = input1 += sumUP + input2 + lol
    }
    else if (sumUP === '+') {
        ans = Number(input1) + Number(input2)
        top2.innerHTML = input1 += sumUP + input2 + lol
    }
    else if (sumUP === '-') {
        ans = Number(input1) - Number(input2)
        top2.innerHTML = input1 += sumUP + input2 + lol
    }
    else if (sumUP === "/") {
        ans = Number(input1) / Number(input2)
        top2.innerHTML = input1 += sumUP + input2 + lol
    }
    document.getElementById('screen').innerHTML = ans
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
