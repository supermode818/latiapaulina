
/* =====================================
   FLORIMOOD - CATÁLOGO DE 24 PRODUCTOS
===================================== */

// PRODUCTOS

const products = [
    { id: 1, name: "Desayuno Feliz Contigo", price: 66, category: "ramos", color: "rojo", occasion: "amor", image: "img/productos/producto-01.png" },
    { id: 2, name: "Desayuno Nuestro Para Siempre", price: 69, category: "ramos", color: "amarillo", occasion: "cumpleaños", image: "img/productos/producto-02.png" },
    { id: 3, name: "Desayuno Eres Mi Alegría", price: 76, category: "ramos", color: "rosado", occasion: "amor", image: "img/productos/producto-03.png" },
    { id: 4, name: "Desayuno Mi Hincha Favorito", price: 71, category: "ramos", color: "rosado", occasion: "cumpleaños", image: "img/productos/producto-04.png" },

    { id: 5, name: "Desayuno Crema de Corazón", price: 84, category: "arreglos", color: "rosado", occasion: "amistad", image: "img/productos/producto-05.png" },
    { id: 6, name: "Desayuno Momentos Felices", price: 100, category: "cajas", color: "rojo", occasion: "amor", image: "img/productos/producto-06.png" },
    { id: 7, name: "Desayuno Fiesta de Sabores", price: 115, category: "regalos", color: "rojo", occasion: "aniversario", image: "img/productos/producto-07.png" },
    { id: 8, name: "Desayuno Dulce Elegancia", price: 139, category: "arreglos", color: "rosado", occasion: "amistad", image: "img/productos/producto-08.png" },

    { id: 9, name: "Desayuno Brillo de Campeón", price: 169, category: "arreglos", color: "amarillo", occasion: "cumpleaños", image: "img/productos/producto-09.png" },
    { id: 10, name: "Desayuno Golden Celebration", price: 156, category: "cajas", color: "rojo", occasion: "amor", image: "img/productos/producto-10.png" },
    { id: 11, name: "Desayuno Héroe de Mi Corazón", price: 183, category: "ramos", color: "blanco", occasion: "aniversario", image: "img/productos/producto-11.png" },
    { id: 12, name: "Desayuno Aniversario Perfecto", price: 169, category: "cajas", color: "rosado", occasion: "cumpleaños", image: "img/productos/producto-12.png" },

    { id: 13, name: "Desayuno Amor Bonito", price: 150, category: "ramos", color: "blanco", occasion: "aniversario", image: "img/productos/producto-13.png" },
    { id: 14, name: "Desayuno Campeón Celeste", price: 169, category: "ramos", color: "amarillo", occasion: "amistad", image: "img/productos/producto-14.png" },
    { id: 15, name: "Desayuno Royal Love", price: 169, category: "cajas", color: "rojo", occasion: "amor", image: "img/productos/producto-15.png" },
    { id: 16, name: "Pasión Blanquiazul Box", price: 183, category: "arreglos", color: "rosado", occasion: "cumpleaños", image: "img/productos/producto-16.png" },

    { id: 17, name: "Celebración Premium", price: 182, category: "ramos", color: "blanco", occasion: "aniversario", image: "img/productos/producto-17.png" },
    { id: 18, name: "Desayuno Dulce Encanto", price: 180, category: "cajas", color: "rosado", occasion: "amor", image: "img/productos/producto-18.png" },
    { id: 19, name: "Desayuno Crema de Corazón", price: 195, category: "arreglos", color: "amarillo", occasion: "amistad", image: "img/productos/producto-19.png" },
    { id: 20, name: "Desayuno Dulce Fantasía", price: 170, category: "regalos", color: "rojo", occasion: "cumpleaños", image: "img/productos/producto-20.png" },

    { id: 21, name: "Desayuno Eterno Romance", price: 185, category: "ramos", color: "rojo", occasion: "amor", image: "img/productos/producto-21.png" },
    { id: 22, name: "Desayuno Blue Birthday", price: 185, category: "arreglos", color: "blanco", occasion: "aniversario", image: "img/productos/producto-22.png" },
    { id: 23, name: "Desayuno Princesa de Amor", price: 180, category: "regalos", color: "rosado", occasion: "amistad", image: "img/productos/producto-23.png" },
    { id: 24, name: "Desayuno Pink Luxury", price: 249, category: "arreglos", color: "rosado", occasion: "amor", image: "img/productos/producto-24.png" }
];

// ELEMENTOS HTML

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const colorFilter = document.getElementById("colorFilter");
const occasionFilter = document.getElementById("occasionFilter");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const sortFilter = document.getElementById("sortFilter");
const cartCount = document.getElementById("cartCount");
const emptyMessage = document.getElementById("emptyMessage");

// MOSTRAR PRODUCTOS

function renderProducts(list) {

    productsGrid.innerHTML = "";
    emptyMessage.hidden = list.length !== 0;

    list.forEach(product => {

        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image-wrap"
                 data-slot="IMAGEN ${String(product.id).padStart(2, "0")}">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-price">
                    S/ ${product.price.toFixed(2)}
                </p>

                <div class="product-details">
                    <span class="rating">★ 4.9</span>
                    <span class="availability">● Disponible</span>
                </div>

                <button
                    class="add-button"
                    data-id="${product.id}"
                >
                    PEDIR PRODUCTO
                </button>

            </div>
        `;

        const img = card.querySelector(".product-image");

        img.addEventListener("error", () => {
            img.style.display = "none";
            img.parentElement.classList.add("image-placeholder");
        });

        productsGrid.appendChild(card);
    });
}

// BUSCADOR Y FILTROS

function filterProducts() {

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const color = colorFilter.value;
    const occasion = occasionFilter.value;
    const maxPrice = Number(priceFilter.value);

    let filtered = products.filter(product => {

        return (
            product.name.toLowerCase().includes(search) &&
            (category === "all" || product.category === category) &&
            (color === "all" || product.color === color) &&
            (occasion === "all" || product.occasion === occasion) &&
            product.price <= maxPrice
        );
    });

    const sort = sortFilter.value;

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProducts(filtered);
}

// EVENTOS DE FILTROS

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);
occasionFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

priceFilter.addEventListener("input", () => {
    priceValue.textContent = `S/ ${priceFilter.value}`;
    filterProducts();
});

// =====================================
// PEDIDOS DIRECTOS POR WHATSAPP
// =====================================

const whatsappNumber = "51937392556";

productsGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-button");

    if (!button) return;

    const productId = Number(button.dataset.id);

    const product = products.find(p => p.id === productId);

    if (!product) return;

    const message = `¡Hola, Tia Paulina! 

Estoy interesado/a en realizar un pedido:

 Producto: ${product.name}
💰 Precio: S/ ${product.price.toFixed(2)}

¿Podrían confirmarme la disponibilidad y brindarme información sobre la entrega?

¡Muchas gracias!`;

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

});

// INICIAR CATÁLOGO

renderProducts(products);

