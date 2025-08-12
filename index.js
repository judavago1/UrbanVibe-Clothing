function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Cambiar de secciones
function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Modal de producto
const modal = document.getElementById("modal-producto");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalPrecio = document.getElementById("modal-precio");
const modalDescripcion = document.getElementById("modal-descripcion");

// Capturamos todos los botones "Ver más"
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", function() {
        const card = this.parentElement;
        const img = card.querySelector("img").src;
        const titulo = card.querySelector("h3").innerText;
        const precio = card.querySelector("p").innerText;

        // Aquí puedes agregar descripciones reales
        let descripcion = "Este es un producto increíble con excelente calidad y precio.";

        // Llenamos el modal
        modalImg.src = img;
        modalTitulo.innerText = titulo;
        modalPrecio.innerText = precio;
        modalDescripcion.innerText = descripcion;

        // Mostramos el modal
        modal.style.display = "flex";
    });
});

// Cerrar modal
function cerrarModal() {
    modal.style.display = "none";
}

// Cerrar al hacer click fuera del contenido
window.addEventListener("click", function(e) {
    if (e.target === modal) {
        cerrarModal();
    }
});

//CONEXION API
// URL de la API (solo categoría ropa para hombre y mujer)
const apiURL = "https://fakestoreapi.com/products";

// Contenedor donde van las tarjetas
const productGrid = document.querySelector(".product-grid");

// Cargar productos desde la API
fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        productGrid.innerHTML = ""; // Limpiar contenido actual
        data.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button>Ver más</button>
            `;
            
            // Click en la tarjeta para abrir modal
            card.querySelector("button").addEventListener("click", () => {
                document.getElementById("modal-img").src = product.image;
                document.getElementById("modal-titulo").textContent = product.title;
                document.getElementById("modal-precio").textContent = `$${product.price.toFixed(2)}`;
                document.getElementById("modal-descripcion").textContent = product.description;
                document.getElementById("modal-producto").style.display = "block";
            });

            productGrid.appendChild(card);
        });
    })
    .catch(err => console.error("Error cargando productos:", err));

// Cerrar modal
function cerrarModal() {
    document.getElementById("modal-producto").style.display = "none";
}

card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" loading="lazy">
    <h3>${product.title}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button>Ver más</button>
`;
