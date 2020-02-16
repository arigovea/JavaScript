/*const closure = (a) => {
    return (b) => a + b;
};

const closure5 = closure(5);
console.log(closure5(3));

const closureEmails = (a) =>{
    return (b) => b + a;
}

let closureGmail = closureEmails('@gmail.com');
console.log(closureGmail('marco'));

const gmail = "@gmail.com";
`marco${gmail}`;
console.log(`marco${gmail}`);

console.log(["Pepe", "Juan", "Felipe"].map((x3) => `${x3}${gmail}`));

//const alertUser = () => alert("Hola");

//export alertUser;

let x12 = () =>{
    let a = 3;
    let x1 = function(){
        console.log(a);
    }
    return x1;
}

console.log(x12(3));

const ternary = (x) => {
    return x >= 60 ? "Pasa" : "Reprobado"
};
console.log(ternary(60));

const array = [1,2,3,4];

let array2 = array.map((x) => Math.sqrt(x));
console.log(array, array2);

let sumaValores = array.reduce((x, current) => {
    return x + current;
}, 0);

console.log(sumaValores);


let MultValores = array.reduce((x, current) => {
    return x * current;
}, 1);

console.log(MultValores);

let x = [1,2,3];
let x2 = x;
console.log(x,x2);

let pls = Array.from(x);
let pls2 = [...array];
console.log(pls, pls2)
 */
//[0,1,2] == [0,1,2] False porque estan comparando los valores de referencia y no el valor
//x == x2 True porque estan comparando los valores de ambos arreglos
//[...x] == [...x2] False porque estan comparando los valores de referencia, tienen cajas diferentes

//Si quiero saber si son iguales tambien se pueden convertir a texto plano .toString y comparas.

const validateFalsy = (x) => {
    return !x ? "falsy" : "truthly"
}
console.log(validateFalsy(null));

//mejor validacion para array es length

//mejor validacion para object es sacar key a un arreglo y despues comparar length

//traerInfo()
//Yaentro = true;

