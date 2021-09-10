import styled from 'styled-components';
import oc from 'open-color';

// 상단 고정
export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 150px;
`;

// 흰 배경, 내용 중간 정렬
export const WhiteBackground = styled.div`
    background: #87ceeb;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 헤더의 내용
export const HeaderContents = styled.div`
    width: 1200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 992px;
`;


// 로고
export const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 4px;
    color: ${oc.black[9]};
    font-family: 'Rajdhani';
    text-align: center;
`;

// 중간 여백
export const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
export const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.blue[6]}, ${oc.cyan[5]});
`;