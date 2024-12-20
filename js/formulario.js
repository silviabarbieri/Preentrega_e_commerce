
const textarea = document.getElementById('miTextarea');
 textarea.addEventListener('focus', function() 
 { this.placeholder = ''; }); 
 textarea.addEventListener('blur', function() 
 { this.placeholder = 'Escribe tu consulta aquí...'; });