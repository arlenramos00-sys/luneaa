//=====================================
// CARRITO DE COMPRAS
//=====================================

let carrito = [];
let total = 0;

// Agregar producto
function agregar(nombre, precio) {
  carrito.push({
    nombre: nombre,
    precio: precio
  });

  total += precio;

  actualizar();
}

// Actualizar carrito
function actualizar() {
  let lista = document.getElementById("listaProductos");

  lista.innerHTML = "";

  carrito.forEach(function (producto) {
    lista.innerHTML += `
<p>
🛍️ ${producto.nombre}
-
$${producto.precio} MXN
</p>
`;
  });

  document.getElementById("contador").innerHTML = carrito.length;

  document.getElementById("total").innerHTML = "Total: $" + total + " MXN";
}

//=====================================
// BOTÓN DEL CARRITO
//=====================================

document.getElementById("carrito").onclick = function () {
  let carritoDiv = document.getElementById("ventanaCarrito");

  if (carritoDiv.style.display == "block") {
    carritoDiv.style.display = "none";
  } else {
    carritoDiv.style.display = "block";
  }
};

//=====================================
// OCULTAR CARRITO AL INICIAR
//=====================================

document.getElementById("ventanaCarrito").style.display = "none";

//=====================================
// BOTÓN FINALIZAR COMPRA
//=====================================

document.querySelector("#ventanaCarrito button").onclick = function () {
  if (carrito.length == 0) {
    alert("Tu carrito está vacío.");

    return;
  }

  alert("¡Gracias por comprar en LUNEAR! 💜");

  carrito = [];

  total = 0;

  actualizar();

  document.getElementById("ventanaCarrito").style.display = "none";
};

//=====================================
// BOTÓN VER PRODUCTOS
//=====================================

document.querySelector(".texto button").onclick = function () {
  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
};
