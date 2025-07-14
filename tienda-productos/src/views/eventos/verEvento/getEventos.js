export default function GetEventos(){
    return `
    <article class="container my-5">
        <div class="card shadow rounded">
          <div class="card-header bg-dark  text-white">
            <h2 class="h4 m-0">Ver Productos</h2>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered table-hover text-center align-middle crud-table"
              >
                <thead class="table-primary">
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Ubicacion</th>
                    <th>Aforo</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

    <template id="crud-template">
        <tr>
          <td class="id">id</td>
          <td class="name">name</td>
          <td class="ubication">ubicacion</td>
          <td class="capacity">aforo</td>
          <td class="date">fecha-evento</td>
          <td>
            <div class="d-flex justify-content-center gap-2">
              <button id="btnPresent" class="btn btn-sm btn-success">
                deseo asistir
              </button>
            </div>
          </td>
        </tr>
   </template>
    
    `;

}