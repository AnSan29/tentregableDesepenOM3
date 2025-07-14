// importaciones
import { hashPassword, validateCredCreate } from "../js/auth.js";


export default function setupRegister(){
    // obtenemos elementos de mi dom
    const $btnRegister = document.getElementById("registerBtn");
    const $form = document.getElementById("crud-form");

    const URL_API = "http://localhost:3000/users";

    // si no existe el boton detenemos funcion.
    if(!$btnRegister) return;
    // si existe el boton continuamos con logica de creación.
    if($btnRegister){
        // escuchamos evento click del boton "registrarse".
        $btnRegister.addEventListener("click", (e) =>{
            // evitamor el reload que trae por defecto el btn.
            e.preventDefault()

            // obtenemos variables del formulario.
            const username = document.getElementById("username").value.trim()
            const name = document.getElementById("name").value.trim()
            const telefono = document.getElementById("phoneNumber").value.trim()
            const rol = document.getElementById("userRol").value.trim()
            const pass = document.getElementById("password").value.trim()

            
                // encriptamos password
                let passHashed = hashPassword(pass);


                // inicia mi peticion fetch obtener usuarios
                const getAllUsers = async () => {
                    try {
                      let resConsulta = await fetch(URL_API);
                      let usersJson = await resConsulta.json();
                      // manejamos el error
                      if (!resConsulta.ok)
                        throw {
                          status: resConsulta.status,
                          statusText: resConsulta.statusText,
                        };
                      // si no hay errores, retorna los usuarios de mi api
                      return usersJson;
                    } catch (error) {
                      let message = error.statusText || "Ocurrio un error";
                      alert(message);
                    }
                };

                // crear usuario
                async function createUser() {
                    const users = await getAllUsers();

                    if (!users) {
                        // no se pudieron obtener los usuarios
                        return;
                    }

                    let userFound = null;

                    // recorremos todos los usuarios
                    users.forEach((e) => {
                        if (e.username.toLowerCase() === username.toLowerCase()) {
                            userFound = e;
                        }
                    });

                    if (userFound) {
                        alert("credenciales invalidas");
                        return;
                    }

                    //validamos si son credenciales optimas para crear el nuevo usuario.
                    const isValid = validateCredCreate(username,name,telefono,rol,pass,)
                    if(!isValid){
                        return;
                    }
                    //inicia la peticion fetch.
                    //funcion anonima, asincrona autoejecutable; (async function() {})();
                    ( async function() {
                        try {
                            let options = {
                                method: "POST",
                                headers: {"content-type": "application/json; charset=utf-8"},
                                body: JSON.stringify({
                                    username,
                                    password: passHashed,
                                    nombre: name,
                                    rol,
                                    telefono
                                }),
                            };
                            let resConsulta = await fetch(URL_API, options);
                            let usersJson = await resConsulta.json();

                            if(!resConsulta.ok) throw {status: resConsulta.status, statusText: resConsulta.statusText}
                            alert("usuario creado exitosamente!")
                            // cambiar alerta por una de sweet alert.
                            window.location.reload()
                         } catch (error) {
                             let message = error.status || "Ocurrió un error"
                             $form.insertAdjacentHTML("afterend", `<p>Error ${error.status} - ${message}</p>`)
                         }
                    })();
                    // finaliza peticion fetch
                }
                createUser();
        })
    }
}