const entrada = document.getElementById('caja');
const boton = document.getElementById('guardar');
const muestra = document.getElementById('resultado');


boton.addEventListener('click', function () {
   const texto = entrada.value;

   if (texto !== '') {

      const nuevotxt = document.createElement('p');

      const check = document.createElement('input');
      check.type = 'checkbox'

      const span = document.createElement('span');
      span.textContent = " " + texto;

      const btneliminar = document.createElement('button');
      btneliminar.textContent = "Eliminar";
      btneliminar.style.marginLeft = "10px";
      btneliminar.addEventListener('click',function(){
         nuevotxt.remove();
         if(muestra.children.length === 0){
            muestra.classList.add('listareas');
            muestra.textContent = "No hay tareas asignadas aun";
         }
      })

      nuevotxt.appendChild(check);
      nuevotxt.appendChild(span);
      nuevotxt.appendChild(btneliminar);

      check.addEventListener('change', function () {
         if (this.checked) {
            span.innerHTML = `<del>${texto}</del>`;
         } else {
            span.textContent = " " + texto;
         }
      });

      if (muestra.classList.contains('listareas')) {
         muestra.classList.remove('listareas');
         muestra.textContent = '';
      }

      muestra.appendChild(nuevotxt);
      entrada.value = '';

   } else {
      window.alert('Por favor ingrese una tarea antes de guardar');
   }
});
