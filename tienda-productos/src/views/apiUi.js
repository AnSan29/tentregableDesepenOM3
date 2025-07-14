export default function ApiUi() {
  // Retornamos un fragmento de HTML como string.
  // Este contenido se mostrará dinámicamente en el div con id="app".
  return `
  <!-- contenedor crud eventos -->

        <section class="crud">
      <article class="container my-5">
        <div class="card shadow rounded">
          <div class="card-header bg-dark text-white">
            <h2 class="h4 m-0 crud-title">Agregar Producto</h2>
          </div>
          <div class="card-body">
            <form class="crud-form">
              <div class="mb-3">
                <label for="nombre" class="form-label"
                  >Nombre del producto</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  placeholder="nombre"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="precio" class="form-label">Precio</label>
                <input
                  type="number"
                  class="form-control"
                  name="precio"
                  placeholder="precio"
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
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      <Activo/article>
    </section>

    <template id="crud-template">
    <tr>
      <td class="id">id</td>
      <td class="name">name</td>
      <td class="price">price</td>
      <td class="stock">stock</td>
      <td class="status">status</td>
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