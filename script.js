const API_URL = "https://api.escuelajs.co/api/v1";
const PRODUCTS_CONTAINER = document.querySelector("#products");

async function getProduct(){
    const response = await fetch(`${API_URL}/products?offset=0&limit=10`);
    const products = await response.json();

    products.map((product) =>{
        createProduct(product.images[0], product.title, product.price);
    })

    console.log(products);
}

getProduct();

function createProduct (imageSrc, title, price){
    
    const newElement = document.createElement("article");
    newElement.classList.add("product")
    
    const elementImage = document.createElement("img");
    elementImage.src = imageSrc;

    const elementTitle = document.createElement("h3");
    elementTitle.textContent = title;

    const elementPrice = document.createElement("p");
    elementPrice.textContent = `$${price}`;

    newElement.append(elementImage, elementTitle, elementPrice);

    PRODUCTS_CONTAINER.append(newElement);
}