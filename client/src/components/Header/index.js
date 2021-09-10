import React from 'react'
import logo from '../../images/logo.png';
import { Positioner, WhiteBackground, HeaderContents } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>                  
                    <Link to='/'>
                    <img alt='logo' className='logo' src={logo} />                       
                    </Link>
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
}

export default Header