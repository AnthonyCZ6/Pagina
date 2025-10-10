document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('califForm');

    form.addEventListener('submit', function(event) {
        
        const calif1 = parseFloat(document.getElementById('calif1').value);
        const calif2 = parseFloat(document.getElementById('calif2').value);
        const calif3 = parseFloat(document.getElementById('calif3').value);

        if (calif1 < 0 || calif2 < 0 || calif3 < 0) {
            
            alert('Error: Las calificaciones no pueden ser números negativos. Por favor, corrígelas.');
            
            event.preventDefault();
        }
    });
});