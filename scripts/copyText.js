document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento <a> con el ID 'copyText'
    var copyText = document.getElementById('copyText');
    
    // Agrega un evento de clic al enlace
    copyText.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();

        // Texto que quieres copiar al portapapeles
        var textToCopy = "marcgp04@gmail.com";

        // Crea un elemento de textarea temporal
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        // Selecciona y copia el texto en el textarea
        textarea.select();
        document.execCommand('copy');

        // Remueve el textarea temporal
        document.body.removeChild(textarea);

         // Personaliza el estilo de la alerta
         var alertDiv = document.createElement('div');
         alertDiv.classList.add('custom-alert');
         alertDiv.textContent = 'Correo copiado al portapapeles: ' + textToCopy;
         document.body.appendChild(alertDiv);
 
         // Elimina la alerta después de unos segundos
         setTimeout(function() {
             document.body.removeChild(alertDiv);
         }, 3000); // 3000 milisegundos (3 segundos)
    });
});
