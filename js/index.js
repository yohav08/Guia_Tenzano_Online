
/** 
 * * Función para detectar cambios entre los modos claro y oscuro para cambiar el ícono de la pestaña
 * ! Esta función siempre está activa al haber cambios en el tema (oscuro <-> claro)
**/
  function detectarCambioModoColor(event) {
    if (event.matches) { // Modo oscuro
        icon.href="./img/icon/icon-dark.png";
    } else { // Modo claro
        icon.href="./img/icon/icon-light.png";
    }
  }
  // *Crea un objeto MediaQueryList que representa la media query prefers-color-scheme
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // *Añade un listener
  mediaQuery.addListener(detectarCambioModoColor);
  // *Llama a la función una vez para comprobar el modo actual
  detectarCambioModoColor(mediaQuery);


/** 
 * * Esta función se encarga de abrir la barra de navegación
 * ! Correjir el glitch a la hora de ejecutar lo responsive (991px a 992px)
 * TODO: Intentar pasar 100% CSS
**/
  // Declaramos la funcion para abrir la barra de navegación en Móviles (-992px)
  function OpenClose() {
    const nav = document.getElementById("nav");
    const abrir = document.getElementById("abrir-cerrar");

    // si el Toggle se selecciona la barra es visible y si no la barra NO es visible
    if (abrir.classList.toggle("checked") == true) {
      console.log("barra responsive");
      
      nav.style.visibility = "visible";
      nav.style.opacity = "1";
    } else  {
      console.log("NO responsive");
      nav.style.visibility = "hidden";
      nav.style.opacity = "0";  
      
    }

  }



/** 
 * * Esta función se encarga de volver Arriba
 * ! Cuando el usuario baje 20px desde arriba del documento, se muestra el botón
**/

  // *Extraemos el botón
  let mybutton = document.getElementById("back-to-top");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() { // * PAra Safari || Chrome, Firefox, IE & Opera  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

    // *Se cambia la URL actual sin el "#" al final. Ocultandolo después de hacer clic en el botón.
    history.replaceState(null, document.title, window.location.pathname);
  }
