class Organismo {

  float x;
  float y;
  float vx;
  float vy;
  float d;
  
  float a = 30.0;          // aceleración de la fuerza
  float dmin = 30;         // distancia mínima de acción
  float damp = 0.99;       // rozamiento

  Organismo() {

    x = random(0,width);
    y = random(0,height);
    vx = random(-5,5);
    vy = random(-5,5);
    d = random(5,10);
    
  }

  void mover() {
    
    float distancia, angulo;
    
    if (mousePressed==true) {
      
      distancia = dist(x,y,mouseX,mouseY);
      if (distancia < dmin) distancia = dmin;
      angulo = atan2(y-mouseY,x-mouseX);
      
      vx += -a*cos(angulo)/distancia;
      vy += -a*sin(angulo)/distancia;
     
    } 

    x += vx;
    y += vy; 
    
    vx *= damp;
    vy *= damp;
    
    if (x>width) {
      x =0;
    }

    if (x<0) {
      x =width;
    }

    if (y>height) {
      y =0;
    }

    if (y<0) {
      y =height;
    }
    
  }

  void dibujar() {

    noFill();
    stroke(0);
    ellipse(x,y,d,d);
    
  }
  
}

