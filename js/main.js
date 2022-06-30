// var myArray = document.querySelectorAll('.col-md-4');
var productList;


async function getMovies(){
    var response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1u49dNjF2zjqSV7uyUhixJLVIm-q1-ABcnzAis0OLjd1UKuRp0PBwgPuM`);
    result = await response.json();
    movies = result.results;
    display(movies);
}
function display(list){
    let cartona =``;
    for(var i =0 ; i< list.length ; i++){
        cartona += `<div class="col-md-4">
        <figure class="item">

        <img src='https://image.tmdb.org/t/p/w500${list[i].poster_path}' class="w-100" alt="img">

        <figcaption class="py-5 ">
            <h4>${list[i].original_title}</h4>
            <p>${list[i].overview}</p>
            <p>${list[i].release_date}</p>
        </figcaption>

    </figure>
    </div>`
    }
    document.querySelector('.row').innerHTML = cartona;
}
(async function (){
    await getMovies();
    
})();


function searchProducts(searchTerm){
    var searchList = [];
    for(var i=0 ; i<movies.length ; i++){
        if(movies[i].original_title.toLowerCase().includes(searchTerm.toLowerCase()) == true){
            searchList.push(movies[i]);
        }
    }
    display(searchList);
}
