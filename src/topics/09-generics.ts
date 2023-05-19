
//cuando se recibe algo que aun no se sabe que es, hay que tratar no usar any
//<T> se refiere a un generico y el tipo depende de lo que sea recibido
//El primer generico por lo general se pone la T
export function whatsMyType<T>( argument: T ): T { 

    return argument;
}

//Se puede establecer los tipos inmediatamente para que lo reciba la T en la funcion
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);


//Para probar las propiedades dependiendo del tipo gracias al intellisense
console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );


