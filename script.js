let canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;






//constructor function
function Particle(x, y, directionX, directionY, size, color) {
    //set speed
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}


//add draw method prototype
Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();

}




//add update method to particle prototype
Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
        this.vx = -this.vx;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
         this.vy = -this.vy;

    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}


//particle array
function init() {
    particleArray = [];
    for (let i = 0; i < 100; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2) + size;
        let y = Math.random() * (innerHeight - size * 2) + size;
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;

        let color = "#ff4d5a";

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect() {
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a + 1; b < particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x;
            let dy = particleArray[a].y - particleArray[b].y;
            let distance = dx * dx + dy * dy; 
            let maxDistance = 150 * 150; 

            if (distance < maxDistance) {
                let opacity = 1 - distance / maxDistance;
                ctx.strokeStyle = `rgba(255, 77, 90, ${opacity})`; 
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}


// animation loop 
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
    connect();
}



let mouse = {
    x: canvas.width /2,
    y: canvas.height/2
};

canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
})


window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    init(); 
});


init();
animate();  
