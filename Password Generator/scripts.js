// Fetching required elements
var slider = document.querySelector('#passLengthSlider')
var sliderValue = document.querySelector('#passLengthSlider').value
var passwordLengthDisplayer = document.querySelector('#passwordLengthDisplayer')

// Declaring Variables
var password = ""
var passwordLength = 8
var checkCount = 0
handleSlider()


function handleSlider(){
    document.querySelector('#passLengthSlider').value = passwordLength
    passwordLengthDisplayer.textContent = passwordLength

    const min = slider.min
    const max = slider.max
    const val = slider.value
    // to calculate percentage of filling 
    // 1st % is for width , 2nd is for height
    slider.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}


slider.addEventListener('input',(event)=>{
    passwordLength = event.target.value
    handleSlider()
})


// Random Integer Generator Function
function generateRandomInteger(min,max){
    return Math.floor((Math.random() * (max-min) + min))
}

function generateNumber(){
    return generateRandomInteger(0,9)
}

// Uppercase Generator Fucntion
function generateUppercase(){
    return String.fromCharCode(generateRandomInteger(65,90))
}

function generateLowercase(){
    return String.fromCharCode(generateRandomInteger(97,122))
}

function generateSymbols(){
    let symbols = "<>.?~!@#$%^&*+=_;:'`"
    return symbols[generateRandomInteger(0,19)]
}


// Fetching Checkboxes
let allCheckbox = document.querySelectorAll('input[type=checkbox]')
console.log(allCheckbox)

// Tracking No. Of CheckBox Tick Count
function trackCheckbox(){
    checkCount = 0    
    for(let i=0;i<allCheckbox.length;i++){
            if(allCheckbox[i].checked) checkCount++
    }

    // If checkbox count > passWordLength
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckbox.forEach( (checkbox) => {
    checkbox.addEventListener('change', trackCheckbox);
})




// Generate Password
var generatePasswordButton = document.querySelector('#generatePasswordButton')
var uppercaseCheckbox = document.querySelector('#uppercaseCheckbox')
var lowercaseCheckbox = document.querySelector('#lowercaseCheckbox')
var numberCheckbox = document.querySelector('#numberCheckbox')
var symbolCheckbox = document.querySelector('#symbolCheckbox')
var passDisplayer = document.querySelector('#passDisplayer')

generatePasswordButton.addEventListener('click',() =>{
    password = ""

    if(checkCount == 0){
        passDisplayer.value = ""
        return;
    }

    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }

    let funcArr = []

    if(uppercaseCheckbox.checked){
        funcArr.push(generateUppercase)
    }

    if(lowercaseCheckbox.checked){
        funcArr.push(generateLowercase)
    }

    if(symbolCheckbox.checked){
        funcArr.push(generateSymbols)
    }

    if(numberCheckbox.checked){
        funcArr.push(generateNumber)
    }

    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }

    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randomIndex = generateRandomInteger(0 , funcArr.length);
        password += funcArr[randomIndex]();
    }

    passDisplayer.value = password
    getPasswordStrength()
})


strengthDisplayer = document.querySelector('#strengthDisplayer')
function getPasswordStrength(){
    if(passwordLength >= 8 && lowercaseCheckbox.checked && uppercaseCheckbox.checked
        && numberCheckbox.checked && symbolCheckbox.checked){
            // Strong Password
            strengthDisplayer.style.cssText = "background-color:green; box-shadow: 0 0 50px green;"
    }

    else if(passwordLength >= 8 && lowercaseCheckbox.checked && uppercaseCheckbox.checked
        && numberCheckbox.checked){
            // Medium Password
            strengthDisplayer.style.cssText = "background-color:orange; box-shadow: 0 0 50px orange;"
    }
    else{
        // Weak Password
        strengthDisplayer.style.cssText = "background-color:red; box-shadow: 0 0 50px red;"
    }
}


// Copy Function
var copyBtn = document.querySelector("#copyButton")
var copiedText = document.querySelector('#copiedText')

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passDisplayer.value)
        copiedText.classList.add('active')
    }  
    catch(e){
        copiedText.innerHTML = "Failed"
    }

    setTimeout(()=>{
        copiedText.classList.remove('active')
    },2000)
}


copyBtn.addEventListener('click',() =>{
    if(passDisplayer.value !== ""){
        copyContent()
    }
})














