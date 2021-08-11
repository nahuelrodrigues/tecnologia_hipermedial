 
int numero = 100;
Organismo[] circulos = new Organismo[numero];

void setup() {

  size(screen.width,screen.height);
  background(255);

  for (int i=0;i<numero;i++) {
    circulos[i] = new Organismo();
  }
  
}

void draw() {

  fill(255,70);
  noStroke();
  rect(0,0,width,height);

  for (int i=0;i<numero;i++) {
    circulos[i].mover();
    circulos[i].dibujar();
  }
  
}

