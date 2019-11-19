/*
function initMap() {

    const myMap = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 7,
            center: directions[0].cords
        }
    )
    directions.forEach(elm => new google.maps.Marker({ position: elm.cords, map: myMap, title: elm.title }))
}
*/




/*
function initMap() {

    printMap(directions[1].cords)

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            position => printMap(position.coords),
            err => console.log(err)
        )

    } else {
        console.log('Lo siento, no dispones de API de geolocalización')
    }
}




function printMap(coords) {

    const myMap = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 16,
            center: { lat: coords.latitude, lng: coords.longitude }
        }
    )

    myMap.setCenter({ lat: coords.latitude, lng: coords.longitude })

    new google.maps.Marker({ position: { lat: coords.latitude, lng: coords.longitude }, map: myMap })
}
*/





function initMap() {

    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    const myMap = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 7,
            center: directions[0].cords,
            styles: mapStyles.retro
        }
    )

    const directionRequest = {
        origin: 'Warner Madrid',
        destination: 'Razzmatazz',
        travelMode: 'DRIVING'
    }

    directionsService.route(
        directionRequest,
        function (response, status) {
            if (status === 'OK') {
                console.log('La respuesta del directionService es', response)
                directionsDisplay.setDirections(response)
            } else {
                console.log('Directions request failed due to ' + status);
            }
        }
    )

    directionsDisplay.setMap(myMap)
}