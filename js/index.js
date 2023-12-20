//------------------------------------------------
//                   Variables
//------------------------------------------------


//Declaramos una variable vacía que contendrá el número aleatorio.
var numeroalmacenado;
//Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let botonparacomprobar = document.querySelector('#comprobar')
//Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let borrardatos = document.querySelector('.borrarDatos')
//Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let textoresultado = document.querySelector('#resultado')
//Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let textoestadisticas = document.querySelector('#estadisticas')
//Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let valorexitosos = localStorage.getItem('exitosos') || 0;
//Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let valorfallidos = localStorage.getItem('fallidos') || 0;



//Funciones



//Función generadora del número
function generarnumerorandom() {
    //Declaramos una función que generará el número aleatorio.
    numeroalmacenado = Math.floor(Math.random() * 10); //
    //Le añade como valor a la variable que va a contener dicho número un random como número entero.
    console.info(numeroalmacenado);
}
//Función verificadora de número
botonparacomprobar.addEventListener('click', verificarnumero)



//Declaramos una función que comprobará el número que agreguemos.
function verificarnumero() {

    //Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    let numerojugador = document.querySelector('#numeroUsuario').value;
    //Ese valor lo transformamos en un número entero (parseInt).
    numerojugador = parseInt(numerojugador);
    //Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
    if (numerojugador === numeroalmacenado) {
        //Aumentamos el valor de la variable que contiene el número de éxitos.
        valorexitosos++;
        //Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
        localStorage.setItem('exitosos', valorexitosos);
        //Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
        textoresultado.innerHTML = "<div>Muy bien amigo! El número era <b>" + numeroalmacenado + "</b></div>";
        //Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        textoestadisticas.innerHTML = `Intentos buenos: ${valorexitosos}, Intentos Malos: ${valorfallidos}`;
        //Llamamos a la función generadora de números para generar un nuevo número aleatorio.
        generarnumerorandom();
        //Si no:
    } else {
        //Aumentamos el valor de la variable que contiene el número de fallidos.
        valorfallidos++;
        //Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
        localStorage.setItem('fallidos', valorexitosos);
        //Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
        textoresultado.innerHTML = "<div> Has fallado, intentalo de nuevo.</div>";
        //Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        textoestadisticas.innerHTML = `Exitosos: ${valorfallidos}, Fallidos: ${intentosFallidos}`;
    }
}



//Función limpiadora de datos
//Declaramos una función que se encargará de limpiar los datos del localStorage
//Usamos el método de localStorage para limpiar los datos.
//Utilizamos "location.reload()" para reiniciar la página.
//Listeners
//Botón comprobar
//Creamos un addEventListener para que al hacer click en el botón de comprobar se active la función verificadora de número.
//Botón limpiar
//Creamos un addEventListener para que al hacer click en el botón de limpiar se active la función limpiadora de datos.