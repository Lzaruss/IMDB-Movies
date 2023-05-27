const movieInput = document.getElementById("movieInput");

function searchMovie(input) {
    const apiURL = `https://v3.sg.media-imdb.com/suggestion/x/${input}.json?includeVideos=1`;
    fetch(apiURL).then((res) => res.json()).then((data) => {
        let output = "";
        data.d.forEach((movie) => {
            if (movie.id.startsWith("tt")){
                output += `
                    <div class="card">
                        <div class="card-img">
                            <img src="${movie.i.imageUrl}" alt="${movie.l}">
                        </div>
                        <div class="card-info">
                            <h3>${movie.l}</h3>
                            <p>${movie.s}</p>
                            <p>${movie.y}</p>
                            <p>${movie.id}</p>
                            <button onclick="showMovie('${movie.id}')">View Movie</button>
                        </div>
                    </div>
                `;
            }
        });

        document.getElementById("movies").innerHTML = output;
    });
}

movieInput.addEventListener("keyup", (e) => {
    searchMovie(e.target.value);
});

function showMovie(id){
    const apiURL = `https://2embed.to/embed/imdb/movie?id=${id}`;
    fetch(apiURL).then((data) => {
        let p = `<p>${apiURL}</p>`;
        let output = `
            <div class="movie">
                <iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
        document.getElementById("movie").innerHTML = output;
        document.getElementById("urlMovie").href = apiURL;
        document.getElementById("urlMovie").innerHTML = apiURL;
    }).catch((err) => {
        console.log(err)
    });
}
