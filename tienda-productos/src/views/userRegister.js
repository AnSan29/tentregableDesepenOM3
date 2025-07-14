// vista de registro de usuario
export default function UserRegister() {
    return `
      <div class="container mt-5">
        <form id="crud-form">
          <h2>Registar usuario</h2>
          <input type="text" id="username" class="form-control mb-2" placeholder="Usuario" required/>
          <input type="text" id="name" class="form-control mb-2" placeholder="Nombre usuario" required/>
          <input type="number" id="phoneNumber" class="form-control mb-2" placeholder="Ingresa tu numero de telefono" required/>
          <select id="userRol" class="form-select" aria-label="Default select example" required>
            <option selected>Selecciona un rol:</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
          <input type="password" id="password" class="form-control mb-2" placeholder="Crea una contraseña" required/>
          <button id="registerBtn" class="btn btn-success">Registrarme</button>
          <a class="btn bg-primary" href="/login" data-link>volver</a>
        </form>
      </div>
    `;
  }