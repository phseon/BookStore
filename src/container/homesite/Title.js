import React from 'react';
import styled from 'styled-components';

const Search = styled.input`
font-color: #fff;
`

function Title() {

    return (
        <div className="Information">
            <p>순천대 서점</p>
            <div>
           <Search type={"text"} placeholder={"제품명"}></Search>
           <button> 검색 </button>
</div>
</div>
    );
}

export default Title;