function mostrarPantalla(id) {
  // Ocultar todas las secciones
  document.querySelectorAll('main > section').forEach(sec => {
    sec.classList.add('hidden');
  });
  // Mostrar la pantalla pedida
  document.getElementById(id).classList.remove('hidden');
}

function login() {
  // Simulación simple: si usuario y contraseña no están vacíos, ingresar
  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();

  if (usuario && password) {
    // Mostrar menú y dashboard
    document.getElementById('menu').classList.remove('hidden');
    mostrarPantalla('dashboard');
  } else {
    alert('Ingrese usuario y contraseña');
  }
}

function logout() {
  // Ocultar menú y volver a login
  document.getElementById('menu').classList.add('hidden');
  mostrarPantalla('login');
  // Limpiar campos
  document.getElementById('usuario').value = '';
  document.getElementById('password').value = '';
}

function mostrarNuevoTurno() {
  document.getElementById('nuevo-turno-form').classList.remove('hidden');
}
function ocultarNuevoTurno() {
  document.getElementById('nuevo-turno-form').classList.add('hidden');
}
function agregarTurno() {
  const fecha = document.getElementById('fecha-turno').value;
  const hora = document.getElementById('hora-turno').value;
  const motivo = document.getElementById('motivo-turno').value.trim();
  if (!fecha || !hora || !motivo) {
    alert('Complete todos los campos del turno');
    return;
  }
  const lista = document.getElementById('lista-turnos');
  const div = document.createElement('div');
  div.className = 'turno-item';
  div.textContent = `${fecha} ${hora} - ${motivo}`;
  lista.appendChild(div);
  // Limpiar y ocultar formulario
  document.getElementById('fecha-turno').value = '';
  document.getElementById('hora-turno').value = '';
  document.getElementById('motivo-turno').value = '';
  ocultarNuevoTurno();
}

function guardarMascota() {
  const nombre = document.getElementById('nombre-mascota').value.trim();
  const tipo = document.getElementById('tipo-mascota').value;
  const raza = document.getElementById('raza-mascota').value.trim();
  const edad = document.getElementById('edad-mascota').value;
  const dueno = document.getElementById('dueno-mascota').value.trim();

  if (!nombre || !tipo || !raza || !edad || !dueno) {
    alert('Complete todos los campos de la mascota');
    return;
  }
  alert(`Mascota "${nombre}" registrada correctamente!`);
  // Limpia campos
  document.getElementById('nombre-mascota').value = '';
  document.getElementById('tipo-mascota').value = '';
  document.getElementById('raza-mascota').value = '';
  document.getElementById('edad-mascota').value = '';
  document.getElementById('dueno-mascota').value = '';
}
