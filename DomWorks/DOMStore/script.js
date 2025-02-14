// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayProducts(data))

fetchAllProductsApi()
async function fetchAllProductsApi(){
  let response= await fetch("https://fakestoreapi.com/products")
  let data= await response.json()
  displayProducts(data)
}
    
function displayProducts(products){


    let htmlData=""

    for(let p of products){

        htmlData+=`
        <div class="group">
                    <div class="bg-gray-100 rounded-lg overflow-hidden">
                        <img src="${p.image}" alt="Product 1" class="w-full h-48 object-cover group-hover:opacity-75">
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">${p.title}</h3>
                        <p class="text-sm text-gray-500">Premium Sound Quality</p>
                        <p class="mt-2 text-lg font-semibold text-indigo-600">${p.price}</p>
                    </div>
                </div>
        `
    }

    document.querySelector("#root").innerHTML=htmlData



}
