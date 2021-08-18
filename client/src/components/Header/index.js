import React from 'react'
import logo from '../../images/logo.jpg';
import { Positioner, WhiteBackground, HeaderContents, Logo, Spacer, GradientBorder } from './styles';

const HeaderContainer = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <img alt='logo' className='logo' src={logo} />
                    <Logo>안심거리·지킴이집 길라잡이</Logo>
                    <Spacer />
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder />
        </Positioner>
    );
}

export default HeaderContainer
