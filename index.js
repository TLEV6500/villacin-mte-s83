const container = document.getElementById("product-container");

async function loadProducts() {
    try {
        let response = await fetch("coffeeData.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const bestSellers = await response.json();
        let cardsHTML = "";

        bestSellers.data.forEach((product) => {
            cardsHTML += `
                <div class="col-12 col-md-6 col-xl-3">
                    <div id="${product.id}" class="card brutalist-glass h-100">
                        <div class="card-img-placeholder">
                            <i class="fa-solid ${product.icon}"></i>
                        </div>
                        <div class="card-body d-flex flex-column gap-3 p-4">
                            <div>
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h5 class="card-title fw-bold m-0">${product.title}</h5>
                                    <span class="badge bg-dark rounded-0 fs-6">${product.price}</span>
                                </div>
                                <p class="card-text">${product.description}</p>
                            </div>
                            <a href="#" class="btn btn-primary mt-auto w-100 py-2">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = cardsHTML;
    } catch (error) {
        console.error("Could not load coffee data:", error);
    }
}

loadProducts();
