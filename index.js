//Universal Styling
let universalStyle = document.querySelectorAll('*');
universalStyle.forEach(element => {
    element.style.padding = '0';
    element.style.margin = '0';
    element.style.boxSizing = 'border-box';
});

//Body Styling
let generalStyle = document.querySelector('body');
generalStyle.style.fontSize = '16px';
generalStyle.style.fontFamily = 'sans-serif';
generalStyle.style.backgroundColor = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';      
document.body.style.height = '100vh';     


//Heading Styling
let heading = document.createElement('h1');
heading.textContent = 'Background Colour';
heading.style.fontSize = '2.2rem';
heading.style.textAlign = 'center';
//heading.style.marginBottom = '500px'

//Color Code Display
let colorCode = document.createElement('p');
colorCode.textContent = '';
colorCode.style.fontSize = '1.5rem';
colorCode.style.textAlign = 'center';

//Copy Img
let copyImg = document.createElement('img')
copyImg.alt = 'Copy Code';
copyImg.src = ''
copyImg.width = '35';
copyImg.style.display = 'none'
copyImg.style.cursor = 'pointer'

//Copied text
let copyText = document.createElement('p');
copyText.textContent = 'Copied'
copyText.style.display = 'none'


//General Div
let generalDiv = document.createElement('div');
generalDiv.style.display = 'flex';
generalDiv.style.flexDirection = 'column';
generalDiv.style.alignItems = 'center';
generalDiv.style.justifyContent = 'center'
generalDiv.style.gap = '5rem'

//Color Code & Copy Div
let contentDiv = document.createElement('div');
contentDiv.style.display = 'flex';
contentDiv.style.gap = '2rem';
contentDiv.style.alignItems = 'center'

// Button Div
let btnDiv = document.createElement('div');
btnDiv.classList.add('btn-div');
btnDiv.style.display = 'flex';
btnDiv.style.alignItems = 'center';
btnDiv.style.justifyContent = 'center';
//btnDiv.style.marginTop = '250px';
btnDiv.style.gap = '1rem';

//Change Btn
let colorBtn = document.createElement('button');
colorBtn.textContent = 'Change Colour'
colorBtn.classList.add('btn-color');
colorBtn.style.backgroundColor = ' #28a745';
colorBtn.style.padding = '1rem 0.5rem';
colorBtn.style.fontWeight = 'bold';
colorBtn.style.color = 'white';
colorBtn.style.cursor = 'pointer';
colorBtn.style.borderRadius = '5px';
colorBtn.style.fontSize = '1rem';


//Auto Btn
let autoChange = document.createElement('button');
autoChange.textContent = 'Auto Change';
autoChange.classList.add('reset-btn');
autoChange.style.backgroundColor = '#222222';
autoChange.style.fontWeight = 'bold';
autoChange.style.color = 'white';
autoChange.style.borderRadius = '5px';
autoChange.style.cursor = 'pointer';
autoChange.style.padding = '1rem 0.5rem';
autoChange.style.fontSize = '1rem';

//Reset Btn
let resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Colour';
resetBtn.classList.add('reset-btn');
resetBtn.style.backgroundColor = '#007bff';
resetBtn.style.fontWeight = 'bold';
resetBtn.style.color = 'white';
resetBtn.style.borderRadius = '5px';
resetBtn.style.cursor = 'pointer';
resetBtn.style.padding = '1rem 0.5rem';
resetBtn.style.fontSize = '1rem';

//Appending it to the HTML Body
document.body.appendChild(colorBtn);
document.body.appendChild(autoChange);
document.body.appendChild(resetBtn);
document.body.appendChild(heading);
document.body.appendChild(colorCode);
document.body.appendChild(copyImg)
document.body.appendChild(copyText)

//Appending into General Div
generalDiv.appendChild(btnDiv)
generalDiv.appendChild(heading)
generalDiv.appendChild(copyImg)

//Appending Code& Copy into a Div
contentDiv.appendChild(colorCode)
contentDiv.appendChild(copyImg)
contentDiv.appendChild(copyText)

//Appending btns into a Div
btnDiv.appendChild(colorBtn);
btnDiv.appendChild(autoChange);
btnDiv.appendChild(resetBtn);

//Appending the Div to the HTML Body
document.body.appendChild(generalDiv)
document.body.appendChild(contentDiv)
document.body.appendChild(btnDiv)


let randomRgb = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

colorBtn.addEventListener('click', () => {
    let randomColor = randomRgb();
    colorCode.textContent = `${randomColor}`;
    copyImg.src = './content_copy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
    copyImg.style.display = 'block';
    document.body.style.backgroundColor = randomColor;
})

let autoChanging = false;
let intervalId;
autoChange.addEventListener('click', () => {

    if (!autoChanging) {
        intervalId = setInterval(()=> { 
            let randomColor = randomRgb();
            colorCode.textContent = `${randomColor}`
            copyImg.src = './content_copy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
            copyImg.style.display = 'block';
            document.body.style.backgroundColor = randomColor;
        }, 2000);
        autoChanging = true;
        autoChange.innerHTML = 'Stop Auto';

    } else {
        clearInterval(intervalId);
        autoChanging = false;
        autoChange.innerHTML = 'Auto Change';
    }

}) 

resetBtn.addEventListener('click', () => {
    colorCode.textContent = '';
    document.body.style.backgroundColor = 'white';
})

//Copy Img Functionality
copyImg.addEventListener('click', () => {
    let copyCode = colorCode.textContent; //targets the text in the colorCode P tag
    navigator.clipboard.writeText(copyCode); //API to copy text
    copyText.style.display = 'block'

    setTimeout(() => {
       copyText.style.display = 'none' 
    }, 1000 ) //Hides the copied color after 1sec.
})
