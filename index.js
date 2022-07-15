const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

// Fill the 2 password fields
function next2Password() {
    password1.textContent = randomPasswordGenerator()
    password2.textContent = randomPasswordGenerator()
}

function randomPasswordGenerator() {
    let password = ""
    for(let i = 0; i < 15; i++) {
        password += randomChar()
    }
    //console.log(password)
    return password
}

function  randomChar() {
    let randomPosition =  Math.floor(Math.random() * characters.length) 
    //console.log(randomPosition)
    //console.log(characters[randomPosition])
    return characters[randomPosition]
}

randomPasswordGenerator()