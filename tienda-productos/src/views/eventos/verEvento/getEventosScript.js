export default function getEventos() {
  /**
   * - Obtenemos nuestros elementos del dom y los almacenamos en variables
   *   inicializadas en $ para su facil identificacion.
   * - Guardo en una variable d el document.
   */
  const d = document,
    $table = d.querySelector(".crud-table"),
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
      console.log("JSON recibido:", json);
      // pinto el error
      $table.insertAdjacentHTML(
        "afterend",
        `<p> <b>Error ${err.status}: ${message}</b> </p>`
      );
    }
  };
  // ejecuto mi funcion getAllProducts()
  getAllProducts();
}
