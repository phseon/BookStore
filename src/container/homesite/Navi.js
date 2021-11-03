import React from 'react';
import styled from 'styled-components';

// const Navigation = styled.ul`
// border: 1px solid black;
// display: inline;
// justify-content: end;
// `
const Btn = styled.li`
margin: 0px 15px;
display: inline-block;
`

function Navi() {
<div>
        {/* <Navigation> */}
            <Btn>로그인</Btn>
            <Btn>장바구니</Btn>
            <Btn>마이페이지</Btn>
            <Btn>쪽지</Btn>
        {/* </Navigation> */}
</div>
}
export default Navi;