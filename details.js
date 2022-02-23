const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const container = document.querySelector(".container");
const url = "https://fakestoreapi.com/products/";

async function displaySingleProduct() {
    try {
    const response = await fetch(url+id);
    const result = await response.json();
    console.log(result);
    container.innerHTML = `<div class="item" id ="${result.id}"><h2>${result.title}</h2><img src ="${result.image}" id="product-img"> <p> ${result.description} </p> <h2> ${result.category}</h2><p>price: ${result.price}</p></div></a>`;
}catch {

}
    }
  
displaySingleProduct();
