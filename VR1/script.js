onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("no-cargado");
        clearTimeout(c);
    }, 1000);
};