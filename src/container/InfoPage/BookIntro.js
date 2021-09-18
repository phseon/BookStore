const BookIntro = () => {



return (
    <div className="BookIntro">
    <p>학과 이름 | 중고 여부</p>
    <p>도서명</p>
    <p>가격</p>
    <p>등록일자</p>
    <p>중고 상태</p>


    <div className="itemSelect">
    <label className="inputFileButton" for="file">
    사진 선택
    </label>
    </div>
    </div>
    );
};
export default BookIntro;