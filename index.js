let characterArray = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", 
    "'", "?", "{", "}", "|", "<", ">", ".", "," , "\"", "\\" 
    ]
    
let passwordLength = 0
let passwordSlider = document.querySelector(".slider")
let sliderValue = document.querySelector(".num-of-characters")
let passOne = document.querySelector(".password-one")
let passTwo = document.querySelector(".password-two")
let passThree = document.querySelector(".password-three")
let passFour = document.querySelector(".password-four")

//Try making element = generate password for each spot insteaed of 4 different functions
function generatePassword() {
    passwordLength = passwordSlider.value
    passOne.textContent = getPassword()
    passTwo.textContent = getPassword()
    passThree.textContent = getPassword()
    passFour.textContent = getPassword()
}

function getPassword(){   
    let useSpecialChars = document.querySelector(".special-char-box").checked
    let password = ""   
    if(useSpecialChars){        
        for(let i = 0; i < passwordLength; i++){
            let chosenChar = Math.floor(Math.random() * 86) + 1
            password += characterArray[chosenChar]        
        }
    }
    else {
        for(let i = 0; i < passwordLength; i++){
            let chosenChar = Math.floor(Math.random() * 61) + 1
            password += characterArray[chosenChar]
        }
    }
    return password
}

function getValue() {
    sliderValue.textContent = "Password Length: " + passwordSlider.value
    generatePassword()
}

function copyPassword(passItem) {
    /* Select the text field */
    passItem.select();
    passItem.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(passItem.value);
    document.execCommand('copy');
    
    /* Alert the copied text */
    alert("Copied the password: " + passItem.value);
}