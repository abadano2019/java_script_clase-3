// Función que representa tabla con usuarios y contraseñas, recibe ambos parametros y valida si existen y los privilegios
// input: usuario: usuario a validar contra base de datos
//        contrasena: contraseña a validar contra base de datos
//
// output: codigo = 1: usuario y contraseña ingresados son correctos (Administrador)
//         codigo = 2: usuario y contraseña ingresados son correctos (usuario)
//         codigo = 0: usuario y contraseña ingresados no son correctos
const tabla_usuario = (usuario, contrasena) => {

    let usu_pass = ""; // concatenación de los contenidos de las variables para validar contra la base
    usu_pass = usuario + contrasena;

    switch (usu_pass) {
        case "ARIELH1234":
            codigo = 1;
            break;
        case "JUANL1122":
            codigo = 1;
            break;
        case "Andrea123A":
            codigo = 2;
            break;
        case "PABLOAB156":
            codigo = 2;
            break;
        case "Raul456ABc":
            codigo = 2;
            break; 
        default:
            codigo = 0;
    }
    return codigo;
}

// Función que representa tabla con el nivel de privilegios por usuario
// input: usuario: usuario a validar contra base de datos
//
// output: codigo = 1: usuario y contraseña ingresados son correctos (Administrador)
//         codigo = 2: usuario y contraseña ingresados son correctos (usuario)
//         codigo = 0: usuario y contraseña ingresados no son correctos
const tabla_usuario_nivel = (usuario) => {

    switch (usuario) {
        case "ARIEL":
            codigo = 1;
            break;
        case "JUAN":
            codigo = 2;
            break;
        case "Andrea":
            codigo = 2;
            break;
        case "PABLO":
            codigo = 2;
            break;
        case "Raul":
            codigo = 2;
            break; 
        default:
            codigo = 0;
    }
    return codigo;
}

// Función que representa tabla para otorgar a un nivel el acceso a una pagina
// input: nivel: nivel a validar contra base de datos
//        pag: nombre de la pagina a validar nivel
//
// output: true: se autoriza el acceso a la pagina para el nivel consultado
//         false: no se autoriza el acceso a la pagina para el nivel consultado
function tabla_seguridad(nivel, pag){
    let nivel_pag = nivel + pag;
    let response = false;
    switch (nivel_pag) {
        case "1recibo":
            response = true;
            break;
        case "1ncredito":
            response = true;
            break;
        case "1menu":
            response = true;
            break;
        case "1login":
            response = true;
            break;
        case "1listasFacturas":
            response = true;
            break;
        case "1credito":
            response = true;
            break;
        case "1contado":
            response = true;
            break;
        case "2carrito":
            response = true;
            break;
        default:
            response = false;
    }
    return response;

}

// Función que representa base de datos de empresas disponibles para facturar 
// input: nroCliente: corresponde al numero de empresa a realizar facturación
//
// output: nombre de empresa en caso de existir, string vacio en caso de no existir
function tabla_empresas(nroCliente)
{   
    let empresa = "";
    switch (nroCliente) {
        case 1001:
            empresa = "LA CASA DE LAS TELAS S.A.";
            break;
        case 1002:
            empresa = "LA FONTANA S.A.";
            break;
        case 1003:
            empresa = "LA SIN RIVAL S.A.";
            break;
        case 1004:
            empresa = "BAZAR MITRE S.A.";
            break;
        default:
            empresa = "";
    }
    return empresa;
}
// Función que representa base de datos de productos disponibles para facturar 
// input: nroProducto: corresponde al numero de producto a realizar facturación
//
// output: nombre de producto en caso de existir, string vacio en caso de no existir
function tabla_productos(nroProducto)
{   
    let producto = "";
    switch (nroProducto) {
        case 100:
            producto = "A";
            break;
        case 101:
            producto = "B";
            break;
        case 102:
            producto = "C";
            break;
        case 103:
            producto = "D";
            break;
        case 104:
            producto = "E";
            break;
        case 105:
            producto = "F";
            break;
        case 106:
            producto = "F";
            break;
        default:
            producto = "";
    }
    return producto;
}
