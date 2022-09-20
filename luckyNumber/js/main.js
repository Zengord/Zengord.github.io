"use strict"

let buttonStartGame = document.querySelector('.button');
let playingField = document.querySelector('.playing-field__message');
let message = document.querySelector('.playing-field__message');
let buttonsControl = document.querySelector('.playing-field__buttons');
let buttonOk = document.querySelector('.playing-field__button-ok');
let buttonNo = document.querySelector('.playing-field__button-no');
let input = document.querySelector('.playing-field__input');

buttonStartGame.addEventListener('click', function () {
    game();
});


function game() {
    buttonStartGame.classList.add('button-not-active');
    buttonStartGame.setAttribute('disabled', '');
    letterTimer(10, 'Я загадываю число от 1 до 100, а ты пытаешься его угадать, все просто, попробуем?');
    buttonsControl.classList.add('playing-field__buttons-active');

    buttonNo.addEventListener('click', function () {
        buttonsControl.classList.remove('playing-field__buttons-active');
        letterTimer(10, 'Очень жаль, до новых встреч!');
    });
    buttonOk.addEventListener('click', function () {
        buttonsControl.classList.remove('playing-field__buttons-active');
        letterTimer(10, `Отлично, тогда начнем Я загадал число, попробуй отгадай!`);
        input.classList.add('active');
        let number = luckyNumber(1, 100);
        console.log(number);
        input.addEventListener('keyup', function (e) {
            if (e.code === 'Enter') {
                if (Number(input.value) == number) {
                    letterTimer(10, "И это правильное число!");
                }
                if (Number(input.value) > number) {
                    letterTimer(10, "Попробуйте число меньше");
                }
                if (Number(input.value) < number) {
                    letterTimer(10, "Попробуйте число больше");
                }
            }
        });
    });


    function letterTimer(milliseconds, text) {
        let i = 0;
        message.textContent = '';
        let textSplit = text.split('');
        let time = setInterval(() => {
            message.textContent += textSplit[i];
            if (i == textSplit.length - 1) {
                console.log('я попал в if на удаление таймера');
                clearInterval(time);
            }
            i++;
        }, milliseconds);
    }

}

function luckyNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}