
function loadRoute(area) {
    const routeInfo = document.getElementById('route-info');
    routeInfo.innerHTML = '<h3>' + area.toUpperCase() + ' Route Info</h3><p>Route data loaded for: ' + area + '</p>';
}
