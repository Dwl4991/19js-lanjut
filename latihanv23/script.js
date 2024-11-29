$.ajax({
    url: 'http://www.omdbapi.com/?apikey=d1783883&s=warkop',
    success: results => {
       const movies = results.Search;
       let cards ='';
       movies.forEach(m => {
        cards += ` <div class="col-md-4 my-5">
                   <div class="card" >
                   <img src="" class="card-img-top" ">
                   <div class="card-body">
                     <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Tahun Realease</h6>
                    <a href="#" class="btn btn-primary">Show Detail</a>
                    </div>
                    </div>
                     </div>`;
       })
    },
    error: () => {
        console.log(e.responseText);
    }
});