// //fetch
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){

//     const inputkeword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=d1783883&s=' + inputkeword.value)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showCard(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         //ketika tombol detail di klik
//         const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//         modalDetailButton.forEach(btn => {
//             btn.addEventListener('click', function(){
//             const imdbid = this.dataset.imdbid;
//            fetch('http://www.omdbapi.com/?apikey=d1783883&i=' + imdbid)
//            .then(response => response.json())
//            .then(m => {
//             const movieDetail = showMovieDetail(m);
//             const modalBody = document.querySelector('.modal-body');
//             modalBody.innerHTML = movieDetail;
//            });
            
                    
//             });
//         });


//     });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
const inputkeword = document.querySelector('.input-keyword');
const movies = await getMovies(inputkeword.value);
updateUI(movies);
});


//event binding
document.addEventListener('click', async function(e){
 if( e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
    
 }
});

function getMovieDetail(imdbid){
  return fetch('http://www.omdbapi.com/?apikey=d1783883&i=' + imdbid)
               .then(response => response.json())
               .then(m => m);
}

function updateUIDetail(m){
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = movieDetail;
}



function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=d1783883&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCard(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}


function showCard(m) {
   

    return ` <div class="col-md-4 my-5">
                   <div class="card" >
                   <img src="${m.Poster}" class="card-img-top" ">
                   <div class="card-body">
                     <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Detail</a>
                    </div>
                    </div>
                     </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
             <div class="row">
                <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" >
                </div>
                <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>${m.Director}</strong></li>
                    <li class="list-group-item"><strong>${m.Actors}</strong></li>
                    <li class="list-group-item"><strong>${m.Writer}</strong></li>
                    <li class="list-group-item"><strong>${m.Plot}</strong><br>a</li>
                </ul>
                </div>
            </div>
            </div>`;
            
}