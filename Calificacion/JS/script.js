window.onload = function() {

    const params = new URLSearchParams(window.location.search);

    const nombre = params.get('nombre');
    const calif1 = parseFloat(params.get('calif1'));
    const calif2 = parseFloat(params.get('calif2'));
    const calif3 = parseFloat(params.get('calif3'));

    const apellidoPaterno = params.get('apellidoPaterno');
    const apellidoMaterno = params.get('apellidoMaterno');
    const studentId = params.get('studentId');

    const promedio = (calif1 + calif2 + calif3) / 3;

    const resultadoDiv = document.getElementById('resultado');
    const califMinima = 7.0;
    
    let mensaje = '';
    let estado = '';

    if (promedio >= califMinima) {
        estado = `<span class="aprobado">aprobado</span>`;
    } else {
        estado = `<span class="reprobado">reprobado</span>`;
    }

    mensaje = `
        <div class="info-estudiante">
            <p><strong>Estudiante:</strong> ${nombre} ${apellidoPaterno} ${apellidoMaterno}</p>
            <p><strong>ID:</strong> ${studentId}</p>
        </div>
        <hr>
        <p>El estudiante ha ${estado} con un promedio final de <strong>${promedio.toFixed(2)}</strong>.</p>
    `;

    resultadoDiv.innerHTML = mensaje;
};