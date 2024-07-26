// script.js

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={}[]|:;<>,.?/";

let generatePassword = document.querySelector('#generate');
let randomIndexOne = document.querySelector('.randomIndexOne');
let randomIndexTwo = document.querySelector('.randomIndexTwo');

generatePassword.addEventListener('click', () => {
    const passwordLength = document.getElementById('passwordLength').value;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;

    randomIndexOne.value = generateRandomPassword(passwordLength, includeSymbols, includeNumbers);
    randomIndexTwo.value = generateRandomPassword(passwordLength, includeSymbols, includeNumbers);
});

function generateRandomPassword(length, includeSymbols, includeNumbers) {
    let availableCharacters = characters;

    if (includeNumbers) {
        availableCharacters += numbers;
    }
    if (includeSymbols) {
        availableCharacters += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }
    return password;
}

function copyToClipboard(selector) {
    const copyText = document.querySelector(selector);
    copyText.select();
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value);
}
