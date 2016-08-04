//2016 08 04 jueves
//colegio oratorio don bosco
//santiago de chile
//latinoamerica
//clase de progamacion
//funciona con p5.js
//vicente barrios

var loli;

loli = 80;



//setup() corre una vez
//al principio
function setup() {
 

  //creo un lienzo
  //createCanvas(dimHor, dimVer
  createCanvas(800, 600);

  //pintar el fondo verde
  //background(red, green, blue);
  //0 es nada, 255 es todo
  background(0, 255, 0);
}



  //draw() se ejecuta despues
  //de setup()
  //se hace 60 veces por segundo

function draw() {


  //definir estilo de la ellipse
  //definir ancho del borde
  //strokeWeight(px);
  strokeWeight(10);
  
  //definir color del borde
  //stroke(color);
  
  //explicacion de color
  //1:grayscale,0 es negro 255 es blanco
  //2:grayscale + alpha
  //3: RGB, red, green , blue
  //4: RGB + alpha
  //alpha: 0 es transparente, 255 es solido
   
  //definir color del borde
  //stroke(color)
  //borde azul semitransparente
  stroke(255, 235, 98, 255);
   
  //definir color del relleno
  //fill(color)
  //naranjo semitransparente
  //fill(255, 145, 75,255);
  //fill(random(255), random(255), random(255),random(255));
  fill(255*mouseX/width, 139, 76);
 

  //dibujar ellipse 
  //que sigue al mouse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, loli, loli);
  loli = 10 + 200 * random (900/900);

  
}