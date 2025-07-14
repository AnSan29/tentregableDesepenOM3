export default function verEventos(){
     /**
   * - Obtenemos nuestros elementos del dom y los almacenamos en variables
   *   inicializadas en $ para su facil identificacion.
   * - Guardo en una variable d el document.
   */
  const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

  /**
   * - Declaro mi funcion tipo GET para obtener todos mis productos
   *   implementando fetch + async - await.
   */
  const getAllProducts = async () => {
    try {
      let res = await fetch("http://localhost:3000/eventos");
      let json = await res.json();

      // valido si la respuesta no es ok, de ser asi lanzo el error al catch como un objeto con dos variables
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      // re-ordeno mi json para mostrar primero el ultimo elemento añadido
      let jsonInvertido = json.slice().reverse();

      jsonInvertido.forEach((el) => {
        //pintamos valores del elemento en nuestra plantilla
        $template.querySelector(".id").textContent = el.id;
        $template.querySelector(".name").textContent = el.name;
        $template.querySelector(".ubication").textContent = el.ubication;
        $template.querySelector(".capacity").textContent = el.capacity;
        $template.querySelector(".date").textContent = el.date;

        // Clonamos nuestra plantilla
        let $templateCLone = d.importNode($template, true);
        // y se lo pasamos al fragmento del DOM para que nos permita hacer solo una incercion al DOM real.
        $fragment.appendChild($templateCLone);
      });

      // incertamos el fragmento del DOM en el real DOM
      $table.querySelector("tbody").appendChild($fragment);

      //  capturo el error con catch
    } catch (err) {
      console.log(err);

      // declaro variable para almacenar mensaje de error con operador de corto circuito
      let message = err.statusText || "Ocurrio un error";

      // pinto el error
      $table.insertAdjacentHTML(
        "afterend",
        `<p> <b>Error ${err.status}: ${message}</b> </p>`
      );
    }
  };
  // ejecuto mi funcion getAllProducts()
  getAllProducts();
  // escuchamos el evento submit del dom para metodos PUT y POST
  d.addEventListener("submit", async (e) => {
    // validar si  quien ocasiona el evento es el elemento form
    if (e.target === $form) {
      e.preventDefault();

      // validar si el elemento input id no contiene valor
      if (!e.target.id.value) {
        // si no contiene, entonces es una peticion POST - CREATE
        try {
          let options = {
            method: "POST",
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              name: e.target.nombre.value,
              ubication: e.target.ubicacion.value,
              capacity: e.target.aforo.value,
              date: e.target.fecha.value,
            }),
          };
          // guardo la respuesta de mi fetch en variable res, volviendolo ascincrono
          let res = await fetch("http://localhost:3000/eventos", options);
          // convierto la respuesta a json
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          alert("evento creado!")
          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrio un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p> <b>Error ${err.status}: ${message}</b> </p>`
          );
        }
      } else {
        // si contiene valor, entonces es una peticion PUT - UPDATE
        try {
          let options = {
            method: "PUT",
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({
              name: e.target.nombre.value,
              ubication: e.target.ubicacion.value,
              capacity: e.target.aforo.value,
              date: e.target.fecha.value,
            }),
          };
          // guardo la respuesta de mi fetch en variable res, volviendolo ascincrono
          let res = await fetch(
            `http://localhost:3000/eventos/${e.target.id.value}`,
            options
          );
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
          alert("evento actualizado!")
          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrio un error";
          $form.insertAdjacentHTML(
            "afterend",
            `<p> <b>Error ${err.status}: ${message}</b> </p>`
          );
        }
      }
    }
  });

  // escuchamos el evento click del dom para metodos PUT y DELETE
  d.addEventListener("click", async (e) => {
    // btn edit
    if (e.target.matches(".edit")) {
      $title.textContent = "Editar Evento";
      $form.nombre.value = e.target.dataset.name;
      $form.ubicacion.value = e.target.dataset.ubication;
      $form.aforo.value = e.target.dataset.capacity;
      $form.fecha.value = e.target.dataset.date;
      $form.id.value = e.target.dataset.id;
    }
    // btn delete
    if (e.target.matches(".delete")) {
      let isDelete = confirm(
        `Estas seguro de eliminar el producto: ${e.target.dataset.name} ?`
      );

      if (isDelete) {
        //Delete -- DELETE
        try {
          let options = {
            method: "DELETE"
          };
          // guardo la respuesta de mi fetch en variable res, volviendolo ascincrono
          let res = await fetch(
            `http://localhost:3000/eventos/${e.target.dataset.id}`,
            options
          );
          // convierto la respuesta a json
          let json = await res.json();
          alert("Eliminado")

          if (!res.ok) throw { status: res.status, statusText: res.statusText };

          location.reload();
        } catch (err) {
          let message = err.statusText || "Ocurrio un error";
          alert(`Error: ${err.status}: ${message}  `);
        }
      }
    }
  });
}