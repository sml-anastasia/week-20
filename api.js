document.addEventListener("DOMContentLoaded", function(event) {
    showAstroPhoto(0);
});

function showAstroPhoto(i) {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=KiFUeoHdAPdwvsR3Ldo5n7geSSbJCtTZcQtj8tLu')
    .then(response => response.json())
    .then(marsRover => {
        console.log(marsRover);
        document.getElementById('marsRover-name').innerHTML = (marsRover.photos[i].rover.name);
        document.getElementById('earth-date').innerHTML = (marsRover.photos[i].earth_date);
        document.getElementById('astro-ph').src = (marsRover.photos[i].img_src);
    })
}

//KiFUeoHdAPdwvsR3Ldo5n7geSSbJCtTZcQtj8tLu