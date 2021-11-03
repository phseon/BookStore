import React, { Fragment } from 'react';
import styled from 'styled-components';

function Home() {

    const Title = styled.div`
    font-size: 45px;
  `


  const aa = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    color: black;
  `


  const Sidebar = styled.div`
  border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 150px; 
`

  const I = styled.li`
  margin-bottom: 50px;
  `

    return (
        <>
        <Fragment>

      
       <Sidebar className="navigation side">
        <ul>

            <I class="btn"><a href="#">공과대학</a></I>
            <I class="list">
                    <I><a href="#">- 컴퓨터공학과 </a></I>
                    <I><a href="#">- 화학공학과</a></I>
               
            </I>
            <I class="btn"><a href="#">생명산업과학대학</a></I>
            <I class="list">
                    <I><a href="#">- 식품영양학과</a></I>
                    <I><a href="#">- 식품공학과</a></I>
                </I>
        </ul>
    </Sidebar> 
    <div>
      
    </div>
    </Fragment>
    <p>메인페이지</p>
    </>
    )
};

export default Home;