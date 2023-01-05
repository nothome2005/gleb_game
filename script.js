const snd = new Audio("music/My-Feelings-Doki-Doki-Literature-Club.wav");
const btn = document.getElementById('btn');
const Label = document.getElementById('LABEL')
snd.play();
const dialogs = ['Привет!', 'Я наконец-то заработала!','Я так рада этому!']
var num = 0;
var anim_var = 0;
var speed = 50;

function Anim_Text() {
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
    
    if (num == (dialogs.length))
    {
        num = 0;
    }
    Anim_Text();
 
});
