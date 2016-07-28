
var particles = [];

function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
}

function draw(){
	background(51);
	particles.push(new Particle(width/2,50));
	for (var i = particles.length-1; i>=0; i--){
	 var p = particles[i];
	 p.run()
	if(p.isDead()){
		particles.splice(i,1);
	}
}
}
