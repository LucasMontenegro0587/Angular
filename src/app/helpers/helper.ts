import Swal from 'sweetalert2'

// Array de cursos separa en dos grupos
const cursosDisponibles = [
  {
    imagen: "./images/mw-logo.png",
    titulo: "Desarrollo Web",
    descripcion: "Conviértete en un desarrollador web completo aprendiendo HTML, CSS, JavaScript y más. Este curso abarca desde la estructura básica hasta la creación de sitios interactivos y responsivos.",
    cargaHoraria: "80 horas",
    objetivos: "Crear sitios web completos y modernos, optimizados para cualquier dispositivo.",
    niveles: {
      basico: "Introducción a la creación de sitios web usando HTML y CSS.",
      completo: "Creación de sitios web responsivos con interactividad avanzada utilizando JavaScript."
    }
  },
  {
    imagen: "./images/python-logo.png",
    titulo: "Python",
    descripcion: "Domina Python, uno de los lenguajes de programación más versátiles y populares. Este curso te llevará desde los fundamentos hasta el desarrollo de aplicaciones completas con Python.",
    cargaHoraria: "50 horas",
    objetivos: "Escribir código eficiente, manejar datos y desarrollar scripts para aplicaciones.",
    niveles: {
      basico: "Fundamentos de Python, estructuras de datos y control de flujo.",
      completo: "Desarrollo de aplicaciones completas, incluyendo acceso a bases de datos y manejo de archivos."
    }
  },
  {
    imagen: "./images/angular-logo.png",
    titulo: "Angular",
    descripcion: "Aprende a desarrollar aplicaciones web modernas utilizando Angular, un framework de desarrollo de aplicaciones front-end.",
    cargaHoraria: "60 horas",
    objetivos: "Dominar la creación de aplicaciones escalables y mantener un código limpio y estructurado.",
    niveles: {
      basico: "Fundamentos del framework y creación de componentes básicos.",
      completo: "Integración de servicios y manejo avanzado de rutas y estados."
    }
  },
  {
    imagen: "./images/coffeescript-logo.png",
    titulo: "CoffeeScript",
    descripcion: "Descubre CoffeeScript, un lenguaje que compila en JavaScript pero ofrece una sintaxis más limpia y sencilla.",
    cargaHoraria: "40 horas",
    objetivos: "Mejorar el flujo de trabajo y escribir código más conciso y legible.",
    niveles: {
      basico: "Introducción a la sintaxis y características de CoffeeScript.",
      completo: "Aplicar CoffeeScript en proyectos reales y más complejos."
    }
  },
  {
    imagen: "./images/nuxtjs-logo.png",
    titulo: "Nuxt.js",
    descripcion: "Inicia en el desarrollo con Nuxt.js, un framework basado en Vue.js para la creación de aplicaciones web universales y sitios estáticos.",
    cargaHoraria: "25 horas",
    objetivos: "Aprender a desarrollar sitios web con server-side rendering y mejorar la experiencia del usuario.",
    niveles: {
      basico: "Fundamentos del framework Nuxt.js y configuración inicial.",
      completo: "Desarrollo de aplicaciones universales con server-side rendering."
    }
  },
  {
    imagen: "./images/c++-logo.png",
    titulo: "C++",
    descripcion: "Domina uno de los lenguajes más potentes para el desarrollo de software de alto rendimiento. C++ es fundamental para sistemas, videojuegos y aplicaciones de misión crítica.",
    cargaHoraria: "80 horas",
    objetivos: "Crear aplicaciones eficientes y de alto rendimiento.",
    niveles: {
      basico: "Fundamentos de C++, estructuras de control, y manejo de memoria.",
      completo: "Programación avanzada con punteros, herencia y manejo de excepciones."
    }
  },
  {
    imagen: "./images/django-logo.png",
    titulo: "Django",
    descripcion: "Desarrolla aplicaciones web robustas y seguras usando Django, uno de los frameworks más populares de Python. Aprende a crear sitios web rápidamente con funciones avanzadas.",
    cargaHoraria: "70 horas",
    objetivos: "Desarrollar aplicaciones web completas usando Django y Python.",
    niveles: {
      basico: "Fundamentos del framework, creación de vistas y plantillas.",
      completo: "Integración de bases de datos, autenticación y despliegue en servidores."
    }
  },
  {
    imagen: "./images/tailwind-logo.png",
    titulo: "Tailwind CSS",
    descripcion: "Aprende a diseñar interfaces modernas y eficientes usando Tailwind CSS, un framework de CSS basado en utilidades. Ideal para construir rápidamente sitios web bonitos y funcionales.",
    cargaHoraria: "30 horas",
    objetivos: "Crear sitios web estilizados y totalmente personalizables usando clases de utilidad.",
    niveles: {
      basico: "Fundamentos de Tailwind CSS y su estructura de clases.",
      completo: "Personalización avanzada, creación de temas y optimización de rendimiento."
    }
  }
];

const cursosExclusivos = [
  {
    imagen: "./images/kitsunia-logo.png",
    titulo: "Kitsunia",
    descripcion: "Explora Kitsunia, un entorno avanzado para el diseño frontend interactivo, optimizado para crear interfaces inmersivas.",
    cargaHoraria: "50 horas",
    objetivos: "Desarrollar sitios web altamente interactivos, centrados en la experiencia de usuario fluida y envolvente.",
    niveles: {
      basico: "Creación de interfaces sencillas.",
      completo: "Desarrollo de experiencias complejas con animaciones y optimización avanzada."
    }
  },
  {
    imagen: "./images/valquirium-logo.png",
    titulo: "Valquirium",
    descripcion: "Sumérgete en Valquirium, una herramienta innovadora para construir plataformas de front-end avanzadas con una eficiencia sin precedentes.",
    cargaHoraria: "50 horas",
    objetivos: "Dominar la creación de aplicaciones web dinámicas y ágiles con patrones de diseño de última generación.",
    niveles: {
      basico: "Implementación de componentes y diseño responsive.",
      completo: "Optimización de rendimiento y experiencias web interactivas complejas."
    }
  }
];


// Función para iniciar sesión como Administrador o Alumno
function iniciarSesion() {
  // Pide el nombre de usuario y contraseña
  const nombreUsuario = prompt("Por favor, ingresá tu nombre de usuario:");
  const contrasenia = prompt("Por favor, ingresá tu contraseña:");

  // Verificar el rol y las credenciales
  if (nombreUsuario && contrasenia) {
    if (nombreUsuario === "ADM" && contrasenia === "Pentahouse-ADM") {
      usuarioLogueado = { nombre: nombreUsuario, rol: 'admin' };
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido Administrador/a',
        icon: 'success',
        background: '#1e1e1e', // Modo oscuro
        color: '#ffffff', // Texto en modo oscuro
      }).then(() => {
        habilitarDesconexion();
        // Redirigir a la página del administrador
        window.location.href = 'src/app/features/dashboard/dashboard.component.html';
      });
    } else if (nombreUsuario === "ALM" && contrasenia === "Pentahouse-ALM") {
      usuarioLogueado = { nombre: nombreUsuario, rol: 'alumno' };
      Swal.fire({
        title: 'Sesión iniciada',
        text: 'Bienvenido/a Alumno/a',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      }).then(() => {
        habilitarDesconexion();
        // Redirigir a la página del alumno
        window.location.href = 'src/app/app.component.html';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Nombre de usuario o contraseña incorrectos',
        icon: 'error',
        background: '#1e1e1e',
        color: '#ffffff',
      });
    }
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, completá los campos solicitados.',
      icon: 'warning',
      background: '#1e1e1e',
      color: '#ffffff',
    });
  }
}

// Función para habilitar el botón de desconexión
function habilitarDesconexion() {
  const btnDesconectar = document.getElementById('btnDesconectar');
  if (btnDesconectar) {
    btnDesconectar.disabled = false; // Habilitar el botón
  }
}

// Función para cerrar sesión
function finalizarSesion() {
  // Confirmación del cierre de sesión usando SweetAlert en modo oscuro
  Swal.fire({
    title: '¿Querés cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    background: '#1e1e1e',
    color: '#ffffff',
  }).then((result) => {
    if (result.isConfirmed) {
      usuarioLogueado = null; // Limpiar el estado del usuario
      deshabilitarDesconexion();
      Swal.fire({
        title: 'Sesión cerrada con éxito',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
      }).then(() => {
        // Redirigir a la página principal o de inicio de sesión
        window.location.href = 'index.html';
      });
    }
  });
}

// Función para deshabilitar el botón de desconexión
function deshabilitarDesconexion() {
  const btnDesconectar = document.getElementById('btnDesconectar');
  if (btnDesconectar) {
    btnDesconectar.disabled = true; // Deshabilitar el botón
  }
}

// Función para inscribirse a un curso usando SweetAlert en modo oscuro
function inscribirse(curso) {
  // Verificar si el usuario está logueado y si su rol es "alumno"
  if (usuarioLogueado && usuarioLogueado.rol === 'alumno') {
    Swal.fire({
      title: `¿Deseás inscribirte en el curso: ${curso}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, deseo anotarme',
      cancelButtonText: 'No, quiero cancelar',
      background: '#1e1e1e',
      color: '#ffffff',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Excelente!',
          text: `Estás inscripto en el curso: ${curso}`,
          icon: 'success',
          background: '#1e1e1e',
          color: '#ffffff',
        });
      } else {
        Swal.fire({
          title: 'Cancelación completa',
          text: `No te inscribiste en el curso: ${curso}`,
          icon: 'error',
          background: '#1e1e1e',
          color: '#ffffff',
        });
      }
    });
  } else {
    Swal.fire({
      title: 'Acceso Denegado',
      text: 'Iniciá sesión como Alumno/a.',
      icon: 'error',
      background: '#1e1e1e',
      color: '#ffffff',
    });
  }
}
