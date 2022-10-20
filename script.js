
const urlParams = new URLSearchParams(window.location.search);



const url=`https://terithedesigner.dk/wp22_1/wp-json/wp/v2/bike?_embed`;




fetch(url)
    .then(function(res){
        return res.json();

    })

    .then(function(data){
        handleTheList(data);

    })

    function handleTheList(data){ 
       

       data.forEach(showBike);

    }

 

    function showBike(product){ 

        console.log(product);
        const template = document.querySelector("#template_1").content;

        const copy = template.cloneNode(true);   


        copy.querySelector("h4").textContent =product.brand;
        copy.querySelector("h2").textContent =product.title.rendered;
        copy.querySelector("img").src=product._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url;
        copy.querySelector(".displayedprice").textContent =product.price;
        copy.querySelector(".displayedinstock").textContent =product.stock;
        


        const parent = document.querySelector("main");

        parent.appendChild(copy);
 
     }