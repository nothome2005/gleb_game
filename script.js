const snd = new Audio("music/My-Feelings-Doki-Doki-Literature-Club.wav");
const btn = document.getElementById('btn');
const Label = document.getElementById('LABEL')
const character = document.getElementById('character');
snd.play();
const dialogs = ['Привет!', 'Я наконец-то заработала!','Я так рада этому!']
const dialog_img = ['girl','man','girl']
var num = 0;
var anim_var = 0;
var speed = 50;

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
    if (anim_var < (dialogs[num].length + 1)) {
        Label.textContent = dialogs[num].slice(0,anim_var);
        anim_var++;
        setTimeout(Anim_Text, speed);
    } else {
        anim_var = 0;
        num++;
  }
}


btn.addEventListener('click', function handleClick() {
    change_dialog_logo()
    if (num == (dialogs.length))
    {
        num = 0;
    }
    Anim_Text();
 
});
