function showAstroPhoto() {
    fetch('https://images-api.nasa.gov/asset/as11-40-5874')
    .then(response => response.json())
    .then(asset => {
        console.log(asset.collection);
        console.log(asset.collection.items[0].href);
        document.getElementById('astro-ph').src = asset.collection.items[0].href;
    });
}
