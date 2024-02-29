

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start_lines);

var count = 0;

function loopStart() {
    for(i = 0; i < 100; i++) {
        startlines()
    }
}

function start_lines(amount = 1) {
    count++;
    for(i = 0; i < amount; i++) {
        ctx.lineTo(0,600);
        ctx.moveTo(count,);
        ctx.stroke();
    }

}