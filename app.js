// Size buttons animation
const sizesButtons = document.querySelectorAll('.size')

function onChangeSizeButton() {
    sizesButtons.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
}

sizesButtons.forEach(button => button.addEventListener('click', onChangeSizeButton));

// End size buttons animation

// Color and shoes animation buttons 

const colorButtons = document.querySelectorAll('.color');
const shoesColor = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');

let prevColor = 'orange';

function onChangeColorSelected() {
    let primaryColorAttribute = this.getAttribute('primary');
    let colorAttribute = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color=${colorAttribute}]`)
    let gradient = document.querySelector(`.gradient[color=${colorAttribute}]`);
    let prevGradient = document.querySelector(`.gradient[color=${prevColor}]`);


    colorButtons.forEach(button => button.classList.remove('active'));
    this.classList.add('active');

    shoesColor.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(gradient => gradient.classList.remove('first', 'second'));
    gradient.classList.add('first');

    prevGradient.classList.add('second');

    prevColor = colorAttribute;

    document.documentElement.style.setProperty('--primary', primaryColorAttribute);
}

colorButtons.forEach(button => button.addEventListener('click', onChangeColorSelected))

// End Color and shoes animation buttons 