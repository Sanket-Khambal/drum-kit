var audio = document.querySelectorAll('audio');
console.log(audio);
var button = document.querySelectorAll('.buttons button');
console.log(button);

document.addEventListener('keydown', function(e){
    let keycode = e.keyCode.toString();
    //console.log(keycode);
    audio.forEach(function(note){
        //console.log(note.id)
        if(keycode===note.id){
            note.play()
            note.currentTime = 0
        }
    })
    button.forEach(function(btn){
        if(btn.id===keycode){
            console.log(btn.id);
            btn.classList.add('animate');
            setTimeout(()=> btn.classList.remove('animate'), 100)
        }
    })
})