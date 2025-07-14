export default function CrudEventos() {
  return `
    <section class="crud">
      <article class="container my-5">
        <div class="card shadow rounded">
          <div class="card-header bg-dark text-white">
            <h2 class="h4 m-0 crud-title">Agregar Evento</h2>
          </div>
          <div class="card-body">
            <form class="crud-form">
                <!-- nombre de evento -->
              <div class="mb-3">
                <label for="nombre" class="form-label"
                  >Nombre del evento</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  placeholder="nombre"
                  required
                />
              </div>

                <!-- ubicacion de evento -->
              <div class="mb-3">
                <label for="ubicacion" class="form-label"
                  >Ubicacion del evento</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="ubicacion"
                  placeholder="Ubicacion"
                  required
                />
              </div>

              <!-- aforo total de evento -->
               <div class="mb-3">
                <label for="aforo" class="form-label">Aforo total del evento</label>
                <input
                  type="number"
                  class="form-control"
                  name="aforo"
                  placeholder="ej: 500"
                  required
                />
              </div>

              <!-- fecha de evento -->
               <div class="mb-3">
                <label for="fecha" class="form-label">Fecha del evento</label>
                <input
                  type="date"
                  class="form-control"
                  name="fecha"
                  required
                />
              </div>
              <input type="hidden" name="id" />

              <div class="d-grid">
                <input type="submit" value="Enviar" class="btn btnSubmit btn-success" />
              </div>
            </form>
          </div>
        </div>
      </article>

      <article class="container my-5">
        <div class="card shadow rounded">
          <div class="card-header bg-dark  text-white">
            <h2 class="h4 m-0">Eventos registrados</h2>
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
                    <th>Asistentes</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </article>
    </section>

    <template id="crud-template">
    <tr>
      <td class="id">id</td>
      <td class="name">name</td>
      <td class="ubication">ubicacion</td>
      <td class="capacity">aforo</td>
      <td class="date">fecha-evento</td>
      <td>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-sm btn-success presents">
            ver asistentes
          </button>
        </div>
      </td>
      <td>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-sm btn-warning edit">
            Editar
          </button>
          <button class="btn btn-sm btn-danger delete">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
   </template>

  `;
}
