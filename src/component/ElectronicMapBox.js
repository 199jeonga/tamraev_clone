/* global kakao */
import React,{useEffect} from 'react'
import '../style/electronicMapBox.scss';
const { kakao } = window;

function ElectronicMapBox() {

  useEffect(() => {
    let container = document.getElementById("map");
    (function location(){
      navigator.geolocation.getCurrentPosition(
      function(position) {
      console.log("위도 : " + position.coords.latitude);
      console.log("경도 : " + position.coords.longitude);
      }, 
      );
                  
      })();
    const options = {
      center: new window.kakao.maps.LatLng(location.coords.latitude, location.coords.longitude),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
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