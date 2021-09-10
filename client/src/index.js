import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Howtouse from './components/Howtouse/Howtouse';
import SideBar from './sidebar/sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Seoul from './components/Seoulmap/Seoul.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import saferoad_all from './components/Menu/saferoad/saferoad_all';
import safehouse_all from './components/Menu/safehouse/safehouse_all';
import motivation from './components/Menu/motivation/motivation';
import Dobong_gu from './components/county/Dobong_gu'; import Dongdaemun_gu from './components/county/Dongdaemun_gu'; import Dongjak_gu from './components/county/Dongjak_gu'; import Eunpyeong_gu from './components/county/Eunpyeong_gu'; import Gangbuk_gu from './components/county/Gangbuk_gu'; import Gangdong_gu from './components/county/Gangdong_gu'; import Gangnam_gu from './components/county/Gangnam_gu'; import Gangseo_gu from './components/county/Gangseo_gu'; import Geumcheon_gu from './components/county/Geumcheon_gu'; import Guro_gu from './components/county/Guro_gu'; import Gwanak_gu from './components/county/Gwanak_gu'; import Gwangjin_gu from './components/county/Gwangjin_gu'; import Jongno_gu from './components/county/Jongno_gu'; import Jung_gu from './components/county/Jung_gu'; import Jungnang_gu from './components/county/Jungnang_gu'; import Mapo_gu from './components/county/Mapo_gu'; import Nowon_gu from './components/county/Nowon_gu'; import Seocho_gu from './components/county/Seocho_gu'; import Seodaemun_gu from './components/county/Seodaemun_gu'; import Seongbuk_gu from './components/county/Seongbuk_gu'; import Seongdong_gu from './components/county/Seongdong_gu'; import Songpa_gu from './components/county/Songpa_gu'; import Yangcheon_gu from './components/county/Yangcheon_gu'; import Yeongdeungpo_gu from './components/county/Yeongdeungpo_gu'; import Yongsan_gu from './components/county/Yongsan_gu';

function App() {
  return (
    <Router>
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
    <div id='App' className='container'>
    <Header />
    <div id='page-wrap'>
    <Switch>
      <Route path='/' exact>      
        <Seoul/>
        <Howtouse/>
      </Route>
      <Route path='/saferoad_all' component={saferoad_all}>
      </Route>
      <Route path='/safehouse_all' component={safehouse_all}></Route>
      <Route path='/motivation' component={motivation}>
      </Route> 
      <Route path='/Dobong_gu' component={Dobong_gu}></Route> <Route path='/Dongdaemun_gu' component={Dongdaemun_gu}></Route> <Route path='/Dongjak_gu' component={Dongjak_gu}></Route> <Route path='/Eunpyeong_gu' component={Eunpyeong_gu}></Route> <Route path='/Gangbuk_gu' component={Gangbuk_gu}></Route> <Route path='/Gangdong_gu' component={Gangdong_gu}></Route> <Route path='/Gangnam_gu' component={Gangnam_gu}></Route> <Route path='/Gangseo_gu' component={Gangseo_gu}></Route> <Route path='/Geumcheon_gu' component={Geumcheon_gu}></Route> <Route path='/Guro_gu' component={Guro_gu}></Route> <Route path='/Gwanak_gu' component={Gwanak_gu}></Route> <Route path='/Gwangjin_gu' component={Gwangjin_gu}></Route> <Route path='/Jongno_gu' component={Jongno_gu}></Route> <Route path='/Jung_gu' component={Jung_gu}></Route> <Route path='/Jungnang_gu' component={Jungnang_gu}></Route> <Route path='/Mapo_gu' component={Mapo_gu}></Route> <Route path='/Nowon_gu' component={Nowon_gu}></Route> <Route path='/Seocho_gu' component={Seocho_gu}></Route> <Route path='/Seodaemun_gu' component={Seodaemun_gu}></Route> <Route path='/Seongbuk_gu' component={Seongbuk_gu}></Route> <Route path='/Seongdong_gu' component={Seongdong_gu}></Route> <Route path='/Songpa_gu' component={Songpa_gu}></Route> <Route path='/Yangcheon_gu' component={Yangcheon_gu}></Route> <Route path='/Yeongdeungpo_gu' component={Yeongdeungpo_gu}></Route> <Route path='/Yongsan_gu' component={Yongsan_gu}></Route>
    </Switch>
      </div>
      <Footer />  
    </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);