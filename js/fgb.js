let angle= 0;
setInterval(() => {
angle = (angle + 2) % 360;
document.getElementById('spinner').style.transform = 'rotate(${angle}deg)';
}, 50);