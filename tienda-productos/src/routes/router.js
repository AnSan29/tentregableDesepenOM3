// importacion de vistas
import About from "../views/about.js";
import NotFound from "../views/notFound.js";
import CrudEventos from "../views/eventos/crudEvento/crudEventos.js";
import Home from "../views/home.js";
import Login from "../views/login.js";
import AccessDenied from "../views/accessDenied.js";
import {
  isAutenticated,
  updateAuthButtons,
  validateGuardedPath,
  getUserRole,
} from "../js/auth.js";
import setupLogin from "../views/loginScript.js";
import setupRegister from "../views/registerScript.js";
import UserRegister from "../views/userRegister.js";
import crudEventos from "../views/eventos/crudEvento/crudEventoScript.js";
import GetEventos from "../views/eventos/verEvento/getEventos.js";
import getEventos from "../views/eventos/verEvento/getEventosScript.js";

// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": { view: Home, guarded: validateGuardedPath("/"), roles: [] },
  "/crudEventos": {view: CrudEventos, guarded: validateGuardedPath("/crudEventos"),
    script: crudEventos,
    roles: ["admin"],
  },
  "/verEventos": {
    view: GetEventos,
    guarded: validateGuardedPath("/verEventos"),
    script: getEventos,
    roles: [],
  },
  "/about": { view: About, guarded: validateGuardedPath("/about"), roles: [] },
  "/login": {
    view: Login,
    guarded: validateGuardedPath("/login"),
    script: setupLogin,
    roles: [],
  },
  "/register": {
    view: UserRegister,
    guarded: validateGuardedPath("/register"),
    script: setupRegister,
    roles: [],
  },
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || { view: NotFound, guarded: false, roles: [] };
  updateAuthButtons();

  //obtener rol de usuario
  const currentUserRole = getUserRole();

  // manejo de rutas protegidas por autenticacion
  if (route.guarded && !isAutenticated()) {
    history.pushState(null, null, "/login");
    return router();
  }

  // manejo de rutas protegidas por rol
  // solo se aplica la logica de rol su la ruta esta marcada como guarded y tiene roles especificos
  if (route.guarded && route.roles && route.roles.length > 0) {
    if (!currentUserRole || !route.roles.includes(currentUserRole)) {
      //si el usuario no tiene rol o su rol no esta en la lista de roles, muestra vista de acceso denegado
      document.getElementById("app").innerHTML = AccessDenied();
      return;
    }
  }

  document.getElementById("app").innerHTML = route.view();

  if (route.script) {
    route.script();
  }
}
