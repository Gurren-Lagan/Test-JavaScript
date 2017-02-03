var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var t=10;
class Snake{
        constructor(){
            this.t = t;
            //this.cabeza = new Cola(100,0);
        }
        colision(snak){
            var dx = Math.abs(this.x - snak.x);
            var dy = Math.abs(this.y - snak.y);
            
            if(dx>=0 && dx<t && dy>=0 && dy<t){
            return true;
            }
            else{
                return false;
            }
        }
    }

class Cola extends Snake{
    constructor(x,y){
         super(); //La palabra clave super es usada para llamar funciones de un objeto padre en este caso "Snake"
        this.x = x;
        this.y = y;
    }
    
    dibuja(ctx){
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, this.t, this.t);
    }
}
         
var cabeza = new Cola(10,10);

function dibuja(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Borra rastro del snake
    cabeza.dibuja(ctx);
}

function inicia(){
    dibuja();
}
setInterval("inicia()", 1000 / 3);

    //var snake = new Snake(); //crea el snake
    