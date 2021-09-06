import React from 'react'
import logo from '../../images/logo.png';
import { Positioner, WhiteBackground, HeaderContents, GradientBorder } from './styles';
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
            <GradientBorder />
        </Positioner>
    );
}

export default Header