// import Navigation from "../container/homesite/Navi";
// import Title from "../container/homesite/Title";
import React from 'react';
import styled from 'styled-components';

function Homesite() {

    const Main = styled.div`
    width: 1500px;
    margin: auto;
    padding: 40px 0 40px 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `
    const Navi = styled.ul`
    border: 1px solid black;
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
    `
    const Btn = styled.li`
    margin: 0px 15px;
    width: 150px;
    display: inline-block;
    `
    const Search = styled.input`
    width: 500px;
    height: 40px;
    margin: 38px 20px 0 20px;
    color: #fff;
    `     
    const Sidebar = styled.div`
    border: 1px solid black;
        float: left;
        flex-direction: row;
        justify-content: start;
        width: 150px; 
    `

    const I = styled.li`
    margin-bottom: 50px;
    `
return (
    <>
    <Main>
    <img src={require("../container/homesite/ScnuBookstoreLogo.png").default} alt="logo"></img>
    {/* require 객체 반환. default 이미지 불러오기 */}
    <Search type={"text"} placeholder={"도서명을 검색하세요"}></Search>
    <button> 검색 </button>
    <Navi>
        <Btn>로그인</Btn>
        <Btn>장바구니</Btn>
        <Btn>마이페이지</Btn>
        <Btn>쪽지</Btn>
    </Navi>

    

    </Main>
<>
<Sidebar className="navigation side">
        <ul>

            <I className="btn">공과대학</I>
            <I className="list">
                    <I>- 컴퓨터공학과</I>
                    <I>- 화학공학과</I>
               
            </I>
            <I className="btn">생명산업과학대학</I>
            <I className="list">
                    <I>- 식품영양학과</I>
                    <I>- 식품공학과</I>
                </I>
        </ul>
    </Sidebar>
</>
</>
)
}


export default Homesite;