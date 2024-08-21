//<<<<<<<<< Target Externo>>>>>>>>>>>//
//funcion Añadir Target 

(function (etiquetaEnlaces) {
  if (!etiquetaEnlaces.length) return false;
  var regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:\.)?([^\/\n]+)/;
  const regex2 = /^(https?:\/\/)(www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/)$/;
  const regex3 = /^(?:https?:\/\/)?(?:www\.)?([^\/\n]+)/;
  var archivos = ['.jpg', '.png','.jpeg' ,'.pdf','.docx','.doc','.dot','.odt','.pptx'];
  var host = location.origin;
  function anadirTarget(enlace) {
      enlace.setAttribute('target', '_blank');
  }
  function removerTarget(enlace) {
      enlace.removeAttribute('target');
  }

  for (var i = 0; i < etiquetaEnlaces.length; i++) {
      var enlace = etiquetaEnlaces[i],
      href = enlace.href,
      dominio = href.match(regex3);

      // si el enlace es igual al host entra 
    if (dominio && dominio[0]  === host) {
          var esArchivo = archivos.some(function (archivo) {
              return href.endsWith(archivo);
          });
          if (esArchivo) {
              anadirTarget(enlace);
          }else{
              removerTarget(enlace);  
          }
        // añade target si no coincide con el host
      } else {
          anadirTarget(enlace);
      }
  }
}) (document.querySelectorAll("a"));