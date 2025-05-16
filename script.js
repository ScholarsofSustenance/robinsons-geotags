let map = L.map('map').setView([14.5995, 120.9842], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

let currentLayer = null;

function loadRoute(area) {
    if (currentLayer) {
        map.removeLayer(currentLayer);
    }

    fetch(`${area}.geojson`)
        .then(response => response.json())
        .then(data => {
            currentLayer = L.geoJSON(data, {
                style: { color: 'red', weight: 4 }
            }).addTo(map);
            map.fitBounds(currentLayer.getBounds());

            document.getElementById("route-info").innerHTML = `
                <h3>${area.toUpperCase()} Route Info</h3>
                <p>Route data loaded for: ${area}</p>
            `;
        })
        .catch(error => {
            console.error("Error loading route:", error);
            document.getElementById("route-info").innerHTML = `
                <h3>Error</h3>
                <p>Could not load data for: ${area}</p>
            `;
        });
}
