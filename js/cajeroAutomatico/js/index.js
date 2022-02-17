var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
    ];
   


           //REGISTRO DE USUARIOS   (INICIO)
          /*  let ingresaste = document.getElementById('monitor'); */
function userSignUp() {
    let ingresaste = document.getElementById('monitor');
    ingresaste.innerHTML = `
    <form id ="formularioLogIn">
        <article class="form-group">
            <label for="registroUser">Nombre de usuario:</label>
            <input type="text" class="form-control" id="registroUser" placeholder="Cree su usuario">
        </article>
        <article class="form-group">
            <label for="registroPass">Contraseña:</label>
            <input type="password" class="form-control" id="registroPass" placeholder="Introducir la contraseña">
        </article>
        <article class="form-group">
            <label for="registroEfectivo">Monto apertura cuenta:</label>
            <input type="text" class="form-control" id="registroEfectivo" placeholder="Debes abononar $50 minimo">
        </article>
        <article class="form-group">
            <button type="button" class="btn btn-primary" onclick="CrearUsuario()">Sign up</button>
            <button type="button" id="regresar" class="btn btn-primary alinear" onclick="regresarPantallaPrincipal()">Log in</button>
        </article>
    </form>`;
}



            //REGRESAR DE REGISTRO A PANTALLA PRINCIPAL

function regresarPantallaPrincipal() {
    let regresar = document.getElementById("formularioLogIn");
    /* let formularioLogIn = ingresaste; */
    regresar.innerHTML = `
    <div class="container" id="monitor">
                    <article class="botonRegistro">
                        <button type="button" id="signUpButton" class="btn btn-primary" onclick="userSignUp()">Sign up</button>
                    </article>
                    <article class="pantallaCajero">
                        <form action="#" class="form">
                            <div class="form-group">
                                <label for="email">Usuario</label>
                                <input type="text" name="usuario" id="usuario" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" class="form-control">
                            </div>
                            <button class="btn btn-primary" type="button" class="" onclick="logIn('user','pass')">Login</button> <!-- type="submit" -->
                        </form>
                    </article>
                </div>`;
}





        //ALTA USUARIO    (INICIO)

function Usuarios(name,pass,cash) {//FUNCION PARA CREAR OBJETOS
    this.name = name;           //FUNCION PARA CREAR OBJETOS
    this.pass = pass;           //FUNCION PARA CREAR OBJETOS
    this.cash = cash;           //FUNCION PARA CREAR OBJETOS
}                               //FUNCION PARA CREAR OBJETOS
function CrearUsuario() {
    let registroUser = document.getElementById("registroUser");
    let registroPass = document.getElementById("registroPass");
    let registroEfectivo = document.getElementById("registroEfectivo");
    let usuario1 = new Usuarios(registroUser.value,registroPass.value,Number(registroEfectivo.value));
        //agregarUsuario = "no";
        cuentas.push(usuario1);
        /* console.log(usuarios);  //acceder al array que contiene a los objetos
        //accdesde a los atributos dentro de los objeto que estan drento del array
        console.log(usuarios[0].name);
        //accdesde a los atributos dentro de los objeto que estan drento del array
        console.log(usuarios[0].pass);
        //accdesde a los atributos dentro de los objeto que estan drento del array
        console.log(typeof(usuarios[0].cash)); */
}

            //ALTA USUARIO    (FIN)


                    //REGISTRO DE USUARIOS  (FIN)

                    let usuarioActual,saldoActual; 
                    let cambioSaldo;            

            //INICIO SESIÓN  (INICIO)
let intentos = 0;
function logIn() {
    
    /*  */
    let ingresaste = document.getElementById('monitor');
    /* let atmScreen = document.getElementById("mainScreen") */
    let aux = 0;
    user = document.getElementById('usuario');
    pass = document.getElementById('password');
    for (const key in cuentas) {
        if (user.value === cuentas[key].nombre & pass.value === cuentas[key].password) {
            /* alert("dentro"); */
            aux = 1;
            usuarioActual = cuentas[key].nombre;
            saldoActual = cuentas[key].saldo;

            cambioSaldo =cuentas[key].nombre;
        }
    }
    if(aux === 1){
        ingresaste.innerHTML = `
        <div class="monitorUsario">
            <section class="datosCuenta">
                <h4 id="mostrarUsuario">${usuarioActual}</h4>
                <h4 id="mostrarsaldo">saldo $ ${saldoActual} </h4>
            </section>
            <section class="accionesCuenta">
                <input class="retirarDepositar" type="text">
                <button onclick="retirando()">Retirar</button>
                <input class="retirarDepositar" type="text">
                <button onclick="depositando()">Depositar</button>
            </section>
        </div>`;
        /* mostrarDatosUsuario(); */
    }else if (intentos < 3){
        alert('Contraseña o usuario invalido');
        intentos = intentos + 1;
        
    }else{
        alert("excediste la cantidad de intentos");
    }
    /* let mostrarUsuario = document.getElementById("mostrarUsuario").innerText;
    let mostrarsaldo = document.getElementById("mostrarsaldo").innerText;
    return console.log((mostrarUsuario + usuarioActual),(mostrarsaldo + saldoActual));
    return retorno = mostrarUsuario + usuarioActual, retorno2 = mostrarsaldo + saldoActual; */
    
}
                     //INICIO SESIÓN  (FIN)

/* function mostrarDatosUsuario(retorno,retorno2) {
    let nombreUsuario = document.getElementById("mostrarUsuario");
    let saldoUsuario = document.getElementById("mostrarsaldo");
    nombreUsuario.innerText = retorno;
    saldoUsuario.innerText = retorno2;
} */



                //TECLADO CAJERO (INICIO)

                let montoIndicado;
let numero;
function CapturarDatos(id){     //id es el parametro que recibe (donde el usuario da click)
    let imprimirTotal = document.getElementsByClassName('retirarDepositar');
    numero = Number(id);
    
    if(numero === undefined)
        {
            imprimirTotal[0].value = numero;
            imprimirTotal[1].value = numero;
            
            
        }
        else
        {
            /* imprimirTotal.innerText= imprimirTotal.innerText + numero; */
            imprimirTotal[0].value = imprimirTotal[0].value + numero;
            imprimirTotal[1].value = imprimirTotal[1].value + numero;
        }
        return montoIndicado = Number(imprimirTotal[0].value);

}

                //TECLADO CAJERO (INICIO)



                //RETIROS Y DEPOSITOS (INICIO)

                let saldoArray;
function retirando() {
    /* let usuario = document.getElementById("mostrarsaldo");
    usuario.innerHTML = `<h4 id="mostrarUsuario">${saldoActual - montoIndicado}</h4>`; */
    if (saldoActual - montoIndicado < 10) {
        alert("no puedes dejar tu cuenta con menos de $10");
    }else{
        saldoArray = saldoActual - montoIndicado;
        let usuario = document.getElementById("mostrarsaldo");
        usuario.innerHTML = `<h4 id="mostrarUsuario">saldo $${saldoArray}</h4>`;
        for (const iterator in cuentas) {
            if(cambioSaldo === cuentas[iterator].nombre){
                cuentas[iterator].saldo = saldoArray;
            }
        }
    }
}
function depositando() {
    
    if (saldoActual + montoIndicado > 990) {
        alert("tu cuenta no puede exceder los $990");
    }
    else{
        saldoArray = saldoActual + montoIndicado;
        let usuario = document.getElementById("mostrarsaldo");
        usuario.innerHTML = `<h4 id="mostrarUsuario">saldo $${saldoArray}</h4>`;
        for (const iterator in cuentas) {
            if(cambioSaldo === cuentas[iterator].nombre){
                cuentas[iterator].saldo = saldoArray;
            }
        }
    }
}


                //RETIROS Y DEPOSITOS (FIN)





