import {map as createMap, tileLayer as createTileLayer, icon as createIcon, marker as createMarker} from '../../vendor/leaflet';
const myMap = document.querySelector('#map');

const initLeaflet = () => {
  if (myMap) {
    myMap.querySelector('picture').remove();

    const mapOptions = {
      center: [55.82308831185497, 37.62391973328728],
      zoom: 13,
      scrollWheelZoom: false,
    };

    const map = createMap('map', mapOptions);

    const tileLayer = createTileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
    );

    tileLayer.addTo(map);

    const icon = createIcon({
      iconUrl: './img/svg/map-pin.svg',
      iconSize: [35, 45],
      iconAnchor: [18, 45],
    });

    const marker = createMarker([55.816506445034176, 37.637011498705205], {icon});

    marker.addTo(map);
  }
};

export {initLeaflet};
