/*global kakao*/ 
import React, { useEffect } from 'react'
import { SeochoData } from '../Marker/SeochoData';

function SeochoMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.491042, 127.0068266),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    
    SeochoData.forEach((el) => {
      // 마커 생성
      new kakao.maps.Marker({
        // 마커가 표시 될 지도
        map: map,
        // 마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        // 마커에 hover시 나타남
        title: el.title,
      });
    });
  };
    return (
        <div>
        <div id="map" style={{width:"800px", height:"800px"}}></div>
       
        </div>
    )
}

export default SeochoMap;