document.addEventListener("DOMContentLoaded", function(event) {
    showMarsPhoto(0);
    showAstroPhoto();
});

function showMarsPhoto(i) {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=KiFUeoHdAPdwvsR3Ldo5n7geSSbJCtTZcQtj8tLu')
    .then(response => response.json())
    .then(marsRover => {
        console.log(marsRover);
        document.getElementById('marsRover-name').innerHTML = (marsRover.photos[i].rover.name);
        document.getElementById('earth-date').innerHTML = (marsRover.photos[i].earth_date);
        document.getElementById('mars-ph').src = (marsRover.photos[i].img_src);
    })
}

function showAstroPhoto() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=KiFUeoHdAPdwvsR3Ldo5n7geSSbJCtTZcQtj8tLu')
    .then(response => response.json())
    .then(photo => {
        console.log(photo);
        document.getElementById('astro-ph').src = (photo.url);
    })
}

//KiFUeoHdAPdwvsR3Ldo5n7geSSbJCtTZcQtj8tLu