
//Clases son un molde para crear instancias de ese molde
export class Person {
    // public name?: string;
    // private address?: string; //Private es que solo en esta clase de puede manipular esta propiedad

    /* Variables son propieades y funciones son metodos dentro de la clase */

    constructor(
        public firstName: string, //es mejor colocar propiedades acá
        public lastName: string,
        private address: string = 'No Address'
    ) {
        // this.name = 'Oscarin' //instancia a la propiedad name
    }

}


//Lo de Hero se aplica a hero y trae lo que tiene person
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number, 
//         public realName: string,
//     ) {
//         super( realName, 'New York' );//super es funcion especial que llama al constructor del padre, en este caso es Person
//     }
// }


//Otra forma mejor y optima
export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

        // this.person = new Person(realName);

    }

}

const tony = new Person('Tony', 'Stark', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony', tony);//se inyecta tony sin afectar nada


console.log(ironman)


