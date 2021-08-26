import styled from 'styled-components';

// 하단 고정
export const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    bottom: 0px;
    width: 100%;
`;

// 배경, 내용 중간 정렬
export const Background = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 푸터의 내용
export const FooterContents = styled.div`
    width: 1200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 992px;
`;