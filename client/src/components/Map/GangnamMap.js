/*global kakao*/ 
import React, { useEffect } from 'react'

const GangnamMap=()=>{

  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.498095, 127.027610),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition  = new kakao.maps.LatLng(37.498095, 127.027610); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>
        <div id="map" style={{width:"800px", height:"800px"}}></div>
       
        </div>
    )
}

export default GangnamMap;