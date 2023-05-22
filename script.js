const movieInput = document.getElementById("movieInput");

//"2embed.to/embed/imdb/movie?id="
function searchMovie(input) {
    let api = `https://v3.sg.media-imdb.com/suggestion/x/${input}.json?includeVideos=1`;

    fetch(api).then((response) => {response.json}).then((data) => {console.log(data)});
}


movieInput.addEventListener("keyup", (e) => {
    searchMovie(e.target.value);
});
