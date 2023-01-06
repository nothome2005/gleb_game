//var config = require('data.json');

const keyboard_sound = new Audio('sounds/sound.wav');
const btn = document.getElementById('btn');
const Label = document.getElementById('LABEL');
const character = document.getElementById('character');
const slider = document.getElementById("myRange");
const kbvm = document.getElementById("kb_volume_controller");
const style_file = document.getElementById("style_file");
const answ_div = document.getElementById("container-buttons");
const answ_btn = document.getElementsByClassName("answear");

const dialogs = ['Привет!', 'Я наконец-то заработала!','Я так рада этому! Ты рад?'];
const dialog_img = ['girl','man','girl'];

var num = 0;
var anim_var = 0;
var speed = 50;

answ_btn[0].addEventListener('click', function handleClick() {
    console.log("Yes");
    answ_div.style.visibility = 'hidden';
    btn.style.visibility = 'visible';
});
answ_btn[1].addEventListener('click', function handleClick() {
    console.log("No");
    answ_div.style.visibility = 'hidden';
    btn.style.visibility = 'visible';
});




function change_dialog_logo() {
    if (dialog_img[num] == 'man') {
        character.src = 'dialog window/DialogWindow-H(2).png';
    }
    if (dialog_img[num] == 'girl') {
        character.src = 'dialog window/DialogWindow-Komi(2).png'
    }
}

function Anim_Text() {

    change_dialog_logo()
    keyboard_sound.play();
    if (anim_var < (dialogs[num].length + 1)) {
        Label.textContent = dialogs[num].slice(0,anim_var);
        anim_var++;
        setTimeout(Anim_Text, speed);
    } else {
        keyboard_sound.pause();
        anim_var = 0;
        num++;
    }
}


btn.addEventListener('click', function handleClick() {
    change_dialog_logo();
    if (num == (dialogs.length - 1))
    {
        answ_div.style.visibility = 'visible';
        btn.style.visibility = 'hidden';
    }
    if (num == (dialogs.length))
    {
        answ_div.style.visibility = 'hidden';
    }
    if (num < (dialogs.length)) {
        Anim_Text();
    }
    
    keyboard_sound.pause();
 
});

slider.oninput = function() {
    snd.volume = this.value/100;
} 
kbvm.oninput = function() {
    keyboard_sound.volume = this.value/100;
} 


window.onload = function() {

}
if (screen.width == 2560) {
    style_file.setAttribute('href',"style3.css");
    console.log('OK');
}
if (screen.width == 1920) {
    style_file.setAttribute('href',"style3_alternative.css");
    console.log('NO');
}
