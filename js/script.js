const canvas = document.getElementById("front")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const content = canvas.getContext('2d');
function Circle (x,y,r,c){
 this.x = x;
 this.y = y;
 this.r = r;
 this.c = c;

 this.dx = Math.random();
 this.dx = Math.floor(Math.random() *2)== 1 ? .25 : -.25;
 this.dy = Math.random();
 this.dy = Math.floor(Math.random() * 2)==1 ? .25 : -.25;

 this.draw = function(){
    content.beginPath();
    content.fillStyle= this.c;
    content.arc(this.x, this.y, this.r, 0, Math.PI *2);
    content.fill();
 }
 this.animate = function(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.x +this.r > canvas.width || this.x - this.r < 0){
        this.dx = -this.dx;
    }
    if(this.y +this.r > canvas.height || this.y - this.r < 0){
        this.dy = -this.dy;
    }
    this.draw();
}
}

const whiteBalls =[];
const primaryBalls =[];
function Create(){
for (let i = 0; i < window.innerWidth*2.5; i++) {
    let r = (Math.random());
    let x = Math.random()* (canvas.width -r *10)+r;
    let y = Math.random()* (canvas.height -r *10)+r;
    let c = 'white';
    whiteBalls.push(new Circle(x,y,r,c));
}

for (let i = 0; i < window.innerWidth*1.25; i++) {
    let r = (Math.random());
    let x = Math.random()* (canvas.width -r *10)+r;
    let y = Math.random()* (canvas.height -r *10)+r;
    let c = 'aqua';
    primaryBalls.push(new Circle(x,y,r,c));
}
}
function Update(){
    content.clearRect(0,0,canvas.width, canvas.height)

    for (let i = 0; i < whiteBalls.length; i++) {
        whiteBalls[i].animate();
    }
    for (let i = 0; i < primaryBalls.length; i++) {
        primaryBalls[i].animate();
    }
	
    
    requestAnimationFrame(Update);
}
function Remove(){
    content.clearRect(0,0,canvas.width, canvas.height)

    for (let i =0; i < whiteBalls.length; i++){
        whiteBalls.pop();
    }
    for (let i =0; i < primaryBalls.length; i++){
        primaryBalls.pop();
    }
}
Create();
Update();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Remove();
    Create();
});
  canvas.addEventListener('click',function(e){
        let r = (Math.random())+2;
        clickBall = primaryBalls.push(new Circle(e.clientX,e.clientY,r,'salmon'))	
	})