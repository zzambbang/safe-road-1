import React from 'react'
import { Positioner, Background, FooterContents } from './styles';

const Footer = () => {
    return (
        <Positioner>
            <Background>
                <FooterContents>
                        <div>
                            <p>©201호 개발자들</p>
                        </div>
                </FooterContents>
            </Background>
        </Positioner>
    )
}

export default Footer