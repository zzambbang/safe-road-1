import React from 'react'
import { Positioner, Background, FooterContents } from './styles';

const Footer = () => {
    return (
        <Positioner>
            <Background>
                <FooterContents>
                        <div>
                            <p>대표자 전화번호 : 010-1234-5678</p>
                            <p>made by. 201호 개발자들</p>
                        </div>
                </FooterContents>
            </Background>
        </Positioner>
    )
}

export default Footer