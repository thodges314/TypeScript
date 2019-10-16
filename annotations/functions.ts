const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a-b;

function divide(a:number, b:number):number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {         // can optionally return null or undefined
    console.log(message);
}

const throwError = (message: string): never => {    // will *never* execute function completely - **rare**
    throw new Error(message);
}