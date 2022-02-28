
const url = "https://fakestoreapi.com/products/";
const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const loading = document.querySelector(".loading");
buttons[1].addEventListener("click", function() {
    displayProducts();
});
async function displayProducts() {
    try {
        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        let filterBy = params.get("filterBy");
        const response = await fetch(url);
        const result = await response.json();

        if (filterBy === "Men") {
            buttons[0].classList.add('toggle');
            filterBy = "men's clothing";
        }
        if (filterBy === "Woman") {
            buttons[1].classList.add('toggle');
            filterBy = "women's clothing";
        }
        //if a filter is activated, run this
        if (filterBy != null) {
            let count = 0;
            for (let i = 0; i < result.length; i++) {
                if (result[i].category === filterBy) {
                    count++;
                    let title = result[i].title;
                    if (title.length > 27) {
                        title = makeDots(title);
                    }
                    const id = result[i].id;
                    const price = result[i].price;
                    const img = result[i].image;
                    if(count > 4) {
                        break;
                    }
                    createHTML(title, id, price, img);
      
                }
            }
        } else {
            //this will run if there is no filter pressed
            for (let i = 0; i < result.length; i++) {
                if (i === 4) {
                    break;
                }

                let title = result[i].title;
                if (title.length > 27) {
                    title = makeDots(title);
                }

                const id = result[i].id;
                const price = result[i].price;
                const img = result[i].image;
                createHTML(title, id, price, img);
            }
        }
    } catch (e) {
        container.innerHTML = `There was an error while calling the API with the following error message: ${e}`;
    }
}
displayProducts();

function createHTML(title, id, price, img) {
    loading.innerHTML = "";
    container.innerHTML += `<a href="details.html?id=${id}"><div class="item" id ="${id}"><h2>${title}</h2><img src ="${img}" id="product-img"><p>price: ${price}$</p></div></a>`;
}

function makeDots(title) {
    let string = "";
    for (let i = 0; i <= 22; i++) {
        string += title[i];
        if (i === 22) {
            string = string + "...";
        }
    }
    return string;
}






//decided to not add my search function
// const search = document.querySelector(".fa-solid");
// const searchContainer = document.querySelector(".searchContainer");
// search.addEventListener("click", handleSearch);


// const searchfield = document.querySelector("#search");

// searchfield.addEventListener("keyup", handleSearch);
// async function handleSearch() {
//     console.log(this.value);
//     try {
//         const response = await fetch(url);
//         const result = await response.json();
//         searchContainer.innerHTML = this.value;
//         for(let i = 0; i < result.length; i++) {
//         if(result[i].title === this.value) {
//             searchContainer.innerHTML = `${result[i].price}`;
//         }
            
        
//     } } catch (e) {
//         console.log(e);
    
 
//     }
// }

// Navigation scroll opacity
const header = document.querySelector(".header");
const logo = document.querySelector(".header-container");
const navigation = document.querySelector(".header-navigation");
const arrowUp = document.querySelector(".fa-arrow-up");
// arrowup icon when pressed will take you to the top of the page
arrowUp.onclick = function() {
    window.scrollTo(0, 0);
}
document.addEventListener('scroll', handleScroll);

function handleScroll() {

    if(window.scrollY > 90) {
        header.style.background = "rgb(129,157,189, 0)";
        navigation.style.display = "none";
        arrowUp.style.opacity = "1";
    }
        else {
          header.style.background = "rgb(129,157,189, 1)";
          navigation.style.display = "block";
          arrowUp.style.opacity = "0";
          
        }
      
        }

    
