import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import SideBar from './sidebar/sidebar';
import HeaderContainer from './components/Header';
import  Seoul  from './components/Seoulmap/Seoul.jsx';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import saferoad_all from './components/Menu/saferoad_all';
import safehouse_all from './components/Menu/safehouse_all';
import motivation from './components/Menu/motivation';

function App() {
  return (
    <Router>
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
    <div id='App' className='container'>
    <HeaderContainer />
    <div id='page-wrap'>
    <Switch>
      <Route path='/' exact>      
        <h1>안심거리·지킴이집을 확인하고 싶은 지역을 선택해주세요!</h1>
        <Seoul/>
      </Route>
      <Route path='/saferoad_all' component={saferoad_all}></Route>
      <Route path='/safehouse_all' component={safehouse_all}></Route>
      <Route path='/motivation' component={motivation}></Route>
    </Switch>
      </div>   
    </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);