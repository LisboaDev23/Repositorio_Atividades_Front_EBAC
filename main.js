// //definindo a classe abstrata Game
// class Game {
//     //vou mostrar duas formas diferentes que aprendi para definir o método construtor
//     constructor(nameGame,plataform,year,generation,type){//definindo o construtor utilizando a palavra reservada constructor
//         this.nameGame = nameGame;
//         this.plataform = plataform;
//         this.year = year;
//         this.generation = generation;
//         this.type = type;
//         this.initExe = function(execFile){
//             console.log("Start file executable : " + execFile);
//         }
//     }
// }


//outra forma de declarar o construtor da classe
function Game(nameGame,plataform,year,generation,type) {
    this.nameGame = nameGame;
    this.plataform = plataform;
    this.year = year;
    this.generation = generation;
    this.type = type;
    this.initExe = function(execFile){
        console.log("Start file executable : " + execFile);
    }
}


// //declarando herança utilizando a palavra extends
// class CallOfDuty extends Game { //mostrando uma forma que aprendi para usar a herança
//     constructor(nameGame,plataform,year,generation,type,version){
//         super(nameGame,plataform,year,generation,type);
//         this.version = version;
//     }
// }



//utilizando a forma como o professor Gian ensinou
function CallOfDuty(nameGame,plataform,year,generation,type,version){
    this.version = version;
    Game.call(this, nameGame,plataform,year,generation,type); 
//o this dessa função, refere-se que vamos utilizar os argumentos passados no construtor do CallOfDuty para acessarmos seus atributos
}
const allPlataform = ["PS4", "PS5", "XBOX ONE", "XBOX SERIES --", "PC"];
//instanciando um novo Cod
const callOfDutyMW3 = new CallOfDuty("Call of Duty Modern Warfare III", allPlataform, 2023, "Old and New GEN","FPS", "v.1.1.14");
console.log(callOfDutyMW3);
callOfDutyMW3.initExe("cod.exe");

//nova classe Fifa
function Fifa(nameGame,plataform,year,generation,type,fifaNumber){
    this.fifaNumber = fifaNumber;
    Game.call(this,nameGame,plataform,year,generation,type);
}
const fifa22 = new Fifa("FIFA 22",allPlataform,"Old and New GEN", "Sports", "v2.22");
console.log(fifa22);
fifa22.initExe("fifa22.exe");

const fifa23 = new Fifa("FIFA 23",allPlataform,"Old and New GEN", "Sports", "v5.24");
console.log(fifa23);
fifa23.initExe("fifa23.exe");