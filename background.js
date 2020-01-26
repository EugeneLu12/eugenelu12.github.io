/*
original https://codepen.io/mladen___/pen/gbvqBo
Author: Mladen Stanojevic
*/

let c = document.getElementsByClassName("canvas")[0];
let ctx = c.getContext("2d");

function resize() {
    let box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

let light = {
    x: 160,
    y: 200
}

let colors = ["#f5c156", "#e6616b", "#5cd3ad"];

function Box() {
    this.half_size = Math.floor((Math.random() * 50) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;

    this.color = colors[Math.floor((Math.random() * colors.length))];
  
    this.getDots = function() {

        let full = (Math.PI * 2) / 4;


        let p1 = {
            x: this.x + this.half_size * Math.sin(this.r),
            y: this.y + this.half_size * Math.cos(this.r)
        };
        let p2 = {
            x: this.x + this.half_size * Math.sin(this.r + full),
            y: this.y + this.half_size * Math.cos(this.r + full)
        };
        let p3 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 2),
            y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        let p4 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 3),
            y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    }
    this.rotate = function() {
        let speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
    }
    this.draw = function() {
        let dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();


        if (this.y - this.half_size > c.height) {
            this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
            this.x -= c.width + 100;
        }
    }
}

let boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
    };
    for (let i = 0; i < boxes.length; i++) {
        collisionDetection(i)
        boxes[i].draw();
    };
    requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 14) {
    boxes.push(new Box());
}

window.onresize = resize;

function collisionDetection(b){
	for (let i = boxes.length - 1; i >= 0; i--) {
		if(i != b){	
			let dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			let dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			let d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}