// Crear un programa en JavaScript que realice lo siguiente:

// Input

// Solicitar por prompt tres datos y guardarlos en sus respectivas variables.
// Output

// Mostrar los números por consola o DOM ordenados de mayor a menor, y de menor a mayor.
// Mostrar un mensaje en consola o por el DOM si los números son iguales.

let num = [];

num[0] = parseInt(prompt("Ingresa el primer número"));
num[1] = parseInt(prompt("Ingresa el segundo número"));
num[2] = parseInt(prompt("Ingresa el tercer número"));

let menorMayor = num.sort().join(" ");
let mayorMenor = num.sort().reverse().join(" ");

if(num[0] == num[1] && num[1] == num[2]){
    alert(`Los números ${menorMayor} son iguales`);
}else{
    alert(`Los números ordenados de menor a mayor son: ${menorMayor} \nLos números ordenados de mayor a menor son: ${mayorMenor} `);
}

