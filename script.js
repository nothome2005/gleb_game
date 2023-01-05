const snd = new Audio("music/My-Feelings-Doki-Doki-Literature-Club.wav");
const btn = document.getElementById('btn');
const Label = document.getElementById('LABEL')
snd.play();
const dialogs = ['Привет!', 'Я наконец-то заработала!','Я так рада этому!']
var num = 0;

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  if (num == (dialogs.length)) {
    num = 0;
  }
  Label.textContent = dialogs[num];
  num++;
});
