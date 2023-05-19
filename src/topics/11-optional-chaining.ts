
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0; //esto es el optional chaining
    // const howManyChildren = passenger.children!.length; //not null asertion operator para agregar una pqueña validacion

    console.log( passenger.name, howManyChildren);

    return howManyChildren; //siempre va a regresar un numero en este caso
}


returnChildrenNumber( passenger1 );
