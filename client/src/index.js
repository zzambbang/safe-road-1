import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import SideBar from './sidebar/sidebar';
import seoulmap from './seoulmap.jpg'
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <div id='App'>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />

      <div id='page-wrap'>
        <h1>여성 아동 안심거리&지킴이집 길라잡이</h1>
        <img alt='seoulmap' className='seoulmap' src={seoulmap} />
        
        <HeaderContainer />
      </div>
      </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
