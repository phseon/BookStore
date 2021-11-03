const BookIntro = () => {



return (
    <>
    <div className="BookDepart">
    <h3>학과 이름 | 중고 여부</h3>
    <div className="BookIntro">
    <h2>도서명</h2>
    <h2>가격</h2>
    <div className="itemSelect">
    {/* <label className="inputFileButton" for="file">
    사진 선택
    </label> */}
    </div>
    </div>
    </div>
    <div className="Bookstate">
    <h3>등록일자</h3>
    <h3>중고 상태</h3>
    </div>
    </>
    );
    //사진선택빼기 - 등록페이지로
};
export default BookIntro;