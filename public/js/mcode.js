const modalInsumoEditar = new bootstrap.Modal(document.getElementById('modalInsumoEditar'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
        handler(e);
    }
    });
};

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.closest('tr'); // Encuentra la fila del insumo
    document.getElementById('id_editar').value = fila.children[0].innerHTML; // ID
    document.getElementById('nombre_editar').value = fila.children[1].innerHTML; // Nombre
    document.getElementById('idproveedor_editar').value = fila.children[2].innerHTML; // Proveedor
    document.getElementById('precio_editar').value = fila.children[3].innerHTML; // Precio
    document.getElementById('stock_editar').value = fila.children[4].innerHTML; // Stock

    modalInsumoEditar.show(); // Mostrar el modal
});