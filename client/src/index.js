import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import SideBar from './sidebar/sidebar';
import HeaderContainer from './components/Header';
import { ReactComponent as Seoul } from './components/Seoulmap/Seoul.svg';

function App() {

  const onSubmit = () => {
    alert('클릭 성공');
  }

  return (
    <div id='App'>
      <HeaderContainer />
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <div id='page-wrap'>
        {/* br 문제 해결 */}
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1>여성 아동 안심거리&지킴이집 길라잡이</h1>
      </div>
      <div onClick={onSubmit}>
        <Seoul />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);