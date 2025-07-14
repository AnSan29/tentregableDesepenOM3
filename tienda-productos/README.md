
# gestor de eventos - SPA con Login y Control de Acceso

Este proyecto es una **Single Page Application (SPA)** construida con **JavaScript moderno**, **Bootstrap 5** y un backend simulado mediante **JSON Server**. 

> ⚠️ Este proyecto fue creado como plantilla de evaluación práctica del módulo de desarrollo web SPA.

---

## 🚀 Funcionalidades principales

- Login con validación de usuario y contraseña.
- Cifrado y descifrado de contraseñas usando **CryptoJS (AES)**.
- Control de acceso por **roles** (`admin`, `editor`, `viewer`).
- Enrutamiento SPA con `history.pushState`.
- Persistencia de sesión con **localStorage**.
- Renderizado dinámico por rutas (`/`, `/about`, `/apiUi`, `/login`).
- Carga de componentes HTML dinámicos (header/footer).
- Protección de rutas según autenticación y rol.
- Diseño responsivo con **Bootstrap 5**.

---

## 🧩 Estructura del Proyecto

```
maqueta-SPA-M3S4-main/
└── tienda-productos/
    ├── index.html
    ├── assets/
    │   ├── header.html
    │   ├── footer.html
    │   └── include-html.js
    ├── database/
    │   ├── db.json
    │   └── password.txt
    ├── src/
    │   ├── js/
    │   │   ├── auth.js
    │   │   └── main.js
    │   ├── routes/
    │   │   └── router.js
    │   └── views/
    │       ├── about.js
    │       ├── accessDenied.js
    │       ├── apiUi.js
    │       ├── home.js
    │       ├── login.js
    │       ├── loginScript.js
    │       └── notFound.js
    └── package.json
```

---

## ⚙️ Tecnologías usadas

- HTML5
- CSS3
- JavaScript (modular, ES6+)
- Bootstrap 5
- JSON Server (`http://localhost:3000/users`)
- CryptoJS (AES para cifrado de contraseñas)
- Vite (para servir y compilar la app)

---

## 📦 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/AnSan29/maqueta-desempe-o.git
cd tienda-productos
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Levanta el backend simulado

```bash
json-server --watch database/db.json --port 3000
```

### 4. Inicia el proyecto

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173` o el puerto que indique Vite.

---

## 🔐 Usuarios disponibles (en `db.json`)

| Usuario | Contraseña       | Rol     |
|---------|------------------|---------|
| admin   | adminpassword     | admin   |
| editor  | editorpassword    | editor  |
| viewer  | viewerpassword    | viewer  |

⚠️ Las contraseñas están **cifradas** con AES en `db.json`, y son validadas tras ser desencriptadas al momento del login.

## 🔑 Seguridad y Autenticación

- El sistema usa **AES (CryptoJS)** para cifrar y descifrar las contraseñas.
- El token de sesión (`auth_token`) se guarda en `localStorage` y contiene:
  - usuario
  - contraseña cifrada
  - rol
- Los botones de login/logout cambian dinámicamente según estado de autenticación.
- Las rutas se protegen por autenticación y por rol, usando la función `validateGuardedPath`.

---

## 📄 Comandos disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo con Vite
npm run build     # Compila la SPA para producción
npm run preview   # Sirve la app ya compilada
```

---

## 👨‍💻 Autor

**Andrés de Jesús Santoyo**  
coder riwi  🇨🇴 Barranquilla, Colombia

---

## 📜 Licencia

Este proyecto es educativo y no tiene una licencia específica.

---

## 📌 Notas finales

✅ Proyecto funcional, modular y escalable  
🔐 Ejemplo claro de autenticación y control de acceso en SPA  
📁 Ideal como base para proyectos más complejos  