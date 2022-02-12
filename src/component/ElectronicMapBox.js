/* global kakao */
import React,{useEffect} from 'react'
import '../style/electronicMapBox.scss';
const { kakao } = window;

function ElectronicMapBox() {

  useEffect(() => {
let container = document.getElementById("map");
const options = {
  center: new window.kakao.maps.LatLng(37.56646, 126.98121),
  level: 5,
};
let map = new window.kakao.maps.Map(container, options);

function locationLoadSuccess(pos){
  // 현재 위치 받아오기
  const currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
  // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
  map.panTo(currentPos);
  // 마커 생성
  const marker = new kakao.maps.Marker({
    position: currentPos
  });
  // 기존에 마커가 있다면 제거
  marker.setMap(null);
  marker.setMap(map);
};

const locationLoadError =  ()=>{
  alert('위치 정보를 가져오는데 실패했습니다.');
}
const getCurrent =  ()=>{
  navigator.geolocation.getCurrentPosition(locationLoadSuccess,locationLoadError);
}
  getCurrent();
  }, []);


  return (
    <div id="electronicMapBox">
      <span>&#42; 거리순</span>
      <div className="el_map_area">
        <div className="list_inner">
        </div>
        <div className="map_inner" id="map">
          <div className='map_operating_part'></div>
          <div className='map_zoom_part'></div>
        </div>
      </div>
      <p className='el_map_text'>
      <strong>※ 환경부 운영기관 충전소 기준</strong> <br />
      ※ 본 사이트는 제주도 위치 기준 전기차 충전소만 안내하오니 참고 바랍니다.
      </p>
    </div>
  )
}

export default ElectronicMapBox