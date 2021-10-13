class jugador{
//creamos nuestas tipado de variables  
    vida : number= 100;
    pomada :number= 100;
    rayos : number= 50;
    nombre : string = "";
    sol : number = 100;
    golpe : number  =20;
                    //es pesioficamos el  tipo  de tado
    constructor(nombre :string){
        this.nombre = nombre;
    }
     public atacar(jugadorObjetivo :any ){
        if(jugadorObjetivo>100){
            console.log('tienes mucha vida jajaja');
        }else{
            jugadorObjetivo.vida -= this.pomada;
            console.log('estubo serca casi te vas al panteon');
        }
        this.status(jugadorObjetivo);   
    }

    public matar(jugadorObjetivo:any){
        jugadorObjetivo.vida.pomada-=this.rayos;
        console.log('adios');
        this.status(jugadorObjetivo);   
        }
    public curar(jugadorObjetivo : number){
        if(this.pomada > 100){
        console.log('andas al 100'); 
        this.status(jugadorObjetivo);
        }
    }
    status(jugadorObjetivo : number){
        console.log(jugadorObjetivo);
        console.log(this);
    }
}
const superman = new jugador('superman');
const batman = new jugador('batman');

console.log(superman);
console.log(batman);