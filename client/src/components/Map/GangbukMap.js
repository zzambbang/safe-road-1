/*global kakao*/ 
import React, { useEffect } from 'react'
import { MarkerData } from '../Marker/MarkerData';
import { RoadMarkerData } from '../Marker/RoadMarkerData';

function GangbukMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.6395260, 127.025448),
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
    
    const linePaths = RoadMarkerData.map(function(line){
      return line.map(function(coord){
          console.log(coord[0], coord[1])
          return new kakao.maps.LatLng(coord[0], coord[1])
        })
    });

    linePaths.forEach((line) => {
        new kakao.maps.Polyline({
        map: map,
        path: line,
        strokeWeight: 5,
        strokeColor: 'blue', 
        strokeOpacity: 1, 
        strokeStyle: 'solid'
      })
    })
    
    }

    return (
        <div>
        <div id="map" style={{width:"40%", height:"50%"}}></div>
       
        </div>
    )
}

export default GangbukMap;