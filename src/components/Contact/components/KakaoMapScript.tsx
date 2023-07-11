import { Link, useLocation, useNavigate } from 'react-router-dom';

const { kakao } = window as any;

const KakaoMapScript = () => {
  let check = 1;
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(37.5304721, 126.920265),
    level: 6,
  };
  const map = new kakao.maps.Map(container, options);
  var mapTypeControl = new kakao.maps.MapTypeControl();
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

  let markerPosition = new kakao.maps.LatLng(37.5304721, 126.920265);

  let marker = new kakao.maps.Marker({
    position: markerPosition,
    title: '움직이는네모',
  });
  var iwContent =
    '<div style="padding:8px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +
    `<div style="font-weight: 600; margin-bottom: 3px;">움직이는네모</div>` +
    `<a href='https://www.google.com/maps/dir/?api=1&destination=%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%98%81%EB%93%B1%ED%8F%AC%EA%B5%AC%20%EA%B5%AD%ED%9A%8C%EB%8C%80%EB%A1%9C72%EA%B8%B8%205'>Directions</a>` +
    `</div>`;

  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
  });
  infowindow.open(map, marker);

  kakao.maps.event.addListener(marker, 'click', function () {
    if (check == 1) {
      infowindow.close();
      check = 0;
    } else {
      infowindow.open(map, marker);
      check = 1;
    }
  });

  marker.setMap(map);
};

export default KakaoMapScript;
