const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".container");
const url = "https://fakestoreapi.com/products/";

async function displaySingleProduct() {
    try {
    const response = await fetch(url+id);
    const result = await response.json();
    container.innerHTML = `<div class="itemDetails" id ="${result.id}"><div><img src ="${result.image}" id="product-imgDetails"></div><div class="flex-items"><h2>${result.title}</h2> <p> ${result.description} </p> <h2> ${result.category}</h2><p>${result.price}$
    <p>rating: ${result.rating.rate} out of ${result.rating.count} ratings</div></div></a>`;
}catch(e) {
    container.innerHTML = `There was an error while calling the API with the following error message: ${e}`;

}
    }
  
displaySingleProduct();
