/*global kakao*/ 
import React, { useEffect } from 'react'
import { MarkerData } from '../Marker/MarkerData';

function GuroMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.495454, 126.887459),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    
    MarkerData.forEach((el) => {
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
        <div id="map" style={{width:"40%", height:"50%"}}></div>
       
        </div>
    )
}

export default GuroMap;