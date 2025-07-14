// importaciones
import { hashPassword, login, validateCredentials } from "../js/auth.js";
import { router } from "../routes/router.js";

export default function setupLogin() {
  const $btn = document.getElementById("loginBtn");
  if (!$btn) return;

  if ($btn) {
    $btn.addEventListener("click", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();

      let passHashed = hashPassword(pass);

      // consumo de api usuarios
      const getAllUsers = async () => {
        const URL_API = "http://localhost:3000/users";
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
      // validar usuarios
      async function startSession() {
        const users = await getAllUsers();

        if (!users) {
          // no se pudieron obtener los usuarios
          return;
        }

        let userFound = null;

        // recorremos todos los usuarios
        users.forEach((e) => {
          if (e.username.toLowerCase() === user.toLowerCase()) {
            userFound = e;
          }
        });

        if (!userFound) {
          alert("Usuario inválido, no registrado");
          return;
        }

        const isValid = validateCredentials(user, pass, userFound);
        if (!isValid) {
          return;
        }

        // iniciamos sesion si todo esta bien
        login("fake_token", user, passHashed, userFound.rol);

        history.pushState(null, null, "/crudEventos");
        router();
      }

      startSession();
    });
  }

  
}
