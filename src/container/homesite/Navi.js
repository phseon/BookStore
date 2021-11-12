import React from 'react';
import styled from 'styled-components';

function Navigation() {

    const Navi = styled.ul`
    border: 1px solid black;
    display: inline;
    justify-content: end;
    `
    const Btn = styled.li`
    margin: 0px 15px;
    display: inline-block;
    `
return (
<>
    
        <Navi>
            <Btn>로그인</Btn>
            <Btn>장바구니</Btn>
            <Btn>마이페이지</Btn>
            <Btn>쪽지</Btn>
        </Navi>
</>
)
}
export default Navigation;