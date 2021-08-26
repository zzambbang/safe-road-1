import React from 'react'
import logo from '../../images/logo.jpg';
import { Positioner, WhiteBackground, HeaderContents, Logo, GradientBorder } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>                  
                    <Link to='/'>
                    <img alt='logo' className='logo' src={logo} />                       
                    </Link>
                    <Logo>안심거리·지킴이집 길라잡이</Logo>
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder />
        </Positioner>
    );
}

export default Header