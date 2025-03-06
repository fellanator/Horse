let start = new Audio("horseAudio/horseStart.mp3");
let neigh1 = "horseAudio/neigh1.mp3";
let neigh2 = "horseAudio/neigh2.mp3";
let neigh3 = "horseAudio/neigh3.mp3";
let stampede1 = "horseAudio/stampede1.mp3";
let stampede2 = "horseAudio/stampede2.mp3";
let scream = "horseAudio/scream.mp3";

let horse1 = "horsePics/horse1.jpg";
let horse2 = "horsePics/horse2.jpg";
let horse3 = "horsePics/horse3.jpg";
let horse4 = "horsePics/horse4.jpeg";
let horse5 = "horsePics/horse5.jpg";
let horse6 = "horsePics/horse6.jpg";
let horse7 = "horsePics/horse7.jpg";
let horse8 = "horsePics/horse8.jpg";
let horse9 = "horsePics/horse9.jpg";

let ranSoundList = [neigh1,neigh2,neigh3,stampede1,stampede2];
let ranImgList = [horse1,horse2,horse3,horse4,horse5,horse6,horse7,horse8,horse9];

document.getElementById('HORSE-ACTIVATE').addEventListener('click', function(){
document.getElementById('HORSE-ACTIVATE').style.display = "none";
document.body.style.backgroundImage = "url('horsePics/horse1.jpg')";
let end = start.duration*1000;
console.log(end);
start.play();
let speed = 1000;
setTimeout(function(){


horseTime();


}, end)

function horseTime()
{
    const horse = setInterval(function(){
        const play = new Audio(ranSoundList[Math.floor(Math.random()*(ranSoundList.length))]);
        const screamTime = new Audio(scream);
        play.play();
        document.body.style.backgroundImage = `url(${ranImgList[Math.floor(Math.random()*(ranImgList.length))]})`;
        
        if(speed > 10)
        {
            speed -= 10;
        }else if(speed <= 10 && speed > 1)
        {
            speed -= 1;
        }
        if(speed < 750)
        {
            screamTime.play();
        }
        console.log(speed);
        clearInterval(horse);
        horseTime();
        },speed);
}

});
